import React from "react";

function Current(props) {

    const currentTemp = Math.round(props.temp)
    const feelsLike = Math.round(props.feelsLike)
    
    return (
            !props.clicked ?
                null :
            props.clicked && !props.fetched ?
                <h1>Sorry that zip code could not be found. Please try again.</h1> :
                <div>
                    <h1>Current weather conditions for {props.cityName}, {props.stateName}:</h1>
                    <img src={process.env.PUBLIC_URL + "/icons/" + props.currentIcon + ".png"} alt="Problem" />
                    <h2>Temp: {currentTemp} degrees, Feels like: {feelsLike} degrees</h2>
                    <h2>Wind: {props.windDirection} {props.windSpeed} mph </h2>
                </div>
                
    )
}

export default Current
