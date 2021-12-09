import React from 'react'
import Footer from '../Footer'
import BookCard from './BookCard'
import SdataCreative from './SdataCreative'

const BookCreative = () => {
    return (
        <>
       
        <div className="book">
            <div className="container">
                <div className="row over_all">
                    <div className="col-12">
                        <div className="book_heading">
                            <div className="book_title">
                                <h3>Books Creative</h3>
                            </div>
                            
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="book_cards">
                           
                            {SdataCreative.map((val, index) =>{
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

export default BookCreative
