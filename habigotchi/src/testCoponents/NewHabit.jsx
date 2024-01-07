import React, {useEffect, useState} from "react";
// import "../styles/NewHabit.css"

const NewHabit = (props) => {
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
    }



    return (
        <div className="container">
            <input type="text" onChange={e => setHabit(e.target.value)} />
            <button onClick={() => addHabit({})}>
                +++
            </button>
        </div>
    )
}

export default NewHabit