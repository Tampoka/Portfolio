import React from 'react';
import s from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import BlockTitle from "../common/components/blockTitle/BlockTitle";


const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <BlockTitle title="Contacts"/>
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