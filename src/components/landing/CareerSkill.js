import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Sliders from './Slider';

const CareerSkill = () => {
    return (
        <>

        <div id="career">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="career_title">
                        <h1>ক্যারিয়ার ও স্কিল ডেভেলপমেন্ট</h1>
                        </div>                 
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <Sliders />
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default CareerSkill;
