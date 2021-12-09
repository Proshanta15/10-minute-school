import React from 'react'
import { NavLink } from 'react-router-dom';


const StudyVideoPage = () => {
    return (
        <>
            <div className="study_video">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-12">
                            <div className="s_video">
                                <iframe width="100%" height="400" src="https://www.youtube.com/embed/3wvdq_j5S1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <div className="video_title mt-3">
                                    <h4>ভারতবর্ষে আগত ইউরোপীয় বণিকদের আগমনের কারণ</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="s_title_list">
                                <ul>
                                    <li><NavLink className="s_link" to="/studyVideo">১. ভারতবর্ষে ইউরোপীয়দের আগমনঃ ইংরেজ আধিপত্য প্রতিষ্ঠা</NavLink></li>
                                    <li><NavLink className="s_link" to="/studyVideo">২. ইংরেজ ঔপনিবেশিক শাসনঃ কোম্পানি আমল</NavLink></li>
                                    <li><NavLink className="s_link" to="/studyVideo">৩. ইংরেজ ঔপনিবেশিক শাসনঃ ব্রিটিশ আমল</NavLink></li>
                                    <li><NavLink className="s_link" to="/studyVideo">৪. পাকিস্তানি আমলে বাংলা: ভাষা আন্দোলন ও এর গতি প্রকৃতি</NavLink></li>
                                    <li><NavLink className="s_link" to="/studyVideo">৫. পূর্ব-বাংলার স্বায়ত্তশাসন ও স্বাধিকার আন্দোলন</NavLink></li>
                                    <li><NavLink className="s_link" to="/studyVideo">৬. বাংলাদেশের স্বাধিনতা ঘোষণা ও মুক্তিযুদ্ধ</NavLink></li>
                                    <li><NavLink className="s_link" to="/studyVideo">৭. মুক্তিযুদ্ধে বাংলাদেশ সরকারের কার্যক্রম</NavLink></li>
                                    <li><NavLink className="s_link" to="/studyVideo">৪. পাকিস্তানি আমলে বাংলা: ভাষা আন্দোলন ও এর গতি প্রকৃতি</NavLink></li>
                                    <li><NavLink className="s_link" to="/studyVideo">৫. পূর্ব-বাংলার স্বায়ত্তশাসন ও স্বাধিকার আন্দোলন</NavLink></li>
                                    <li><NavLink className="s_link" to="/studyVideo">৬. বাংলাদেশের স্বাধিনতা ঘোষণা ও মুক্তিযুদ্ধ</NavLink></li>
                                    <li><NavLink className="s_link" to="/studyVideo">৭. মুক্তিযুদ্ধে বাংলাদেশ সরকারের কার্যক্রম</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudyVideoPage;
