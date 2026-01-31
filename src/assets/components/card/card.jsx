import React from 'react'
import './card.css'
function Card(props){
    return(
        <>
        <div className="main-card">
        <div className="card-image">
        <img src={props.image} alt="student-image"></img></div>
        <div className="card-content">
        <h1>{props.name}</h1><br></br>
        <h2>{props.department}</h2><br></br>
        <h3>{props.course}</h3><br></br></div>
        </div>
        </>
    )
}
export default Card;