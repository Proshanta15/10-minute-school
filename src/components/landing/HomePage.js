import React from 'react'
import Header from './Header'
import '../landing/home.css';
import ClassCourse from './ClassCourse';
import CareerSkill from './CareerSkill';
import Learn from './Learn';
import Footer from '../Footer';

const HomePage = () => {
    return (
        <>
       
        <Header />
        <ClassCourse />    
        <CareerSkill />
        <Learn />
        <Footer />
        </>
    )
}

export default HomePage;
