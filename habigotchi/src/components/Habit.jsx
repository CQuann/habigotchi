import React, { useEffect, useState } from "react";
import classes from "../styles/Habit.module.css"
import check from "./check.png"
import unCheck from "./unCheck.png"
import bin from "./bin.png"

const Habit = ({ habitData, updated }) => {
    const [isDidToday, setIsDidToday] = useState(habitData[1].isDidToday)
    let habitToDo = {}

    const clickToDo = (e) => {
        setIsDidToday(true)
        habitToDo = JSON.parse(localStorage.getItem(habitData[0]))
        habitToDo.isDidToday = true
        habitToDo.timer = +new Date
        habitToDo.strike += 1
        localStorage.setItem(habitData[0], JSON.stringify(habitToDo))
        updated.setHabitUpdated(!updated.habitUpdated)
    }

    const clickToDel = (e) => {
        localStorage.removeItem(habitData[0])
        updated.setHabitUpdated(!updated.habitUpdated)
    }

    useEffect(() => {
        if (+new Date - habitData[1].timer > 10000 && +new Date - habitData[1].timer < 20000) {
            console.log("Привычка сброшена")
            habitToDo = JSON.parse(localStorage.getItem(habitData[0]))
            habitToDo.isDidToday = false
            localStorage.setItem(habitData[0], JSON.stringify(habitToDo))
            return
        }
        if (20000 <= +new Date - habitData[1].timer) {
            console.log('Страйк сброшен')
            habitToDo = JSON.parse(localStorage.getItem(habitData[0]))
            habitToDo.strike = 0
            habitToDo.isDidToday = false
            localStorage.setItem(habitData[0], JSON.stringify(habitToDo))
        }
    }, [])

    return (
        <div className={classes.container}>
            <div className={classes.titleCont}>
                <div className={classes.title}>
                    {habitData[1].name}
                </div>
            </div>
            {isDidToday
                ? <div className={classes.didTodayContT}>
                    <img className={classes.check} src={check} />
                </div>
                : <div className={classes.didTodayContF}>
                    <img onClick={clickToDo} className={classes.unCheck} src={unCheck} />
                </div>
            }
            <div className={classes.strikeCont}>
                <div className={classes.strike}>
                    {habitData[1].strike}
                </div>
            </div>
            <div className={classes.delCont}>
                <img src={bin} onClick={clickToDel} className={classes.bin} />
            </div>
        </div>
    )
}

export default Habit