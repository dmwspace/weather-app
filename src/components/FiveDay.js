import React from "react";

function FiveDay(props) {
    return (
        props.clicked ?
        <div>
            <h1>{props.item.datetime}</h1>
            <h2> {props.item.weather.description}</h2>
            <h2> Hi: {props.item.max_temp}</h2>
            <h2> Lo: {props.item.min_temp}</h2>
            <h2> Precip: {props.item.pop}%</h2>
        </div>
        :null
    )
}
export default FiveDay