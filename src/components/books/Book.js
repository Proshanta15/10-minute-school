import React from 'react'
import { NavLink } from 'react-router-dom';
import Footer from '../Footer';
import BookCard from './BookCard';
import SdataFirst from './SdataFirst';
import './book.css';



const Book = () => {
    return (
        <>
       
            <div className="book">
                <div className="container">
                    <div className="row over_all">
                        <div className="col-12">
                            <div className="book_heading">
                                <div className="book_title">
                                    <h3>Digital Book</h3>
                                </div>
                                <div className="book_btn">
                                    <NavLink className="book_btn_icon" to="/bookMore"> স্টোর ঘুরে আসুন </NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="book_cards">
                               
                                {SdataFirst.map((val, index) =>{
                                    return(
                                        <BookCard 
                                            key={index}
                                            link={val.blink}
                                            imgsrc={val.bimgscr}
                                            title={val.btitle}
                                            small={val.bsmall}
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

export default Book;
