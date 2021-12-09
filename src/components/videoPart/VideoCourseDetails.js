import React from 'react'
import { AiOutlineCheckCircle } from "react-icons/ai";

const VideoCourseDetails = () => {
    return (
        <>
            <div className="course_details">
                <p><AiOutlineCheckCircle className="details_icon"/>10 Subjects</p>
                <p><AiOutlineCheckCircle className="details_icon"/>400 Live Classes</p>
                <p><AiOutlineCheckCircle className="details_icon"/>400 Lecture Sheets</p>
                <p><AiOutlineCheckCircle className="details_icon"/>19 Model Tests</p>
                <p><AiOutlineCheckCircle className="details_icon"/>19 Solve Sheets</p>
                <p><AiOutlineCheckCircle className="details_icon"/>19 Solve Classes</p>
            </div>
        </>
    )
}

export default VideoCourseDetails
