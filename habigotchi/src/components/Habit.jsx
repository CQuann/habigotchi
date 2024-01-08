import React, {useEffect, useState} from "react";
// import "../styles/Habit.css"

const Habit = ({habitData}) => {

    
    return (
        <div className="container">
            {/* {console.log(data)} */}
            <h1>{habitData.name}</h1>
        </div>
    )
}

export default Habit