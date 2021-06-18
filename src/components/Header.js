import React, {useState, useRef, useEffect} from "react";

function Header() {
    const zipCodeRef = useRef(null)

    const [fiveDigits, setFiveDigits] = useState(null)
    const [zipCode, setZipCode] = useState(0)
    const [clicked, setClicked] = useState(false)
    const [cityName, setCityName] = useState("")
    const [stateName, setStateName] = useState("")
    const [temp, setTemp] = useState("")
    const [description, setDescription] = useState("")
    const [windDirection, setWindDirection] = useState("")
    const [windSpeed, setWindSpeed] = useState("")

    function handleChange(e) {
        setFiveDigits(e)
        console.log(fiveDigits)
    }

    useEffect(() => {
        zipCodeRef.current.focus()
        zipCodeRef.current.value = null
    }, [cityName])

    function handleClick() {
        const apiKey = process.env.REACT_APP_WEATHERBIT_API_KEY
        const url = `http://api.weatherbit.io/v2.0/current?postal_code=${fiveDigits}&country=US&units=I&key=${apiKey}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.data)
            setClicked(true)
            setZipCode(fiveDigits)
            setCityName(data.data[0].city_name)
            setStateName(data.data[0].state_code)
            setDescription(data.data[0].weather.description)
            setTemp(data.data[0].temp)
            setWindSpeed(data.data[0].wind_spd)
            setWindDirection(data.data[0].wind_cdir)
        })
    }
    const currentWeatherInfo = clicked ?
        <div>
            <h1>Current weather conditions for {zipCode} - {cityName}, {stateName}:</h1>
            <h2>{description}</h2> 
            <h2>Temp: {temp} degrees</h2>
            <h2>Wind: {windDirection} {windSpeed} mph </h2>
        </div>
        :null

    const handleKeyPress = e => {
        if (e.key === 'Enter' || e.key === 'Return') {
            handleClick()
        }
    }

    return (
        <div>
            <input type="text"
                placeholder="Enter US Zip Code"
                ref={zipCodeRef}
                //value={zipCode}
                onChange={(e) => handleChange(e.target.value)}
                onKeyDown={handleKeyPress}
            ></input><button
                onClick={handleClick}
            >Submit</button>
            {currentWeatherInfo}
        </div>
    )
}
export default Header