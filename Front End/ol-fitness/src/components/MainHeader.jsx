//import { Link } from 'react-router-dom';

import classes from './MainHeader.module.css';

function MainHeader() {
    return (
        <>
            <header className={classes.mainHeader}>
                <img src="logo.jpeg" className={classes.logoImage}/>
                <h2>On Location Fitness</h2>
            </header>
        </>
    );
}

export default MainHeader;