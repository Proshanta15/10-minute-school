import React from 'react'
import { AiOutlineClockCircle } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const CardSkill = (props) => {
    return (
        <>

            <NavLink exact to="/skillDetails">
                <div className="skill_item">
                    <div className="skill_img">
                        <img src={props.imgsrc} alt="" />
                    </div>
                    <div className="skill_title">
                        <h6>{props.title}</h6>
                    </div>
                    <div className="skill_price_time">
                        <div className="skill_tk">
                            <h5> ৳ {props.amount}</h5>
                        </div>
                        <div className="skill_hour">
                             <small><AiOutlineClockCircle /> {props.hour} hr</small>
                        </div>
                    </div>
                </div>
            </NavLink>
            
        </>
    )
}

export default CardSkill;
