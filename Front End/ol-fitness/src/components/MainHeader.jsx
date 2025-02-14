import { Link } from 'react-router-dom';

import classes from './MainHeader.module.css';

function MainHeader() {
    return (
        <>
            <header className={classes.mainHeader}>
                
                <img src="logo.jpeg" className={classes.logoImage}/>
                <Link to={'/'}>
                    <h2>On Location Fitness</h2>
                </Link>
            </header>
        </>
    );
}

export default MainHeader;