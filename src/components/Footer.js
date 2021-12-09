import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../images/logo-white.png';
import play_store from '../images/playstore.svg';
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <div id="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="logo_part">
                                <div className="foot_logo">
                                    <img src={logo} alt="logo" />
                                </div>
                                <div className="foot_social">
                                    <ul>
                                        <li><NavLink exact to="/"><FaFacebookSquare className="social_icon"/></NavLink></li>
                                        <li><NavLink exact to="/"> <BsInstagram className="social_icon"/></NavLink></li>
                                        <li><NavLink exact to="/"><BsLinkedin className="social_icon"/></NavLink></li>
                                        <li><NavLink exact to="/"><BsYoutube className="social_icon"/></NavLink></li>
                                    </ul>
                                </div>
                                <div className="foot_dropdown">

                                </div>
                                <div className="foot_text">
                                    <p>সমস্যার ক্ষেত্রে: <span style={{color: '#FF284F', fontWeight: '600'}}> ০৯৬১-২০০-১০১০ </span> (সকাল ৯টা - রাত ১০টা) অথবা মেসেজ করুন 10MSHelp to ২৬৯৬৯ (২৪x৭)</p>
                                </div>
                                <div className="foot_play_store">
                                    <NavLink exact to="">
                                        <img src={play_store} alt="store" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-12">
                            <div className="foot_title">
                                <h4>কোম্পানি</h4>
                            </div>
                            <div className="foot_link">
                                <p><NavLink className="foot_link" exact to="/privacy">Privacy policy</NavLink></p>
                                <p><NavLink className="foot_link" exact to="/">Terms of use</NavLink></p>
                                <p><NavLink className="foot_link" exact to="/">Refund policy</NavLink></p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-12">
                            <div className="foot_title">
                                <h4>ক্র্যাশ কোর্স</h4>
                            </div>
                            <div className="foot_link">
                                <p><NavLink className="foot_link" exact to="/admission">HSC 2021 এডমিশন প্রস্তুতি কোর্স</NavLink></p>
                                <p><NavLink className="foot_link" exact to="/crashCourse">SSC Crash Course 2022</NavLink></p>
                                <p><NavLink className="foot_link" exact to="/crashCourse">HSC Crash Course 2022</NavLink></p>
                                <p><NavLink className="foot_link" exact to="/crashCourse">Pre Admission Medical 2021</NavLink></p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-12">
                            <div className="foot_title">
                                <h4>জনপ্রিয়</h4>
                            </div>
                            <div className="foot_link">
                                <p><NavLink className="foot_link" exact to="/skillDetails">ঘরে বসে Spoken English</NavLink></p>
                                <p><NavLink className="foot_link" exact to="/skillDetails">২৪ ঘণ্টায় কুরআন শিখি</NavLink></p>
                                <p><NavLink className="foot_link" exact to="/skillDetails">English Grammar</NavLink></p>
                                <p><NavLink className="foot_link" exact to="/skillDetails">Microsoft PowerPoint</NavLink></p>
                                <p><NavLink className="foot_link" exact to="/skillDetails">Facebook Marketing</NavLink></p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-12">
                            <div className="foot_title">
                                <h4>অন্যান্য</h4>
                            </div>
                            <div className="foot_link">
                                <p><NavLink className="foot_link" exact to="/study">Study</NavLink></p>
                                <p><NavLink className="foot_link" exact to="/skill">Skills</NavLink></p>
                                <p><NavLink className="foot_link" exact to="/book">Book Store</NavLink></p>
                                <p><NavLink className="foot_link" exact to="/">Blog</NavLink></p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="footer_bottom">
                                <p>স্বত্ব © ২০১৫ - ২০২১ টেন মিনিট স্কুল কতৃক সর্বস্বত্ব সংরক্ষিত</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
