import React from 'react'
import StudySameCard from './StudySameCard'
import SdataScience from './SdataScience'

const Science = () => {
    return (
        <>

            <div className="col-12">
                <div className="card_title">
                    <h4>Science</h4>
                </div>
            </div>
            {SdataScience.map((val, index) =>{
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

export default Science
