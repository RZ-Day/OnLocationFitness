import Modal from '../components/Modal';
import QuestionDropdown from '../components/QuestionDropdown';
import classes from './Faq.module.css';
import { useState } from 'react';

function Faq() {
    const [selectedId, changeSelectedId] = useState(0);

    function clickHandler(newId) {
        changeSelectedId(newId);
    }

    return (
        <Modal>
            <div className={classes.faq}>
                <ul className={classes.questionList}>
                    <QuestionDropdown selectedId={selectedId} questionId={0} clickHandler={clickHandler} />
                    <QuestionDropdown selectedId={selectedId} questionId={1} clickHandler={clickHandler} />
                    <QuestionDropdown selectedId={selectedId} questionId={2} clickHandler={clickHandler} />
                </ul>
            </div>
        </Modal>
    );
}

export default Faq;