import React from 'react'
import Slider from "react-slick";
import mentor_1 from '../../images/mentor/Apar.jpg'
import mentor_2 from '../../images/mentor/Nishy.jpg'
import mentor_3 from '../../images/mentor/Prorik.jpg'
import mentor_5 from '../../images/mentor/Shahid.jpg'




const SkillSliders = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
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
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
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
        <div className="skill_slider">
            <Slider {...settings}>
                 
                    <div className="skill_sli_item">
                        <div className="top_img">
                            <div className="ski_slid_img">
                                <img src={mentor_1} className="card-img-top" alt="facebook" />  
                            </div>
                            <div className="skill_your_text">
                                <h6>Shareef Mahmud</h6>
                                <small>মিরপুর সরকারি উচ্চ বিদ্যালয়</small>
                            </div>
                        </div>
                        
                        <div className="skill_slid_text">             
                            <p className="card-text"> ইংরেজি ভাষায় কথোপকথন শেখা শুরু করার ভীতি থেকে মুক্ত করতে অনেক উপকারী ছিল। মুনজারিন শহীদ আপুর সহজ বলা ও বোঝানোর ভঙ্গী
                            আমাকে Spoken English শিখতে আরো আগ্রহী করেছে। </p>                     
                        </div>
                    </div>
               
                    <div className="skill_sli_item">
                        <div className="top_img">
                            <div className="ski_slid_img">
                                <img src={mentor_2} className="card-img-top" alt="grammar" />
                            </div>
                            <div className="skill_your_text">
                                <h6>Aryan Mahmud Mizan</h6>
                                <small>এইচএসসি পরিক্ষার্থী, সরকারি কলেজ বিশ্বনাথ, বিশ্বনাথ, সিলেট</small>
                            </div>
                        </div>
                       
                        <div className="skill_slid_text">             
                            <p className="card-text"> 
                                আমার একই সাথে ইংরেজি ও ফ্রিল্যান্সিং কে পেশা হিসেবে নেয়ার প্রথম Instructor হলো এই ১০ মিনিট স্কুল,আমি ঘরে
                                বসে স্পোকেন ইংলিশ ও জয়িতা আপুর ফ্রিল্যান্সিং কোর্সটি করছি। একটা কথা না বললেই নয় ফ্রিল্যান্সিং কোর্সটি করে আমার 
                                কেন জানি মনে হচ্ছে আমি একজন সফল ফ্রিল্যান্সার হতে পারবই পারবো ইনশাআল্লাহ। </p>                       
                        </div>   
                    </div>
             
                    <div className="skill_sli_item">
                        <div className="top_img">
                            <div className="ski_slid_img">
                                <img src={mentor_3} className="card-img-top" alt="kids" />
                            </div>
                            <div className="skill_your_text">
                                <h6>Khama Rani Bose</h6>
                                <small>ভর্তি পরীক্ষার্থী</small>
                            </div>
                        </div>
                       
                        <div className="skill_slid_text">
                            <p className="card-text"> ঘরে বসে Spoken English" কোর্সটি করে বুঝতে পারলাম শত শত গ্রামার শেখার কোনো প্রয়োজন নেই, দরকার কৌশল
                            এর। বিভিন্ন পরিস্থিতিতে ভীতি কাটিয়ে খুব সহজেই কীভাবে English এ কথা বলা যায় তা শিখতে পেরেছি। মুনজারিন শহীদ
                            আপুর মত দক্ষ শিক্ষকের জন্যই সম্ভব হয়েছে গ্রামার আয়ত্তের কৌশলগুলি শিখা ও তা বাস্তবে প্রয়োগ করা। </p>                    
                        </div>
                    </div>
              
                    <div className="skill_sli_item">
                        <div className="top_img">
                            <div className="ski_slid_img">
                                <img src={mentor_5} className="card-img-top" alt="quaran" />
                            </div>
                            <div className="skill_your_text">
                                <h6>Sajid Hasan Sujon</h6>
                                <small>ফার্মাসিস্ট</small>
                            </div>
                        </div>
                        <div className="skill_slid_text">
                            <p className="card-text"> 
                                ঘরে বসে Spoken English কোর্সটি করতে পেরে নিজেকে সৌভাগ্যবান মনে করছি । এই কোর্সটা আমাকে পেশাগত
                                জীবনে অনেক সাহায্য করছে । </p>                      
                        </div>
                    </div>
              
                   
               
            </Slider>
          </div>
        </>
    )
}

export default SkillSliders;
