import ServiceList from "../components/ServiceList";
//import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import classes from "./Services.module.css";

function Services() {
    // const displayPicture = {
    //     0: "group",
    //     1: "pt",
    //     2: "online"
    // };

    return (
        <div className={classes.pageLayout}>
            <section className={classes.pageTitle}>
                <h1>Services</h1>
                <div className={classes.divider} />
            </section>
            <ServiceList />
            <Outlet />
        </div>
    );
}

export default Services;