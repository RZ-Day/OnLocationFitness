import classes from './TimeSheet.module.css';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';
import {Form, redirect} from 'react-router-dom';
import Timeslot from './Timeslot';

function TimeSheet({ dateSelected, resetAppointment, apptTimes, timeSelected, submit }) {

    //for dynamic positioning of timesheet dropdown
    const [cursorPosition, setCursorPosition] = useState({x:0, y:0});
    const timeSheetStyle = {
        position: 'fixed',
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
    }

    const handleMouseDown = (event) => {
        setCursorPosition({x: event.clientX, y: event.clientY});
        window.removeEventListener('click', handleMouseDown);
    }

    useEffect(() => {
        window.addEventListener('click', handleMouseDown);

        return () => {
            window.removeEventListener('click', handleMouseDown);
        }

    }, [dateSelected]);


    

    return (
        <>
            <div className={(dateSelected ? classes.backdrop : classes.hidden)} onClick={ resetAppointment } />
            <div style={timeSheetStyle} className={ (dateSelected ? classes.timeSheet : classes.hidden) }>
                <div className={ classes.dropdownHeader }>What Time?</div>
                <div className={ classes.timeSlots } >
                    { apptTimes }
                </div>
                <div className={classes.options} onClick={submit}>
                    <button className={ (timeSelected ? classes.submitActive : classes.submitInactive)}>Submit</button>
                </div>
            </div>
        </>
    );
}

TimeSheet.propTypes = {
    dateSelected: PropTypes.bool,
    resetAppointment: PropTypes.func,
    submit: PropTypes.func,
    apptTimes: PropTypes.array,
    timeSelected: PropTypes.bool
}

export default TimeSheet;