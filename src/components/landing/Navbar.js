import React from 'react'
import logo from '../../images/logo.png';
import { BsBook } from "react-icons/bs";
import { VscRocket } from "react-icons/vsc";
import { VscDeviceCameraVideo } from "react-icons/vsc";
import { FiBook } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";
import { NavLink } from 'react-router-dom';



const Navbar = () => {
    return (
        <>
            <div style={{zIndex: '999' , background: '#fff'}} className="container-fluid sticky-top">
                <div className="row">
                    <div className="col-12">
                        <div className="header_top">
                            <nav className="navbar navbar-expand-lg ">
                                <div className="container-fluid">
                                    <NavLink exact className="navbar-brand" to="/">
                                        <img src={logo} alt="logo"/>
                                    </NavLink>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ">
                                        <li className="nav-item">
                                        <NavLink activeClassName="active_class" exact className="nav-link" aria-current="page" to="/study"><BsBook className="icon" /> Study</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink activeClassName="active_class" exact className="nav-link" to="/skill"><VscRocket className="icon"/> Skill</NavLink>
                                        </li>

                                        <li className="nav-item dropdown">
                                        <NavLink activeClassName="active_class" exact className="nav-link dropdown-toggle" to="/hsc" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> <VscDeviceCameraVideo className="icon"/>
                                            HSC
                                        </NavLink>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><NavLink exact className="dropdown-item" to="/crashCourse"> HSC ICT Crash Course </NavLink></li>
                                            <li><NavLink exact className="dropdown-item" to="/crashCourse"> HSC Grammar Crash Course </NavLink></li>
                                            <li><NavLink exact className="dropdown-item" to="/crashCourse"> HSC 21 শেষ মূহুর্তের প্রস্তুতি কোর্স </NavLink></li>
                                            <li><NavLink exact className="dropdown-item" to="/crashCourse">  HSC Crash Course 2022 </NavLink></li>
                                        </ul>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink activeClassName="active_class" exact className="nav-link" to='/book'><FiBook className="icon"/> Books</NavLink>
                                        </li>
                                        
                                    </ul>
                                    <div className="login">
                            
                                        <NavLink exact className="log_btn" to="/login"><FiLogIn className="icon"/>  লগ-ইন </NavLink>
                                    </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
