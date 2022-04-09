import React from "react"
import s from './BodyApp.module.css'
import Group from "./GroupOfMails/Group/Group"
import Mail from "./Mail/Mail"

const BodyApp = () => {
    return (
        <div className={s.bodyApp}>
            <Group />
            <Mail />
        </div>
    )
}

export default BodyApp