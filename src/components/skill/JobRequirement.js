import React from 'react'
import CardSkill from './CardSkill';
import SdataJobRequire from './SdataJobRequire';

const JobRequirement = () => {
    return (
        <>
        <div className="col-12">
            <div className="skill_heading">
                <h4>Job Requirement</h4>
            </div>                   
        </div>
        {SdataJobRequire.map((val, index) => {
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

export default JobRequirement
