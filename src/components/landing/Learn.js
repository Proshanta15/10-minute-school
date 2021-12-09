import React from 'react'
import { NavLink } from 'react-router-dom';
import { BsBoxArrowInDown } from "react-icons/bs";
import tutorial from '../../images/tutorial.png';
import quiz from '../../images/quiz.jpg';
import note from '../../images/note.png';
import blog from '../../images/blog.png';
import studying from '../../images/studying.svg';

const Learn = () => {
    return (
        <>
            <div id="learn">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="item">
                                <div className="top">
                                    <h1>শেখো <span style={{color: '#FF284F'}}>নিজের ইচ্ছেমতো!  </span></h1>
                                    <p>ভিডিও, কুইজ, ইন্টারেক্টিভ বই সমৃদ্ধ একাডেমিক লাইব্রেরি, প্রফেশনাল এবং স্কিল ডেভেলপমেন্ট কোর্সসমূহ পাবে সবসময়, সম্পূর্ণ বিনামূল্যে!</p>
                                    <NavLink className="top_btn" exact to="">
                                       <BsBoxArrowInDown className="btn_icon"/> ডাউনলোড অ্যাপ 
                                    </NavLink>
                                </div>
                                <div className="middle">
                                    <div className="same_item">
                                        <div className="left">
                                            <img src={tutorial} alt="" />
                                        </div>
                                        <div className="right">
                                            <h4>১৯,৪৪০+</h4>
                                            <p>ভিডিও টিউটোরিয়াল</p>
                                        </div>
                                    </div>
                                    <div className="same_item">
                                        <div className="left">
                                            <img src={quiz} alt="" />
                                        </div>
                                        <div className="right">
                                            <h4>৪৯,৫৩০+</h4>
                                            <p>কুইজ</p>
                                        </div>
                                    </div>
                                    <div className="same_item">
                                        <div className="left">
                                            <img src={note} alt="" />
                                        </div>
                                        <div className="right">
                                            <h4>১,১১৪+</h4>
                                            <p>নোট</p>
                                        </div>
                                    </div>
                                    <div className="same_item">
                                        <div className="left">
                                            <img src={blog} alt="" />
                                        </div>
                                        <div className="right">
                                            <h4>১,৩০০+</h4>
                                            <p>ব্লগ</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <img src={studying} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Learn;
