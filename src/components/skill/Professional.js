import React from 'react'
import CardSkill from './CardSkill';
import SdataProfessional from './SdataProfessional';

const Professional = () => {
    return (
        <>
        <div className="col-12">
            <div className="skill_heading">
                <h4>Professional Courses</h4>
            </div>                   
        </div>
        {SdataProfessional.map((val, index) => {
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

export default Professional
