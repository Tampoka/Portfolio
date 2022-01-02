import React from 'react';
import s from './Contacts.module.scss'
import BlockTitle from "../common/components/blockTitle/BlockTitle";


const Contacts = () => {
    return (
        <div className={s.contacts} id="contacts">
            <div className={s.container}>
                <BlockTitle title="Contacts"/>
                <form className={s.form}>
                    <input className={s.input} type="text" placeholder="Your Name"/>
                    <input className={s.input} type="email" placeholder="Your email"/>
                    <textarea className={s.textarea} name="" id="" cols="30" rows="10"
                              placeholder="Questions, concerns...">
            </textarea>
                    <button type="submit" className={s.submitBtn}>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;