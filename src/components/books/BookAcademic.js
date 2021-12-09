import React from 'react'
import Footer from '../Footer'
import BookCard from './BookCard'
import SdataAcademic from './SdataAcademic'

const BookAcademic = () => {
    return (
        <>
       
        <div className="book">
            <div className="container">
                <div className="row over_all">
                    <div className="col-12">
                        <div className="book_heading">
                            <div className="book_title">
                                <h3>Books Academic</h3>
                            </div>
                            
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="book_cards">
                           
                            {SdataAcademic.map((val, index) =>{
                                return(
                                    <BookCard 
                                        key={index}
                                        link={val.blink}
                                        imgsrc={val.bimgscr}
                                        title={val.btitle}
                                        small={val.bsmall}
                                        tk={val.btk}
                                    />
                                )
                            })}

                           
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
        <Footer />
        </>
    )
}

export default BookAcademic
