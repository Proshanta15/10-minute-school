import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Video from '../videoPart/Video';
import CrashSlider from '../crashCourse/CrashSlider';
import { AiOutlineCheckCircle } from "react-icons/ai";
import AddmissAccordion from './AddmissAccordion';
import SscAccordion from './SscAccordion';
import AddPromoCode from './AddPromoCode';
import AllFullDetails from './AllFullDetails';


const AdmissionDetails = () => {
    return (
        <>
            <div id="crash">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="crash_left">
                                <div className="crash_title">
                                    <h1>বিশ্ববিদ্যালয় বিজ্ঞান</h1>
                                </div>
                                <div className="crash_slider">
                                    <div className="teacher">
                                        <h4>শিক্ষকবৃন্দ </h4>
                                    </div>
                                    <CrashSlider />
                                </div>
                                <div className="crash_text">
                                    <div className="text_title">
                                        <h6>কোর্সটিতে যা যা থাকছে</h6>
                                    </div>
                                    <div className="addmisson_contect">
                                        <p><AiOutlineCheckCircle className="details_icon"/>ফ্রী এইচএসসি প্রস্তুতি ক্লাস</p>
                                        <p><AiOutlineCheckCircle className="details_icon"/>ভর্তি পরীক্ষা লাইভ ক্লাস</p>
                                        <p><AiOutlineCheckCircle className="details_icon"/>মডেল টেস্ট সল্ভ ক্লাস</p>
                                        <p><AiOutlineCheckCircle className="details_icon"/>লাইভ ক্লাস রেকর্ডিং</p>                          
                                    </div>
                                    
                                </div>
                                <div className="crash_content">
                                    <div className="content_title">
                                        <h4>বিশ্ববিদ্যালয়সমূহ </h4>
                                    </div>
                                    <div className="addmi_versity">
                                       <p>ঢাবি</p>
                                       <p>জবি</p>
                                       <p>রাবি</p>
                                       <p>চবি</p>
                                    </div>                                   
                                </div>

                                <div className="addm_accor">
                                    <div className="content_title">
                                        <h4>ভর্তি পরীক্ষা '২০ </h4>
                                    </div>
                                    <div className="admission_accdn">
                                        <AddmissAccordion />
                                    </div>
                                </div>

                                <div className="addm_accor">
                                    <div className="content_title">
                                        <h4>এইচএসসি '২১ </h4>
                                    </div>
                                    <div className="admission_accdn">
                                        <SscAccordion />
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
                                <div className="over_main">
                                    <AllFullDetails />
                                </div>
                                    <AddPromoCode />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdmissionDetails;
