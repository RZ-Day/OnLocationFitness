import classes from './QuestionDropdown.module.css';
import PropTypes from 'prop-types';

function QuestionDropdown({ selectedId, questionId, clickHandler }) {


    return (
        <div>
            <div className={classes.question} onClick={clickHandler(questionId)}>
                <h2>
                    Does this dropdown work?
                </h2>
            </div>
            <div className={(selectedId === questionId ? classes.answer : classes.hiddin)}>
                <p>
                    No it does not
                </p>
            </div>
        </div>
    );
}

QuestionDropdown.propTypes = {
    selectedId: PropTypes.number,
    questionId: PropTypes.number,
    clickHandler: PropTypes.func
}

export default QuestionDropdown;