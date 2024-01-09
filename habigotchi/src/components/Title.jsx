import React from "react";
import "../styles/Title.css"

const Title = (props) => {
    return (
        <div className="container">
            <div className="header">
                {props.children}
            </div>
        </div>
    )
}

export default Title