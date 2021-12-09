import React from 'react'
import CardSkill from './CardSkill';
import SdataSkillDev from './SdataSkillDev';

const SkillDev = () => {
    return (
        <>
        <div className="col-12">
            <div className="skill_heading">
                <h4>Skill Development</h4>
            </div>                   
        </div>
        {SdataSkillDev.map((val, index) => {
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

export default SkillDev
