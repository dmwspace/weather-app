import React, {useState, useRef} from "react";

function Header() {
    const zipCodeRef = useRef(null)

    const [zipCode, setZipCode] = useState(0)
    const [clicked, setClicked] = useState(false)
    const [cityName, setCityName] = useState("")
    const [stateName, setStateName] = useState("")
    const [temp, setTemp] = useState("")
    const [description, setDescription] = useState("")

    function handleChange(e) {
        setZipCode(e)
    }

    function handleClick() {
        const apiKey = process.env.REACT_APP_WEATHERBIT_API_KEY
        const url = `http://api.weatherbit.io/v2.0/current?postal_code=${zipCode}&country=US&units=I&key=${apiKey}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setClicked(true)
            setCityName(data.data[0].city_name)
            setStateName(data.data[0].state_code)
            setDescription(data.data[0].weather.description)
            setTemp(data.data[0].temp)
            zipCodeRef.current.focus()
            zipCodeRef.current.value = null
        })
    }
    const currentWeatherInfo = clicked ?
        <div>
            <h1>Current weather conditions for {zipCode} - {cityName}, {stateName}:</h1>
            <h2>{description}</h2> 
            <h2>Temp: {temp} degrees</h2>
        </div>
        :null

    return (
        <div>
            <input type="text"
                placeholder="Enter US Zip Code"
                ref={zipCodeRef}
                //value={zipCode}
                onChange={(e) => handleChange(e.target.value)}
            ></input><button
                onClick={handleClick}
            >Submit</button>
            {currentWeatherInfo}
        </div>
    )
}
export default Header