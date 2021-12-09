import React from 'react'
import CardSkill from './CardSkill';
import SdataKids from './SdataKids';

const Kids = () => {
    return (
        <>
        <div className="col-12">
            <div className="skill_heading">
                <h4>Kids Course</h4>
            </div>                   
        </div>
        {SdataKids.map((val, index) => {
            return(
                <CardSkill 
                key={index}
                link={val.slink}
                imgsrc={val.simgscr}
                title={val.stitle}
                amount={val.samount}
                hour={val.shour}
                />
            )
        })}

    </>
    )
}

export default Kids
