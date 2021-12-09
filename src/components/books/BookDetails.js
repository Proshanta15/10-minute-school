import React from 'react'
import WhyTheCourse from '../crashCourse/WhyTheCourse';
import PromoCode from '../videoPart/PromoCode';
import BookAccordion from './BookAccordion';
import BookDetailsSlider from './BookDetailsSlider';

const BookDetails = () => {
    return (
        <>
            <div id="crash">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-12">
                            <div className="crash_left">
                                <div className="crash_title">
                                    <h1>HSC Chemistry 2nd Paper Interactive Guide</h1>
                                </div>
                                <div className="crash_slider">
                                    <div className="teacher">
                                        <h4>লেখকবৃন্দ </h4>
                                    </div>
                                    <BookDetailsSlider />
                                </div>
                                <div className="crash_text">
                                    <div className="text_title">
                                        <h6>বই সম্পর্কে</h6>
                                    </div>
                                    <WhyTheCourse />
                                </div>
                                <div className="crash_content">
                                    <div className="content_title">
                                        <h4>সচরাচর জিজ্ঞাসা </h4>
                                    </div>
                                    <div className="content_item">
                                        <BookAccordion />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-12">
                            <div className="crash_video">
                                <div className="video">
                                  
                                </div>
                                <div className="video_bottom">
                                  
                                    <PromoCode />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookDetails;
