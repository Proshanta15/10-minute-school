import React from 'react'
import StudySameCard from './StudySameCard'
import SdataBusiness from './SdataBussniss'

const Business = () => {
    return (
        <>
            <div className="col-12">
                <div className="card_title">
                    <h4>Business</h4>
                </div>
            </div>
            {SdataBusiness.map((val, index) =>{
                return(
                    <StudySameCard 
                    key= {index}
                    link={val.clink}
                    imgsrc={val.cimgscr}
                    sub={val.csub}
                    />
                )
            })}
        </>
    )
}

export default Business
