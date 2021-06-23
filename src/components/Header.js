import React from "react";
import Hooks from "../hooks/hooks"
import FiveDay from "./FiveDay";
import Current from "./Current"

function Header() {
    const [
        inputRef,
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
    ] = Hooks()

    const currentWeatherInfo = <Current 
        zipCode={zipCode}
        cityName={cityName}
        stateName={stateName}
        description={description}
        temp={temp}
        windDirection={windDirection}
        windSpeed={windSpeed}
        clicked={clicked}
        />

    const forecast = forecastArr.map(item => <FiveDay
        item={item} 
        key={item.index} 
        clicked={clicked}
        />) 

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
            {forecast}
        </div>
    )
}
export default Header