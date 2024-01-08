import React, { useState } from "react";
import "../styles/NewHabit.css"

const NewHabit = (props) => {

    const [habit, setHabit] = useState("")

    const addHabit = () => {
        localStorage.setItem(habit, 0)
        setHabit = ''
    }

    return (
        <div className="containerNH">
            <div className="cont">
                <input className="input" type="text" placeholder="Напиши сюда привычку" value={habit} onChange={e => setHabit(e.target.value)} />
                <button className="button" onClick={addHabit}>Добавить</button>
            </div>
            {/* <h1>{localStorage.getItem()}</h1> */}
        </div>
    )
}

export default NewHabit