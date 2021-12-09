import React from 'react'
import { NavLink } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsFillCheckCircleFill} from 'react-icons/bs';
import class_course_one from '../../images/class_course-1.jpg';
import class_course_two from '../../images/class_course-2.jpg';
import class_course_three from '../../images/class_course-3.jpg';

const ClassCourse = () => {
    return (
        <>
        <div id="class_course">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 col-12 text-center">
                        <div className="course_items">
                            <NavLink exact to="/admission">
                            <div className="course_img">
                                <img src={class_course_one} alt="" />
                            </div>
                            <div className="course_title">
                                <h2>HSC 2021 এডমিশন প্রস্তুতি কোর্স</h2>
                            </div>
                            <div className="course_item">
                                <div className="item_two">
                                    <div> <p><BsFillCheckCircleFill className="class_icon"/>৭টি প্রোগ্রাম </p></div>
                                    <div> <p><BsFillCheckCircleFill className="class_icon"/>১০টি মডেল টেস্ট </p></div>
                                </div>
                                <div className="item_one">
                                <div> <p><BsFillCheckCircleFill className="class_icon"/> In-App/Web Live ক্লাস </p></div>
                                </div>
                                <div className="item_two">
                                    <div> <p><BsFillCheckCircleFill className="class_icon"/> MCQ প্র্যাকটিস পরীক্ষা </p></div>
                                </div>
                                <div className="item_one">
                                    <div> <p><BsFillCheckCircleFill className="class_icon"/>Online লিখিত পরীক্ষা </p></div>
                                </div>
                                
                            </div>
                            <div className="course_link">
                                <NavLink className="course_link_btn" exact to="/admission"> জয়েন করুন <AiOutlineArrowRight /> </NavLink>
                            </div>
                            </NavLink>
                        </div>
                    </div>

                    <div className="col-md-4 col-12 text-center">
                        <div className="course_items">
                            <NavLink exact to="/crashCourse">
                            <div className="course_img">
                                <img src={class_course_two} alt="" />
                            </div>
                            <div className="course_title">
                                <h2>HSC 2022</h2>
                            </div>
                            <div className="course_item">
                                <div className="item_two">
                                    <div> <p><BsFillCheckCircleFill className="class_icon"/>  10 Subjects </p></div>
                                    <div> <p><BsFillCheckCircleFill className="class_icon"/> 400 Live Classes </p></div>
                                </div>
                                <div className="item_one">
                                <div> <p><BsFillCheckCircleFill className="class_icon"/> 400 Lecture Sheets </p></div>
                                </div>
                                <div className="item_two">
                                    <div> <p><BsFillCheckCircleFill className="class_icon"/> 19 Model Tests </p></div>
                                    <div> <p><BsFillCheckCircleFill className="class_icon"/> 19 Solve Sheets </p></div>
                                </div>
                                <div className="item_one">
                                    <div> <p><BsFillCheckCircleFill className="class_icon"/> 19 Solve Classes </p></div>
                                </div>
                                
                            </div>
                            <div className="course_link">
                                <NavLink className="course_link_btn" exact to="/crashCourse"> জয়েন করুন <AiOutlineArrowRight /> </NavLink>
                            </div>
                            </NavLink>
                        </div>
                    </div>

                    <div className="col-md-4 col-12 text-center">
                        <div className="course_items">
                            <NavLink exact to="/crashCourse">
                            <div className="course_img">
                                <img src={class_course_three} alt="" />
                            </div>
                            <div className="course_title">
                                <h2>SSC 2022</h2>
                            </div>
                            <div className="course_item">
                                <div className="item_two">
                                    <div> <p><BsFillCheckCircleFill className="class_icon"/> 12 Subjects </p></div>
                                    <div> <p><BsFillCheckCircleFill className="class_icon"/> 200 Live Classes </p></div>
                                </div>
                                <div className="item_one">
                                    <div> <p><BsFillCheckCircleFill className="class_icon"/> 200 Lecture Sheets </p></div>
                                </div>
                                <div className="item_two">
                                    <div> <p><BsFillCheckCircleFill className="class_icon"/> 14 Model Tests </p></div>
                                    <div> <p><BsFillCheckCircleFill className="class_icon"/> 14 Solve Sheets </p></div>
                                </div>
                                <div className="item_one">
                                    <div> <p><BsFillCheckCircleFill className="class_icon"/> 14 Solve Classes </p></div>
                                </div>
                                
                            </div>
                            <div className="course_link">
                                <NavLink className="course_link_btn" exact to="/crashCourse"> জয়েন করুন <AiOutlineArrowRight /> </NavLink>
                            </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
        </>
    )
}

export default ClassCourse;
