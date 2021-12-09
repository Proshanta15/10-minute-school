import React from 'react'
import StudySameCard from './StudySameCard'
import SdataHumanaties from './SdataHumanities'

const Humanities = () => {
    return (
        <>
            
            <div className="col-12">
                <div className="card_title">
                    <h4>Humanities</h4>
                </div>
            </div>
            {SdataHumanaties.map((val, index) =>{
                return(
                    <StudySameCard 
                    key= {index}
                    title={val.ctitle}
                    link={val.clink}
                    imgsrc={val.cimgscr}
                    sub={val.csub}
                    />
                )
            })}
        </>
    )
}

export default Humanities
