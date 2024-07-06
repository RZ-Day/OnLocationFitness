import classes from './Timeslot.module.css';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function Timeslot({hour, minute, setTime}) {
    const [isPressed, setIsPressed] = useState(false);

    function createTimeString() {
        let signifier = "AM";

        if (hour >= 12) {
            signifier = "PM";
        }

        if (hour > 12) {
            hour -= 12;
        }

        if (minute < 10) {
            minute += "0";
        }

        return hour + ":" + minute + " " + signifier;
    }


    //toggles the last time slot off when new one is selected
    useEffect(() => {
        return (() => {
            if(isPressed) {
                setIsPressed(false);
            }
        });
    }, [setTime, isPressed]);

    //toggles button styling & sets time of current appointment
    function clickHandler() {
        if(!isPressed) {
            setTime(hour, minute);
            setIsPressed(true);
        }
    }

    return (
        <div className={(isPressed ? classes.pressed: classes.slot)} onClick={clickHandler}>
            {createTimeString()}
        </div>
    );
}

Timeslot.propTypes = {
    hour: PropTypes.number,
    minute: PropTypes.number,
    setTime: PropTypes.func
}

export default Timeslot;