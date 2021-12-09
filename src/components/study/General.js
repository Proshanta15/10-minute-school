import React from 'react'
import StudySameCard from './StudySameCard'
import SdataGeneral from './SdataGeneral'

const General = () => {
    return (
        <> 
            <div className="col-12">
                <div className="card_title">
                    <h4>General</h4>
                </div>
            </div>
            {SdataGeneral.map((val, index) =>{
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

export default General
