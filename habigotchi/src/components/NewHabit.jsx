import React, { useEffect, useState } from "react";
import "../styles/NewHabit.css"

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
        // console.log(addedHabit, Date.now())
        localStorage.setItem(Date.now(), JSON.stringify(addedHabit));
        setHabit('')
        data.setHabitUpdated(!data.habitUpdated)
    }

    return (
        <div className="containerNH">
            <div className="cont">
                <input className="input" type="text" value={habit} onChange={e => setHabit(e.target.value)} />
            </div>
            <button className="button" onClick={() => addHabit(habit)} > + </button>
        </div>
    )
}

export default NewHabit