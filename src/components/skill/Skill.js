import React from 'react'
import Kids from './Kids';
import SkillDev from './SkillDev';
import LearningLanguage from './LearningLanguage';
import './skill.css';
import Professional from './Professional';
import JobRequirement from './JobRequirement';
import Compititive from './Compititive';
import Footer from '../Footer';


const Skill = () => {
    return (
        <>
            <div id="skill">
                <div className="container">
                    <div className="row">
    
                        <div className="col-12">
                            <div className="skill_main">                              
                                <div className="skill_body">
                                    <LearningLanguage />              
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="skill_main">                              
                                <div className="skill_body">
                                    <Kids />              
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="skill_main">                              
                                <div className="skill_body">
                                    <SkillDev  />              
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="skill_main">                              
                                <div className="skill_body">
                                    <Professional  />              
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="skill_main">                              
                                <div className="skill_body">
                                    <JobRequirement  />              
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="skill_main">                              
                                <div className="skill_body">
                                    <Compititive  />              
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Skill;
