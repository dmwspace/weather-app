import React from "react";

function FiveDay(props) {
    const year = props.item.datetime.slice(0, 4)
    const month = props.item.datetime.slice(5, 7)
    const date = props.item.datetime.slice(8)

    const monthName = 
        month === "01" ?
            "January" :
        month === "02" ?
            "February" :
        month === "03" ?
            "March" :
        month === "04" ?
            "April" :
        month === "05" ?
            "May" :
        month === "06" ?
            "June" :
        month === "07" ?
            "July" :
        month === "08" ?
            "August" :
        month === "09" ?
            "September" :
        month === "10" ?
            "October" :
        month === "11" ?
            "November" :
            "December"
        
    const fullDate = new Date(`${monthName} ${date}, ${year}`)

    let weekday = fullDate.getDay()

    let fullWeekdayName = 
        weekday === 0 ?
            "Sunday" :
        weekday === 1 ?
            "Monday" :
        weekday === 2 ?
            "Tuesday" :
        weekday === 3 ?
            "Wednesday" :
        weekday === 4 ?
            "Thursday" :
        weekday === 5 ?
            "Friday" :
        weekday === 6 ?
            "Saturday" :
            null

    const hiTemp = Math.round(props.item.max_temp)
    const loTemp = Math.round(props.item.min_temp)

    return (
        !props.clicked ?
            null :
        props.clicked && !props.fetched ?
            null :
            <div>
                <h1>{fullWeekdayName}</h1>
                <img src={process.env.PUBLIC_URL + "/icons/" + props.item.weather.icon + ".png"} alt="Problem" />
                <h2> Hi: {hiTemp}</h2>
                <h2> Lo: {loTemp}</h2>
                <div>
                    <img src={props.item.weather.code < 600 || props.item.weather.code > 699 ?
                        process.env.PUBLIC_URL + "/icons/raindrop.png" :
                        process.env.PUBLIC_URL + "/icons/snowflake.png"} 
                        alt="problem"
                    /><h2>{props.item.pop}%</h2>
                </div>        
            </div>
        
    )
}
export default FiveDay