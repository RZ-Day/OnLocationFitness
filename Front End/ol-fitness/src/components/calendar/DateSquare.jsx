import PropTypes from 'prop-types';
import classes from './DateSquare.module.css';

function DateSquare( {inRange, month, day, selectAppointment} ) {

    function clickHandler() {
        selectAppointment(month, day);
    }

    return (
        <button className={(inRange ? classes.squareButton : classes.outOfDate)} onClick={(inRange ? clickHandler : null)}>
            {day}
        </button>
    );
}

DateSquare.propTypes = {
    inRange: PropTypes.bool,
    month: PropTypes.number,
    day: PropTypes.number,
    selectAppointment: PropTypes.func
}

export default DateSquare;