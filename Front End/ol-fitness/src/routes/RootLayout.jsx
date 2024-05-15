import { Outlet } from 'react-router-dom';

import MainHeader from '../components/MainHeader';
import PageFooter from '../components/PageFooter';
import classes from './RootLayout.module.css';

function RootLayout() {
    return(
        <div className={classes.generalPage}>
            <MainHeader />
            <div className={classes.pageSpacer}/>
            <Outlet />
            <PageFooter />
        </div>
    );
}

export default RootLayout;