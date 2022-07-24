import React, {useRef, useState} from 'react';
import s from './Contacts.module.scss'
import BlockTitle from '../common/components/blockTitle/BlockTitle';
import {useFormik} from 'formik';
import axios from 'axios';


// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.message) {
        errors.message = 'Please provide some message';
    } else if (values.message.length < 5) {
        errors.lastName = 'Must be 10 characters or less';
    }
    return errors;
};

const Contacts = () => {
    const [message, setMessage] = useState('')
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validate,
        onSubmit: values => {
            formik.resetForm()
        }
    })

    const form = useRef()

    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     emailjs.sendForm('service_bwhxm2y', 'contact_form', form.current, 'user_rqmTsb2vCqUC06uaLWlbW')
    //         .then((result) => {
    //             setMessage('Your message was sent successfully!')
    //         }, (error) => {
    //             setMessage('Some error occurred. Your message was not sent.')
    //         });
    // };

    const handleSubmit = async(e) => {
        await axios.post()
        formik.handleSubmit();
        sendEmail(e)
    }
    const messageClass = message === 'Some error occurred. Your message was not sent.' ? s.msgError : s.message
    return (
        <div className={s.contacts} id="contacts">
            <div className={s.container}>
                <BlockTitle title="Contacts"/>
                <form className={s.form} onSubmit={handleSubmit} ref={form}>
                    <input className={s.input}
                           type="text"
                           name="name"
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={formik.values.name}
                           placeholder="Your Name"/>
                    <input className={s.input}
                           type="email"
                           name="email"
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={formik.values.email}
                           placeholder="Your email"/>
                    {formik.touched.email && formik.errors.email
                        ? (<div className={s.error}>{formik.errors.email}</div>)
                        : null}
                    <textarea className={s.textarea}
                              name="message" id="" cols="30" rows="10"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.message}
                              placeholder="Questions, concerns...">
            </textarea>
                    {formik.touched.message && formik.errors.message
                        ? (<span className={s.error}>{formik.errors.message}</span>)
                        : null}
                    <button type="submit" className={s.submitBtn} disabled={!formik.isValid}>Send message</button>
                    <div className={messageClass}>{message}</div>
                </form>
            </div>
        </div>
    );
};

export default Contacts;