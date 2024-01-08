import React, { useEffect, useState } from "react";
import classes from "../styles/Habit.module.css"
// import check from "../../public/image 11.png"

const Habit = ({ habitData, updated }) => {
    console.log(+new Date - habitData[1].timer, 'asdf')
    const [isDidToday, setIsDidToday] = useState(habitData[1].isDidToday)
    let habitToDo = {}

    const clickToDo = (e) => {
        setIsDidToday(true)
        habitToDo = JSON.parse(localStorage.getItem(habitData[0]))
        habitToDo.isDidToday = true
        habitToDo.timer = +new Date
        localStorage.setItem(habitData[0], JSON.stringify(habitToDo))
        updated.setHabitUpdated(!updated.habitUpdated)
    }

    const clickToDel = (e) => {
        localStorage.removeItem(habitData[0])
        updated.setHabitUpdated(!updated.habitUpdated)
    }

    useEffect(() => {
        if (+new Date - habitData[1].timer > 10000) {
            habitToDo = JSON.parse(localStorage.getItem(habitData[0]))
            console.log('if')
            habitToDo.isDidToday = false
            localStorage.setItem(habitData[0], JSON.stringify(habitToDo))
        }
    }, [])

    return (
        <div className={classes.container}>
            <img src={"./image 11.png"} alt="" />
            <div className={classes.titleCont}>
                <div className={classes.title}>
                    {habitData[1].name}
                </div>
            </div>
            {isDidToday
                ? <div className={classes.didTodayContT}>
                    <button>Done!</button>
                </div>
                : <div className={classes.didTodayContF}>
                    <button onClick={clickToDo} >
                        <img src={"./image 11.png"} alt="" />
                    </button>
                </div>
            }
            <div className={classes.strikeCont}>
                <div className="strike">
                    {habitData[1].strike}
                </div>
            </div>
            <div className={classes.delCont}>
                <button onClick={clickToDel} >
                    <img src={"./image 11.png"} alt="" />
                </button>
            </div>
        </div>
    )
}

export default Habit