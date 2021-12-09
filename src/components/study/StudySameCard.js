import React from 'react'
import { NavLink } from 'react-router-dom';


const StudySameCard = (props) => {
    return (
        <>                
        <div>
            <NavLink exact activeClassName="active_class" to={props.link}> 
                <div className="card_items">
                    <div className="card_img">
                        <img src={props.imgsrc} alt="civis" />
                    </div>
                    <div className="card_text">
                        <h6>{props.sub}</h6>
                    </div>
                </div>
            </NavLink>                    
       
            </div>    
           
        </>
    )
}

export default StudySameCard;
