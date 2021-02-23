import React, {useState, useRef} from "react";

function Header() {

    const zipCodeRef = useRef(null)

    const [zipCode, setZipCode] = useState(0)

    function handleChange(e) {
        const newZip = e.target
        setZipCode(newZip)
    }

    function handleClick() {
        const url = `api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=process.env.REACT_APP_OPENWEATHERMAPAPI_KEY`
        fetch(url)
        .then(res => res.json())
        .then(res => {
            const data = res.data
            console.log(data)
        })
        
    }
    return (
        <div>
            <input type="number"
                placeholder="Enter US Zip Code"
                ref={zipCodeRef}
                value={zipCode}
                onChange={handleChange}
            ></input><button
                onClick={handleClick}
            >Submit</button>
        </div>
    )
}
export default Header