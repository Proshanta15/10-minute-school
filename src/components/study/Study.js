import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../Footer'
import Business from './Business'
import General from './General'
import Humanities from './Humanities'
import Science from './Science'
import './study.css';

import one from '../../images/class/1.png';
import two from '../../images/class/2.png';
import three from '../../images/class/3.png';
import four from '../../images/class/4.png';
import five from '../../images/class/5.png';
import six from '../../images/class/6.png';
import seven from '../../images/class/7.png';
import eight from '../../images/class/8.png';
import ssc from '../../images/class/ssc.png';
import hsc from '../../images/class/hsc.png';



const Study = () => {
    return (
        <>
        <div id="study">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="study_top">
                            <div className="study_left">
                                <ul>
                                    <li><NavLink className="study_left_link" activeClassName="active_class" exact to="/study">Class 1-12</NavLink></li>
                                    <li><NavLink className="study_left_link" activeClassName="active_class" exact to="/admission">Admission Test</NavLink></li>
                                    <li><NavLink className="study_left_link" activeClassName="active_class" exact to="/skill">Skill</NavLink></li>
                                </ul>
                            </div>
                            <div className="study_right">
                                <div className="drop_title">
                                    <p>ক্লাস পরিবর্তন</p>
                                </div>
                                <div className="study_drop">
                                    <div className="dropdown">
                                        <button className=" dropdown-toggle drop_btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        এইচএসসি 
                                        </button>
                                        <ul className="dropdown-menu class_drp_scrool" aria-labelledby="dropdownMenuButton1">
                                            <li><NavLink className="dropdown-item class_drop_btn" exact to="/"> <img src={one} alt="" /> এইচএসসি</NavLink></li>
                                            <li><NavLink className="dropdown-item class_drop_btn" exact to="/"> <img src={two} alt="" /> এসএসসি</NavLink></li>
                                            <li><NavLink className="dropdown-item class_drop_btn" exact to="/"> <img src={three} alt="" /> অষ্টম শ্রেণি</NavLink></li>
                                            <li><NavLink className="dropdown-item class_drop_btn" exact to="/"> <img src={four} alt="" /> সপ্তম শ্রেণি</NavLink></li>
                                            <li><NavLink className="dropdown-item class_drop_btn" exact to="/"> <img src={five} alt="" /> ষষ্ঠ শ্রেণি</NavLink></li>
                                            <li><NavLink className="dropdown-item class_drop_btn" exact to="/"> <img src={six} alt="" /> পঞ্চম শ্রেণি</NavLink></li>
                                            <li><NavLink className="dropdown-item class_drop_btn" exact to="/"> <img src={seven} alt="" /> চতুর্থ শ্রেণি</NavLink></li>
                                            <li><NavLink className="dropdown-item class_drop_btn" exact to="/"> <img src={eight} alt="" /> তৃতীয় শ্রেণি</NavLink></li>
                                            <li><NavLink className="dropdown-item class_drop_btn" exact to="/"> <img src={ssc} alt="" /> দ্বিতীয় শ্রেণি</NavLink></li>
                                            <li><NavLink className="dropdown-item class_drop_btn" exact to="/"> <img src={hsc} alt="" /> প্রথম শ্রেণি</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">                       
                        <div className="study_card">
                            <div className="card_parent">
                                <Humanities />                          
                            </div>
                        </div>
                    </div> 
                    <div className="col-12">             
                        <div className="study_card">
                            <div className="card_parent">              
                                <General />
                            </div>
                        </div>                                             
                    </div> 
                    <div className="col-12">             
                        <div className="study_card">
                            <div className="card_parent">              
                                <Science />
                            </div>
                        </div>                                             
                    </div>  
                    <div className="col-12">             
                        <div className="study_card">
                            <div className="card_parent">              
                                <Business />
                            </div>
                        </div>                                             
                    </div>    
                </div>
            </div>
        </div>
           
            
            <Footer />
        </>
    )
}

export default Study
