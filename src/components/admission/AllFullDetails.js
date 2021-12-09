import React from 'react'

import hsc from '../../images/admission/HSC.jpg';
import admission from '../../images/admission/Admission.jpg';
import admissionnn from '../../images/admission/Admissionnn.jpg';


const AllFullDetails = () => {
    return (
        <>
            <div className="over_details">
                <div className="icon">
                    <img src={hsc} alt="" className="over_icon"/>
                </div>
                <div className="all_details">
                    <h6>HSC রিভিশন</h6>
                    <p>(৩০০টি ক্লাস)</p>
                </div>
            </div>
            <div className="over_details">
                <div className="icon">
                    <img src={admission} alt="" className="over_icon"/>
                </div>
                <div className="all_details">
                    <h6>এডমিশন ফুল সিলেবাস</h6>
                    <p>(৮৯ টি ক্লাস)</p>
                </div>
            </div>
            <div className="over_details">
                <div className="icon">
                    <img src={admissionnn} alt="" className="over_icon"/>
                </div>
                <div className="all_details">
                    <h6>এডমিশন শর্ট সিলেবাস</h6>
                    <p>(৮০টি ক্লাস)</p>
                </div>
            </div>
        </>
    )
}

export default AllFullDetails
