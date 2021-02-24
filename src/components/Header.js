import React, {useState, useRef} from "react";

function Header() {

    const zipCodeRef = useRef(null)

    const [zipCode, setZipCode] = useState(0)

    function handleChange(e) {
        setZipCode(e)
        console.log(zipCode)
    }

    function handleClick() {
        const url = `api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${process.env.REACT_APP_OPENWEATHERMAPAPI_KEY}`
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data)) 
        console.log(url)
    }
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
        </div>
    )
}
export default Header