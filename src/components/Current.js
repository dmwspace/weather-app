import React from "react";
import {Card} from "react-bootstrap"

function Current(props) {

    const currentTemp = Math.round(props.temp)
    const feelsLike = Math.round(props.feelsLike)
    
    return (
            !props.clicked ?
                null :
            props.clicked && !props.currentFetched ?
                <h1>Sorry that zip code could not be found. Please try again.</h1> :
                <Card bg="light" bsPrefix="current-conditions">
                    <Card.Title><h1>{props.cityName}, {props.stateName}:</h1></Card.Title>
                    <Card.Body>
                        <div>
                            <img src={process.env.PUBLIC_URL + "/icons/" + props.currentIcon + ".png"} alt="Problem" />
                            <span className="currently">Currently {currentTemp}º, Feels like: {feelsLike}º</span>
                        </div>
                        <h2 className="wind">Wind: {props.windDirection} {props.windSpeed} mph </h2>
                    </Card.Body>
                </Card>                
    )
}

export default Current
