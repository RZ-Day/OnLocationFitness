import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import classes from './Modal.module.css';

function Modal(props) {
    
    const [isVisible, changeIsVisible] = useState(false);
    const navigate = useNavigate();

    function closeHandler() {
        navigate('..');
    }

    useEffect(() => {
        changeIsVisible(true);
    }, [])

    return <>
        <div className={classes.backdrop} onClick={closeHandler} />
            <dialog open className={(isVisible ? classes.modal : classes.modalHidden)}>
                {props.children}
            </dialog>
    </>;
}

Modal.propTypes = {
    children: PropTypes.element,
}

export default Modal;