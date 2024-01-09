import React, { useEffect, useState } from "react";
import Habit from "./Habit";
import NewHabit from "./NewHabit";
import classes from "../styles/HabitList.module.css"

const HabitList = (props) => {
    let [habitUpdated, setHabitUpdated] = useState(false)
    let allHabits = []
    for (let key in localStorage) {
        if (JSON.parse(localStorage.getItem(key)) == null) continue
        allHabits.push([key, JSON.parse(localStorage.getItem(key))])
    }

    useEffect(() => {
        for (let key in localStorage) {
            if (JSON.parse(localStorage.getItem(key)) == null) continue
            allHabits.push(JSON.parse(localStorage.getItem(key)))
        }
    }, [habitUpdated])
    return (
        <div className={classes.container}>
            <NewHabit data={{ setHabitUpdated, habitUpdated }} />
            {allHabits.length > 0
                ?
                <div className={classes.containerList}>
                    {allHabits.map(habit =>
                        <div className={classes.habitElinerContainer}>
                            <Habit habitData={habit} updated={{ setHabitUpdated, habitUpdated }} />
                            <div className={classes.eliner}></div>
                        </div>)
                    }
                </div>
                :
                // <div className={classes.containerList}>
                <div className={classes.emptyHabits}>
                    Создай новую привычку, чтобы начать развиваться!
                </div>
                // </div>
            }
        </div>

    )
}

export default HabitList