import React, {useState, useRef, useEffect} from "react";

function Header() {
    const inputRef = useRef(null)

    const [cityInput, setcityInput] = useState(null)
    const [clicked, setClicked] = useState(false)
    const [cityName, setCityName] = useState("")
    const [stateName, setStateName] = useState("")
    const [temp, setTemp] = useState("")
    const [description, setDescription] = useState("")
    const [windDirection, setWindDirection] = useState("")
    const [windSpeed, setWindSpeed] = useState("")

    function handleChange(e) {
        setcityInput(e)
    }

    useEffect(() => {
        inputRef.current.focus()
        inputRef.current.value = null
    }, [cityName, stateName])

    function handleClick() {
        const apiKey = process.env.REACT_APP_WEATHERBIT_API_KEY
        const url = `http://api.weatherbit.io/v2.0/current?city=${cityInput}&country=US&units=I&key=${apiKey}`
        const url2 = `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityInput}&days=6&units=I&key=${apiKey}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setClicked(true)
            setCityName(data.data[0].city_name)
            setStateName(data.data[0].state_code)
            setDescription(data.data[0].weather.description)
            setTemp(data.data[0].temp)
            setWindSpeed(data.data[0].wind_spd)
            setWindDirection(data.data[0].wind_cdir)
        })
        fetch(url2, {header: {'mode': 'no-cors'}})
        .then(res => res.json())
        .then(data => {

            console.log(data.data)
        })
    }
    const currentWeatherInfo = clicked ?
        !cityName ?
            <h1>Sorry could not find that, try again.</h1> :
            <div>
                <h1>Current weather conditions for {cityName}, {stateName}:</h1>
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
                placeholder="Enter US City, and State"
                ref={inputRef}
                //value={city}
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