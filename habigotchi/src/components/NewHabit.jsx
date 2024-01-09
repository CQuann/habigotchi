import React, { useEffect, useState } from "react";
import classes from "../styles/NewHabit.module.css"

const NewHabit = ({ data }) => {
    const [habit, setHabit] = useState("")

    let allHabits = []
    let addedHabit = {}

    const addHabit = (title) => {
        addedHabit = {
            isDidToday: false,
            strike: 0,
            name: habit,
            timer: 0
        }
        localStorage.setItem(Date.now(), JSON.stringify(addedHabit));
        setHabit('')
        data.setHabitUpdated(!data.habitUpdated)
    }

    return (
        <div className={classes.containerNH}>
            <div className={classes.cont}>
                <input placeholder="Напиши сюда свою привычку!" className={classes.input} type="text" value={habit} onChange={e => setHabit(e.target.value)} />
                <button className={classes.button} onClick={() => addHabit(habit)} > + </button>
            </div>
        </div>
    )
}

export default NewHabit