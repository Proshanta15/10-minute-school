import React from 'react'
import CardSkill from './CardSkill';
import SdataCompititive from './SdataCompititive';

const Compititive = () => {
    return (
        <>
        <div className="col-12">
            <div className="skill_heading">
                <h4>Compititive Exams</h4>
            </div>                   
        </div>
        {SdataCompititive.map((val, index) => {
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

export default Compititive
