import React from "react";
import s from './Mail.module.css';
import MailForm from "./MailForm/MailForm";
import Table from './Table/Table'

const Mail = () => {
    return (
        <div className={s.mail}>
            <Table />
            <MailForm />
        </div>
    )
}

export default Mail;