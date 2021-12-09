import React from 'react'
import header_img from '../../images/header.jpg';
import class_img from '../../images/class.jpg';
import exam_img from '../../images/exam.png';
import skill_img from '../../images/skill.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <div id="header">
            <div className="container">
                <div className="headr_bg">
                    <div className="row">
                        <div className="col-md-7 col-12">
                            <div className="left">
                                <div className="head_title">
                                    <h1> <span style={{color: '#FF284F'}}> ঘরে বসে  </span>পড়াশোনার সহজ সমাধান </h1>
                                    <p>ক্লাস ১-১২, ভর্তি পরীক্ষা, বিশ্ববিদ্যালয় ও চাকরি জীবনের জন্য পাবে স্পেশাল কোর্স, মডেল টেস্টসহ ২৪/৭ দিকনির্দেশনা। <span style={{color: '#FF284F', fontWeight: 'bold'}}> সিলেক্ট করো তোমার সেকশন, শুরু করো তোমার জার্নি</span> </p>
                                </div>

                                <div className="head_cate">

                                    <div className="item">                               
                                        <NavLink exact to="/study">                          
                                            <div className="item_img">
                                                <img src={class_img}  alt="item"/>
                                            </div>
                                            <div className="item_text">
                                                <p> ক্লাস ১ - ১২ </p>
                                            </div>
                                            </NavLink >
                                    </div>
                                    
                                    <div className="item">
                                        <NavLink exact to="/admission">                                
                                            <div className="item_img">
                                                <img src={exam_img}  alt="item"/>
                                            </div>
                                            <div className="item_text">
                                                <p> ভর্তি পরীক্ষা </p>
                                            </div>                             
                                        </NavLink >
                                    </div>

                                    <div className="item">
                                        <NavLink exact to="/skill">                                
                                            <div className="item_img">
                                                <img src={skill_img}  alt="item"/>
                                            </div>
                                            <div className="item_text">
                                                <p>  স্কিল ডেভেলপমেন্ট  </p>
                                            </div>                             
                                        </NavLink >
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-12">
                        <div className="right_img">
                                <img src={header_img}  alt="item"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;
