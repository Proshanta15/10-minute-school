import React from 'react'
import CardSkill from './CardSkill';
import SdataLearningLan from './SdataLearningLan';

const LearningLanguage = () => {
    return (
        <>
            <div className="col-12">
                <div className="skill_heading">
                    <h4>Language Learning</h4>
                </div>                   
            </div>
            {SdataLearningLan.map((val, index) => {
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

export default LearningLanguage;
