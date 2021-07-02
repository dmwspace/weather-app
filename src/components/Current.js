import React from "react";

function Current(props) {

    const currentTemp = Math.round(props.temp)
    return (
            !props.clicked ?
                null :
            props.clicked && !props.fetched ?
                <h1>Sorry that zip code could not be found. Please try again.</h1> :
                <div>
                    <h1>Current weather conditions for {props.cityName}, {props.stateName}:</h1>
                    <h2>{props.description}</h2> 
                    <h2>Temp: {currentTemp} degrees</h2>
                    <h2>Wind: {props.windDirection} {props.windSpeed} mph </h2>
                </div>
                
    )
}

export default Current
