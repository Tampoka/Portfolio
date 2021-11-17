import React from 'react';
import s from './Contacts.module.css'
import styleContainer from './../common/styles/Container.module.css'


const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <h2>Contacts</h2>
                <form className={s.form}>
                    <input className={s.input} type="text" placeholder="Your Name"/>
                    <input className={s.input} type="email" placeholder="Your email"/>
                    <textarea className={s.textarea} name="" id="" cols="30" rows="10"
                              placeholder="Questions, concerns...">
            </textarea>
                </form>
                <button type="submit" className={s.btn}>Send</button>
            </div>
        </div>
    );
};

export default Contacts;