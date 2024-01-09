import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import classes from "../styles/HomePage.module.css"
import logo from "./FullLogo.png"
import play from "./Play.png"

const HomePage = (props) => {

    return (
        <div className={classes.container}>
            <div className={classes.logoCont}>
                <img src={logo} className={classes.logo} />
            </div>
            <div className={classes.title}>
                Начни развивать привычки прямо сейчас!
            </div>
            <div className={classes.playCont}>
                <Link to='/habits' >
                    <img className={classes.play} src={play} />
                </Link>
            </div>
            <div className={classes.description}>
                Привет, дорогой друг! Ты постоянно забываешь что-то сделать? Тогда тебе к нам, ведь здесь ты погрузишься в мир игры, где будешь развивать свои привычки вместе с нашей коалой Хаби. Мы верим, что ты способен стать лучшей версией себя, а наша игра поможет тебе на этом пути. Добро пожаловать в захватывающий мир развития привычек – твое приключение только начинается!
            </div>
        </div>
    )
}

export default HomePage