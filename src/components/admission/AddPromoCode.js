import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";

const AddPromoCode = () => {
    return (
        <>
        <div className="promo_main">
        <div className="left">
               <p style={{fontWeight:'bold', fontSize:'14px'}}><span style={{fontSize: '12px' , color: 'rgb(172, 172, 172)'}}> ইতিমধ্যে ভর্তি হয়েছে  </span>  740 জন</p>
           </div>
           <div className="promo">
           <div className="left">
               <p>প্রোমো কোড</p>
           </div>
           <div className="right">  
                <h4>..</h4>
               <h4>৳ 1,500</h4>
           </div>
           
           </div>
           <div className="promo_btn">
               <button> কোর্সটি শুরু করুন <AiOutlineArrowRight className="promo_icon"/> </button>
           </div>
       </div>
   </>
    )
}

export default AddPromoCode
