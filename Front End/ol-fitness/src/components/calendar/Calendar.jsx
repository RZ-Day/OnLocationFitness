import classes from './Calendar.module.css';
import { useState } from 'react';
import Modal from '../Modal';
import MonthDial from './MonthDial';
import DateSquare from './DateSquare';
import Dud from './Dud';
import TimeSheet from './TimeSheet';
import Timeslot from './Timeslot';

function Calendar() {
    const dateObject = new Date();
    const currentDate = dateObject.getDate();
    const [selectedMonth, setSelectedMonth] = useState(dateObject.getMonth());
    const [appointment, setAppointment] = useState(null);
    const [timeSet, setTimeSet] = useState(false);

    //There MUST be a better way than this
    const months = [
        {
            'name':'January',
            'days':31  
        },
        {
            'name':'February',
            'days':28
        },
        {
            'name':'March',
            'days':31
        },
        {
            'name':'April',
            'days':30
        },
        {
            'name':'May',
            'days':31
        },
        {
            'name':'June',
            'days':30
        },
        {
            'name':'July',
            'days':31
        },
        {
            'name':'August',
            'days':31
        },
        {
            'name':'September',
            'days': 30
        },
        {
            'name':'October',
            'days':31
        },
        {
            'name':'November',
            'days':30
        },
        {
            'name':'December',
            'days':31
        },
    ]

    const weeklyAvailability = [
        {start: 11, end: 14},
        {start: 9, end: 18},
        {start: 9, end: 18},
        {start: 9, end: 18},
        {start: 9, end: 18},
        {start: 9, end: 18},
        {start: 11, end: 14}
    ]

    function setTime(hour, minute) {
        const newAppt = new Date();
        newAppt.setDate(appointment.getDate());
        newAppt.setMonth(appointment.getMonth());

        newAppt.setHours(hour);
        newAppt.setMinutes(minute);

        if(!timeSet) {
            setTimeSet(true);
        }

        setAppointment(newAppt);
    }

    //will pull back end data create array for timesheet to display.
    //Eventually, this function will also filter out already-booked times
    function generateTimeslots(increment) {
        //const bookedTimes = [];
        const timeslots = [];

        if (appointment != null) {
            const currAvailability = weeklyAvailability[appointment.getDay()];
            const timeCalculator = new Date("January 1, 2020 " + currAvailability.start + ":00:00");

            while (timeCalculator.getHours() < currAvailability.end) {
                const key = timeCalculator.getHours() + "" + timeCalculator.getMinutes();
                timeslots.push(<Timeslot hour={timeCalculator.getHours()} minute={timeCalculator.getMinutes()} setTime={setTime} key={key} />);
                timeCalculator.setMinutes(timeCalculator.getMinutes() + increment);
            }
        }
        
        return timeslots;
    }

    //ques up new appointment for submission
    function selectAppointmentDate(month, day) {
        const selectedDate = new Date();
        selectedDate.setDate(day);
        selectedDate.setMonth(month);
        setAppointment(selectedDate);
    }

    function resetAppointment() {
        setAppointment(null);
        setTimeSet(false);
    }

    function generateCalendar() {
        const newDate = new Date(dateObject.getFullYear() + "-" + (selectedMonth + 1) + "-1");
        const firstDayOfWeek = newDate.getDay();
        //const currentDate = dateObject.getDate();
        const calendarArray = [];

        //This is to ensure the first falls on the correct day of the week
        for (let i = 0; i < firstDayOfWeek; i++) {
            calendarArray.push(<Dud/>);
        }

        //fill in the rest of the calendar grid
        for (let i = 1; i <= months[selectedMonth].days; i++) {
            const isInRange = ( i > currentDate && !(selectedMonth < dateObject.getMonth()) || selectedMonth > dateObject.getMonth());
            calendarArray.push(<DateSquare inRange={(isInRange)} day={i} month={selectedMonth} selectAppointment={selectAppointmentDate} key={i}/>);
        }

        return calendarArray;
    }

    return (
        <>
        <Modal onClick={generateTimeslots()}>
            <div className={classes.calendar}>
                <div className={classes.month}>
                    <MonthDial monthName={months[selectedMonth].name} setMonth={setSelectedMonth} currentMonth={selectedMonth}/>
                </div>
                <div className={classes.weekDays}>
                    <div>S</div>
                    <div>M</div>
                    <div>T</div>
                    <div>W</div>
                    <div>T</div>
                    <div>F</div>
                    <div>S</div>
                </div>
                <div className={classes.calendarGrid}>
                    {generateCalendar()}
                </div>
            </div>
        </Modal>
        <TimeSheet dateSelected={appointment != null} resetAppointment={resetAppointment} apptTimes={generateTimeslots(15)} timeSelected={timeSet}/>
        </>
    );
}

export default Calendar;