import classes from './Home.module.css';

//import IntroPage from '../components/IntroPage';
import DetailsPage from '../components/DetailsPage';
import AboutSection from '../components/AboutSection';
//import ScrollTrigger from '../components/ScrollTrigger';

import { Outlet } from 'react-router-dom';
//import { useState, useRef } from 'react';

function Home() {
    


    return (
        <>
            <Outlet />
            <div className={classes.homePage}>
                <h2 className={classes.slogan}>Because Accountability Can Change You</h2>
                <DetailsPage />
                <AboutSection />
            </div>
        </>
    );
}

export default Home;