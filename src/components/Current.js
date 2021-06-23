import React from "react";

function Current(props) {
    return (
            props.clicked ?
                <div>
                    <h1>Current weather conditions for {props.zipCode} - {props.cityName}, {props.stateName}:</h1>
                    <h2>{props.description}</h2> 
                    <h2>Temp: {props.temp} degrees</h2>
                    <h2>Wind: {props.windDirection} {props.windSpeed} mph </h2>
                </div>
                :null
    )
}

export default Current
