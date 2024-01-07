import React from "react";
import "../styles/Header.css"

const Header = (props) => {
    return (
        <div className="container">
            <div className="header">
                {props.children}
            </div>
        </div>
    )
}

export default Header