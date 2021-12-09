import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsPlayCircleFill } from "react-icons/bs";
import { AiFillFileText } from "react-icons/ai";

const Accordion = () => {
    return (
        <>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                 বাংলা ১ম পত্র
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <ul>
                    <li><NavLink className="accor_link" to="/"><BsPlayCircleFill className="accor_icon"/> বাংলা ১ম পত্র - Live Class 1</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><AiFillFileText className="accor_icon"/> বাংলা ১ম পত্র - Lecture Sheet 1</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><BsPlayCircleFill className="accor_icon"/> বাংলা ১ম পত্র - Live Class 2</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><AiFillFileText className="accor_icon"/> বাংলা ১ম পত্র - Lecture Sheet 2</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><BsPlayCircleFill className="accor_icon"/> বাংলা ১ম পত্র - Live Class 3</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><AiFillFileText className="accor_icon"/> বাংলা ১ম পত্র - Lecture Sheet 3</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><BsPlayCircleFill className="accor_icon"/> বাংলা ১ম পত্র - Live Class 4</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><AiFillFileText className="accor_icon"/> বাংলা ১ম পত্র - Lecture Sheet 4</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><BsPlayCircleFill className="accor_icon"/> বাংলা ১ম পত্র - Live Class 5</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><AiFillFileText className="accor_icon"/> বাংলা ১ম পত্র - Lecture Sheet 5</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><BsPlayCircleFill className="accor_icon"/> বাংলা ১ম পত্র - Live Class 6</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><AiFillFileText className="accor_icon"/> বাংলা ১ম পত্র - Lecture Sheet 6</NavLink></li>
                </ul>
                </div>
            </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                বাংলা ২য় পত্র
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <ul>
                    <li><NavLink className="accor_link" to="/"><BsPlayCircleFill className="accor_icon"/> বাংলা ১ম পত্র - Live Class 1</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><AiFillFileText className="accor_icon"/> বাংলা ১ম পত্র - Lecture Sheet 1</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><BsPlayCircleFill className="accor_icon"/> বাংলা ১ম পত্র - Live Class 2</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><AiFillFileText className="accor_icon"/> বাংলা ১ম পত্র - Lecture Sheet 2</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><BsPlayCircleFill className="accor_icon"/> বাংলা ১ম পত্র - Live Class 3</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><AiFillFileText className="accor_icon"/> বাংলা ১ম পত্র - Lecture Sheet 3</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><BsPlayCircleFill className="accor_icon"/> বাংলা ১ম পত্র - Live Class 4</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><AiFillFileText className="accor_icon"/> বাংলা ১ম পত্র - Lecture Sheet 4</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><BsPlayCircleFill className="accor_icon"/> বাংলা ১ম পত্র - Live Class 5</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><AiFillFileText className="accor_icon"/> বাংলা ১ম পত্র - Lecture Sheet 5</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><BsPlayCircleFill className="accor_icon"/> বাংলা ১ম পত্র - Live Class 6</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><AiFillFileText className="accor_icon"/> বাংলা ১ম পত্র - Lecture Sheet 6</NavLink></li>
                </ul>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                English 1st Paper
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <ul>
                    <li><NavLink className="accor_link" to="/"><BsPlayCircleFill className="accor_icon"/> বাংলা ১ম পত্র - Live Class 1</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><AiFillFileText className="accor_icon"/> বাংলা ১ম পত্র - Lecture Sheet 1</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><BsPlayCircleFill className="accor_icon"/> বাংলা ১ম পত্র - Live Class 2</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><AiFillFileText className="accor_icon"/> বাংলা ১ম পত্র - Lecture Sheet 2</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><BsPlayCircleFill className="accor_icon"/> বাংলা ১ম পত্র - Live Class 3</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><AiFillFileText className="accor_icon"/> বাংলা ১ম পত্র - Lecture Sheet 3</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><BsPlayCircleFill className="accor_icon"/> বাংলা ১ম পত্র - Live Class 4</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><AiFillFileText className="accor_icon"/> বাংলা ১ম পত্র - Lecture Sheet 4</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><BsPlayCircleFill className="accor_icon"/> বাংলা ১ম পত্র - Live Class 5</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><AiFillFileText className="accor_icon"/> বাংলা ১ম পত্র - Lecture Sheet 5</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><BsPlayCircleFill className="accor_icon"/> বাংলা ১ম পত্র - Live Class 6</NavLink></li>
                    <li><NavLink className="accor_link" to="/"><AiFillFileText className="accor_icon"/> বাংলা ১ম পত্র - Lecture Sheet 6</NavLink></li>
                </ul>
                </div>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Accordion
