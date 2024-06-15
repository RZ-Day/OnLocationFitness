import classes from './MonthDial.module.css';
import PropTypes from 'prop-types';

function MonthDial({ monthName, setMonth, currentMonth }) {
    function incrementSelectedMonth() {
        setMonth(Math.abs((currentMonth + 1) % 12));
    }

    function decrimentSelectedMonth() {
        if (currentMonth > 0) {
            setMonth(Math.abs((currentMonth - 1) % 12));
        } else {
            setMonth(11);
        }
    }

    return(
        <nav className={classes.container}>
            <button className={classes.buttons} onClick={decrimentSelectedMonth}>
                {'<'}
            </button>
            <p className={classes.month}>
                {monthName}
            </p>
            <button className={classes.buttons} onClick={incrementSelectedMonth}>
                {'>'}
            </button>
        </nav>
    );
}

MonthDial.propTypes = {
    monthName: PropTypes.string,
    setMonth: PropTypes.func,
    currentMonth: PropTypes.number
}

export default MonthDial;