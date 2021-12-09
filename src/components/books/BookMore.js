
import React from 'react'
import { NavLink } from 'react-router-dom';
import Footer from '../Footer';
import BookCard from './BookCard'
import SdataMoreOne from './SdataMoreOne'


const BookMore = () => {
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
                            <div className="book_btn">
                                <NavLink className="book_btn_icon" to="/bookMoreAcademic">  আরো দেখুন  </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="book_cards">
                           
                            {SdataMoreOne.map((val, index) =>{
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

                <div className="row over_all">
                    <div className="col-12">
                        <div className="book_heading">
                            <div className="book_title">
                                <h3>Books Creative</h3>
                            </div>
                            <div className="book_btn">
                                <NavLink className="book_btn_icon" to="/bookMoreCreative">  আরো দেখুন  </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="book_cards">
                           
                            {SdataMoreOne.map((val, index) =>{
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

export default BookMore;
