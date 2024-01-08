import React, {useEffect, useState} from "react";
import Habit from "./Habit";
import NewHabit from "./NewHabit";
// import "../styles/HabitList.css"

const HabitList = (props) => {
    let [habitUpdated, setHabitUpdated] = useState(false)
    let allHabits = []
    for(let key in localStorage) {
        if (JSON.parse(localStorage.getItem(key)) == null) continue
        // console.log(JSON.parse(localStorage.getItem(key)))
        allHabits.push(JSON.parse(localStorage.getItem(key)))
    }

    useEffect(() => {
        for(let key in localStorage) {
            if (JSON.parse(localStorage.getItem(key)) == null) continue
            // console.log(JSON.parse(localStorage.getItem(key)))
            allHabits.push(JSON.parse(localStorage.getItem(key)))
        }
    }, habitUpdated)
    
    console.log(allHabits, "allHabits")
    return (
        <div className="containerList">
            <NewHabit data={{setHabitUpdated, habitUpdated}} />
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