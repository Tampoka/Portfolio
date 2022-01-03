import React from 'react';
import s from './Contacts.module.scss'
import BlockTitle from "../common/components/blockTitle/BlockTitle";
import {useFormik} from "formik";

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
    const errors = {};
    // if (!values.name) {
    //     errors.firstName = 'Required';
    // } else if (values.firstName.length > 15) {
    //     errors.firstName = 'Must be 15 characters or less';
    // }

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
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })
    return (
        <div className={s.contacts} id="contacts">
            <div className={s.container}>
                <BlockTitle title="Contacts"/>
                <form className={s.form} onSubmit={formik.handleSubmit}>
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
                        ? (<div className={s.error}>{formik.errors.message}</div>)
                        : null}
                    <button type="submit" className={s.submitBtn}>Send message</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;