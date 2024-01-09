import React, { Children, useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import classes from "../styles/Header.module.css"
import logo from "./Logo.png"
import habitsIcon from "./habitsIcon.png"
import tamagochiIcon from "./tamagochiIcon.png"
import gameIcon from "./gameIcon.png"

const Header = (props) => {

    return (
        <div className={classes.container}>
            <div className={classes.logoCont}>
                <Link to="/" >
                    <img className={classes.logo} src={logo} />
                </Link>
            </div>
            <div className={classes.iconsElinCont}>
                <div className={classes.iconsCont}>
                    <div className={classes.habitsIconCont}>
                        <Link to="/habits">
                            <img className={classes.habitsIcon} src={habitsIcon} />
                        </Link>
                    </div>
                    <div className={classes.tamagochiIconCont}>
                        <Link to="/tamagochi">
                            <img className={classes.tamagochiIcon} src={tamagochiIcon} />
                        </Link>
                        
                    </div>
                    <div className={classes.gameIconCont}>
                        <Link to="/game">
                            <img className={classes.gameIcon} src={gameIcon} />
                        </Link>
                    </div>
                </div>
                <div className={classes.eliner}></div>
            </div>
        </div>
    )
}

export default Header