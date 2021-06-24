import {useState, useRef, useEffect} from "react";

function Hooks() {
    const inputRef = useRef(null)

    const [fetched, setFetched] = useState(false)
    const [fiveDigits, setfiveDigits] = useState(null)
    const [zipCode, setZipCode] = useState(null)
    const [clicked, setClicked] = useState(false)
    const [cityName, setCityName] = useState("")
    const [stateName, setStateName] = useState("")
    const [temp, setTemp] = useState("")
    const [description, setDescription] = useState("")
    const [windDirection, setWindDirection] = useState("")
    const [windSpeed, setWindSpeed] = useState("")
    const [forecastArr, setForecastArr] = useState([])
    
    const handleChange = e => setfiveDigits(e)

    const handleKeyPress = e => {
        if (e.key === 'Enter' || e.key === 'Return') {
            handleClick()
        }
    }

    useEffect(() => {
        inputRef.current.focus()
        inputRef.current.value = null
    }, [zipCode])

    function handleClick() {
        setFetched(false)
        setClicked(true)
        setZipCode(fiveDigits)
        const apiKey = process.env.REACT_APP_WEATHERBIT_API_KEY
        const url = `http://api.weatherbit.io/v2.0/current?postal_code=${fiveDigits}&country=US&units=I&key=${apiKey}`
        const url2 = `https://api.weatherbit.io/v2.0/forecast/daily?postal_code=${fiveDigits}&days=6&units=I&key=${apiKey}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setFetched(true)
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
            setForecastArr(data.data)
            console.log(data.data)
        })
    }
    return (
        [
            inputRef,
            fetched,
            handleKeyPress,
            zipCode, 
            clicked, 
            cityName, 
            stateName, 
            temp, 
            description, 
            windDirection, 
            windSpeed,
            handleChange,
            handleClick,
            forecastArr
        ]
    )
}
export default Hooks