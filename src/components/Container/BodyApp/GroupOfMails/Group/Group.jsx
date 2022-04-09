import React from "react"
import AddDeleteGroup from "../AddDeleteGroup/AddDeleteGroup"
import s from './Group.module.css'
import ListOfGroups from "./ListOfGroups/ListOfGroups"

const Group = () => {
    return (
        <div className={s.group}>
            <h4 className={s.h4}>Your mails</h4>
            <ListOfGroups />
            <AddDeleteGroup />
        </div>
    )
}

export default Group