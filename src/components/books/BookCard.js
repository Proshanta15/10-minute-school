import React from 'react'
import { NavLink } from 'react-router-dom';
const BookCard = (props) => {
    return (
        <>
            <NavLink to={props.link}>
                <div className="item">
                    <div className="price">
                        <p>{props.tk}</p>
                    </div>
                    <div className="book_img">
                        <img src={props.imgsrc} alt="" />
                    </div>
                    <div className="book_text">
                        <h5>{props.title}</h5>
                        <small>{props.small}</small>
                    </div>
                </div>
            </NavLink>
        </>
    )
}

export default BookCard
