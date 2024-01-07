import React, {useEffect, useState} from "react";
import Habit from "./Habit";
// import "../styles/HabitList.css"

const HabitList = (props) => {

    let allHabits = []
    let keys = Object.keys(localStorage);
    for(let key in localStorage) {
        if (JSON.parse(localStorage.getItem(key)) == null) continue
        // console.log(JSON.parse(localStorage.getItem(key)))
        allHabits.push(JSON.parse(localStorage.getItem(key)))
    }
    
    useEffect(() => {
        allHabits = []
        let keys = Object.keys(localStorage);
        for(let key in localStorage) {
        if (JSON.parse(localStorage.getItem(key)) == null) continue
        // console.log(JSON.parse(localStorage.getItem(key)))
        allHabits.push(JSON.parse(localStorage.getItem(key)))
    }
    }, Object.keys(localStorage))
    
    console.log(allHabits, "allHabits")
    return (
        <div className="containerList">
            {   
                allHabits.map(habit =>
                    <div>
                        <Habit habitData = {habit} />
                        {/* {console.log(habit)} */}
                    </div> 
                )
            }
        </div>
    )
}

export default HabitList