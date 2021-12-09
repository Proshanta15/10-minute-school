import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CrashSlider from './CrashSlider';
import WhyTheCourse from './WhyTheCourse';
import Accordion from './Accordion';
import Video from '../videoPart/Video';
import VideoBottom from '../videoPart/VideoBottom';
import { BiDownArrowAlt } from "react-icons/bi";
import './crashCourse.css';

const SscHscCrash = () => {

    return (
        <>
            <div id="crash">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="crash_left">
                                <div className="crash_title">
                                    <h1>HSC Short Syllabus 2022 [Crash Course]</h1>
                                </div>
                                <div className="crash_slider">
                                    <div className="teacher">
                                        <h4>শিক্ষকবৃন্দ </h4>
                                    </div>
                                    <CrashSlider />
                                </div>
                                <div className="crash_text">
                                    <div className="text_title">
                                        <h6>কোর্সটি কাদের জন্য?</h6>
                                    </div>
                                    <WhyTheCourse />
                                </div>
                                <div className="crash_content">
                                    <div className="content_title">
                                        <h4>কোর্স কন্টেন্ট </h4>
                                    </div>
                                    <div className="content_item">
                                        <Accordion />
                                    </div>
                                    <div className="accor_btn">
                                        <button> <BiDownArrowAlt /> 9 - আরো দেখুন </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
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

export default SscHscCrash;
