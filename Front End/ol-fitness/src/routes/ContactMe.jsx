import Modal from '../components/Modal';
import classes from './ContactMe.module.css';

import { Form, Link, redirect } from 'react-router-dom';
//import { useState } from 'react';


function ContactMe() {


    return(
        <Modal>
            <Form method="post" className={classes.contactForm}>
                <p>
                    <label htmlFor="fullName">Name</label>
                    <input type="text" id="fullName" name="fullName" required />
                </p>
                <p>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </p>
                <p>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required className={classes.messageBox} rows={8}/>
                </p>
                <div className={classes.formOptions}>
                    <button type="submit">
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

export async function action({request}) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);

    await fetch('http://localhost:8080/inquiries/create', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type':'application/json'
        }  
    });

    // if(response.ok) {
    //     setStatusMessage('Thank You!');
    // } else {
    //     setStatusMessage('Message failed to send: Try again later');
    // }

    return redirect('/');
}