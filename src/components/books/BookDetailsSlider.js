import React from 'react'
import Slider from "react-slick";
import mentor_1 from '../../images/mentor/Apar.jpg'
import mentor_2 from '../../images/mentor/Nishy.jpg'
import mentor_3 from '../../images/mentor/Prorik.jpg'
import mentor_5 from '../../images/mentor/Shahid.jpg'
import mentor_6 from '../../images/mentor/Syed.jpg'

const BookDetailsSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
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
            <Slider {...settings}>
                <div className="mentor">
                    <div className="mentor_img"> 
                        <img src={mentor_1} className="card-img-top" alt="facebook" />
                    </div>     
                    <div className="mentor_title">
                        <h5 className="card-title"> Ashique Shah</h5>
                        <p className="card-text"> Civil Engineering, Bangladesh University of Engineering and Technology (BUET) </p>                     
                    </div> 
                </div>
                <div className="mentor">
                    <div className="mentor_img"> 
                        <img src={mentor_2} className="card-img-top" alt="facebook" />
                    </div>     
                    <div className="mentor_title">
                        <h5 className="card-title">Shahnaz Shanta</h5>
                        <p className="card-text"> Civil Engineering, Bangladesh University of Engineering and Technology (BUET)</p>                     
                    </div> 
                </div>
                <div className="mentor">
                    <div className="mentor_img"> 
                        <img src={mentor_3} className="card-img-top" alt="facebook" />
                    </div>     
                    <div className="mentor_title">
                        <h5 className="card-title">Nova Tabassum</h5>
                        <p className="card-text">Civil Engineering, Bangladesh University of Engineering and Technology (BUET)</p>                     
                    </div> 
                </div>
                <div className="mentor">
                    <div className="mentor_img"> 
                        <img src={mentor_1} className="card-img-top" alt="facebook" />
                    </div>     
                    <div className="mentor_title">
                        <h5 className="card-title">Muhtadi Ahnaf Ansari</h5>
                        <p className="card-text"> Mechanical Engineering, Bangladesh University of Engineering and Technology (BUET) </p>                     
                    </div> 
                </div>
                <div className="mentor">
                    <div className="mentor_img"> 
                        <img src={mentor_5} className="card-img-top" alt="facebook" />
                    </div>     
                    <div className="mentor_title">
                        <h5 className="card-title">Munzereen Shahid</h5>
                        <p className="card-text"> DU </p>                     
                    </div> 
                </div>
                <div className="mentor">
                    <div className="mentor_img"> 
                        <img src={mentor_6} className="card-img-top" alt="facebook" />
                    </div>     
                    <div className="mentor_title">
                        <h5 className="card-title">Syed Al-Nahiyan</h5>
                        <p className="card-text"> BUET </p>                     
                    </div> 
                </div>
               
            </Slider>
            
        </>
    )
}

export default BookDetailsSlider
