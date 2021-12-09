import React from 'react'
import { NavLink } from 'react-router-dom'
import './admission.css';
import Footer from '../Footer';
import AddSameCard from './AddSameCard';
import SdataAdmission from './SdataAdmision';



const Admission = () => {
    return (
        <>
            <div id="study">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="study_top">
                            <div className="study_left">
                                <ul>
                                    <li><NavLink className="study_left_link" activeClassName="active_class" exact to="/study">Class 1-12</NavLink></li>
                                    <li><NavLink className="study_left_link" activeClassName="active_class" exact to="/admission">Admission Test</NavLink></li>
                                    <li><NavLink className="study_left_link" activeClassName="active_class" exact to="/skill">Skill</NavLink></li>
                                </ul>
                            </div>
                           
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="admission">
                        <div className="col-12 ">
                            <div className="addmis_title">
                                <h2>প্রোগ্রাম সমূহ</h2>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="add_main">
                                {SdataAdmission.map((val, index) =>{
                                    return(
                                        <AddSameCard 
                                            key={index}
                                            link={val.alink}
                                            imgsrc={val.aimgscr}
                                            title={val.atitle}
                                        />
                                    )
                                })}
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

export default Admission;
