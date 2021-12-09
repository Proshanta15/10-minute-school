import React from 'react'
import { NavLink } from 'react-router-dom'

const AddSameCard = (props) => {
    return (
        <>
        <div>
        <NavLink exact to={props.link}>
        <div className="add_items">
            <img src={props.imgsrc} alt="" />
            <h6>{props.title}</h6>
        </div>   
        </NavLink>   
        </div>  
        </>
    )
}

export default AddSameCard;
