import React from 'react'
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";
import facebook from '../../images/Facebook.jpg';
import grammar from '../../images/Grammar.jpg';
import kids from '../../images/Kids.jpg';
import quaran from '../../images/Quran.jpg';
import spoken from '../../images/spoken.jpg';


const Sliders = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
           
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <>
        <div className="slider">
            <Slider {...settings}>
                 
                    <div className="card">
                      <NavLink to="/skillDetails">
                        <img src={facebook} className="card-img-top" alt="facebook" />
                        <div className="card-body">
                            <h5 className="card-title">Facebook Marketing</h5>
                            <p className="card-text"> Ayman Sadiq </p>                     
                        </div>
                      </NavLink>  
                    </div>
               
                    <div className="card">
                    <NavLink to="/skillDetails">
                        <img src={grammar} className="card-img-top" alt="grammar" />
                        <div className="card-body">
                            <h5 className="card-title"> English Grammar Crash Course </h5>
                            <p className="card-text"> Sakib Bin Rashid </p>                       
                        </div>
                        </NavLink>    
                    </div>
             
                    <div className="card">
                    <NavLink to="/skillDetails">
                        <img src={kids} className="card-img-top" alt="kids" />
                        <div className="card-body">
                            <h5 className="card-title"> Kids' English </h5>
                            <p className="card-text"> Munzereen Shahid </p>                    
                        </div>
                      </NavLink>    
                    </div>
              
                    <div className="card">
                    <NavLink to="/skillDetails">
                        <img src={quaran} className="card-img-top" alt="quaran" />
                        <div className="card-body">
                            <h5 className="card-title"> ২৪ ঘন্টায় কোরআন শিখি </h5>
                            <p className="card-text"> মাওলানা শাইখ মুহাম্মাদ জামাল উদ্দীন </p>                      
                        </div>
                      </NavLink>   
                    </div>
              
                    <div className="card">
                    <NavLink to="/skillDetails">
                        <img src={spoken} className="card-img-top" alt="spoken" />
                        <div className="card-body">
                            <h5 className="card-title"> ঘরে বসে Spoken English </h5>
                            <p className="card-text">Munzereen Shahid </p>                      
                        </div>
                      </NavLink>   
                    </div>
               
            </Slider>
          </div>
        </>
    )
}

export default Sliders;
