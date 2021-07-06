import React from "react";
import Hooks from "../hooks/hooks"
import FiveDay from "./FiveDay"
import Current from "./Current"

function Header() {

    const [
        inputRef,
        fetched,
        handleKeyPress,
        zipCode, 
        clicked, 
        cityName, 
        stateName, 
        temp,
        currentIcon,
        feelsLike, 
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
        currentIcon={currentIcon}
        feelsLike={feelsLike}
        windDirection={windDirection}
        windSpeed={windSpeed}
        fetched={fetched}
        clicked={clicked}
    />

    const forecast = forecastArr.map((item, index) => <FiveDay
        item={item} 
        key={index}
        number={index} 
        fetched={fetched}
        clicked={clicked}
    />) 
    

    return (
        <div>
            <input type="text"
                placeholder="Enter US Zip Code"
                ref={inputRef}
                onChange={(e) => handleChange(e.target.value)}
                onKeyDown={handleKeyPress}
            ></input><button
                onClick={handleClick}
            ><img 
                src={process.env.PUBLIC_URL + "/icons/glass.png"} alt="?"
                style={{width: 12}}/></button>
            {currentWeatherInfo}
            {forecast}
        </div>
    )
}
export default Header