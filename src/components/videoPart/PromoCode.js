import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";

const PromoCode = () => {
    return (
        <>
             <div className="promo_main">
                <div className="promo">
                <div className="left">
                    <p>প্রোমো কোড</p>
                </div>
                <div className="right">
                    <h4>৳ 15,000</h4>
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

export default PromoCode;
