import React from "react";

function FiveDay(props) {
    const year = props.item.datetime.slice(0, 4)
    const month = props.item.datetime.slice(5, 7)
    const date = props.item.datetime.slice(8)
    const dateWithoutLeadingZero = +date
    const monthWithoutLeadingZero = +month

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
            "Sun" :
        weekday === 1 ?
            "Mon" :
        weekday === 2 ?
            "Tues" :
        weekday === 3 ?
            "Wed" :
        weekday === 4 ?
            "Thu" :
        weekday === 5 ?
            "Fri" :
        weekday === 6 ?
            "Sat" :
            null

    const hiTemp = Math.round(props.item.max_temp)
    const loTemp = Math.round(props.item.min_temp)

    return (
        !props.clicked ?
            null :
        props.clicked && !props.fetched ?
            null :
            <div>
                <h1>{fullWeekdayName} {monthWithoutLeadingZero}-{dateWithoutLeadingZero}</h1>
                <img src={process.env.PUBLIC_URL + "/icons/" + props.item.weather.icon + ".png"} alt="Problem" />
                <h2 style={{fontWeight: 700}}>{hiTemp}  <span style={{fontWeight: 400}}>/ {loTemp}</span></h2>
                <div>
                    <img 
                        id="precip"
                        src={props.item.weather.code < 600 || props.item.weather.code > 699 ?
                        process.env.PUBLIC_URL + "/icons/raindrop.png" :
                        process.env.PUBLIC_URL + "/icons/snowflake.png"} 
                        alt="problem"
                    /><span>{props.item.pop}%</span>
                </div>        
            </div>
        
    )
}
export default FiveDay