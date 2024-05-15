import Modal from '../components/Modal';
import classes from './ContactMe.module.css';

import { Form, Link } from 'react-router-dom';


function ContactMe() {
    return(
        <Modal>
            <Form method="post" className={classes.contactForm}>
                <p>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" required />
                </p>
                <p>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required />
                </p>
                <p>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required className={classes.messageBox} rows={8}/>
                </p>
                <div className={classes.formOptions}>
                    <button>
                        Send
                    </button>
                    <Link to="/" className={classes.cancel}>
                        Cancel
                    </Link>
                </div>
            </Form>
        </Modal>
    );
}

export default ContactMe;