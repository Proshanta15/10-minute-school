import React from 'react'
import Video from '../videoPart/Video';
import VideoBottom from '../videoPart/VideoBottom';
import { BiDownArrowAlt } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import Accordion from '../crashCourse/Accordion';
import mentor_1 from '../../images/mentor/Apar.jpg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SkillSliders from './SkillSlider';
import SkillAccordion from './SkillAccordion';

import Kids from './Kids';





const SkillCourseDetails = () => {
    return (
        <>
            <div id="crash">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-12">
                            <div className="crash_left">
                                <div className="crash_title">
                                    <h1>ঘরে বসে Spoken English</h1>
                                    <p>Improve your English speaking skills with Spoken English Course. Learn to speak more effectively.</p>
                                </div>
                                <div className="crash_slider">
                                    <div className="teacher">
                                        <h4>শিক্ষক </h4>
                                    </div>
                                    <div className="mentor">
                                        <div className="mentor_img"> 
                                            <img src={mentor_1} className="card-img-top" alt="facebook" />
                                        </div>     
                                        <div className="mentor_title">
                                            <h5 className="card-title"> Numeri Sattar Apar</h5>
                                            <p className="card-text">MS (English), University of Oxford (UK); BA, MA (English), University of Dhaka; IELTS: 8.5 </p>                     
                                        </div> 
                                    </div>
                                </div>
                                <div className="crash_text">
                                <div className="teacher">
                                        <h4>কোর্স সার্টিফিকেট</h4>
                                        <p>কোর্সটি সফলভাবে শেষ করলে রয়েছে আপনার জন্য এক্সক্লুসিভ সার্টিফিকেট! <NavLink to="/">সার্টিফিকেট দেখুন </NavLink> </p>
                                    </div>
                                
                                </div>
                                <div className="crash_text">
                                <div className="teacher">
                                        <h4>কোর্স সম্পর্কে</h4>
                                        <p>আত্মবিশ্বাসের সাথে এবং সাবলীলভাবে ইংরেজিতে কথা বলতে পারলে জীবনের প্রতিটি পর্যায়েই অন্য যে কারো থেকে এগিয়ে থাকা যায়। অ্যাকাডেমিকস, ক্যারিয়ার, প্রতিযোগিতামূলক পরীক্ষা এমনকি ভ্রমণের ক্ষেত্রেও ইংরেজির দক্ষতা সাফল্য লাভের জন্য অনেক বেশি প্রয়োজন। তাই, ইংরেজিতে কথা বলার দক্ষতার গুরুত্ব এবং তাৎপর্য বলার অপেক্ষা রাখে না।

                                         শিক্ষক মুনজেরিন শহীদ এর সাথে আপনি সঠিকভাবে এবং সাবলীলভাবে দৈনন্দিন জীবনে ইংরেজিতে কথা বলা শিখে যাবেন। </p>
                                    </div>
                                
                                </div>
                                <div className="crash_content">
                                    <div className="content_title">
                                        <h4>প্রিভিউ কন্টেন্ট </h4>
                                       
                                    </div>
                                    <div className="content_item">
                                      <Accordion />
                                    </div>
                                    <div className="accor_btn">
                                        <button> <BiDownArrowAlt />  সকল কন্টেন্ট  </button>
                                    </div>
                                </div>

                                <div className="skill_slider_main">
                                    <div className="slider_title">
                                        <h4>শিক্ষার্থীরা যা বলছে </h4>                                      
                                    </div>
                                    <SkillSliders />
                                </div>
                                <div className="question">
                                    <div className="content_title">
                                        <h4>সচরাচর জিজ্ঞাসা </h4>
                                       
                                    </div>
                                    <div className="content_item">
                                      <SkillAccordion />
                                    </div>
                                    
                                </div>

                                <div>
                                    <Kids />
                                </div>

                                
                            </div>
                        </div>

                        <div className="col-md-5 col-12">
                            <div className="crash_video">
                                <div className="video">
                                    <Video />
                                </div>
                                <div className="video_bottom">
                                    <VideoBottom />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkillCourseDetails;
