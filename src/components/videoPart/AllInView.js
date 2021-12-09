import React from 'react'
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { GiSlumberingSanctuary } from "react-icons/gi";

const AllInView = () => {
    return (
        <>
            <div className="over_details">
                <div className="icon">
                    <AiOutlineClockCircle className="over_icon"/>
                </div>
                <div className="all_details">
                    <p>লাইভ ক্লাস</p>
                    <h6>243</h6>
                </div>
            </div>
            <div className="over_details">
                <div className="icon">
                    <IoIosPeople className="over_icon"/>
                </div>
                <div className="all_details">
                    <p>কোর্সটি করছেন</p>
                    <h6>9,808 জন</h6>
                </div>
            </div>
            <div className="over_details">
                <div className="icon">
                    <GiSlumberingSanctuary className="over_icon"/>
                </div>
                <div className="all_details">
                    <p>সাজেশন</p>
                    <h6>আছে</h6>
                </div>
            </div>
        </>
    )
}

export default AllInView;
