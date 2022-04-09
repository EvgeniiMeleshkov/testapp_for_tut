import React from "react"
import s from './ListOfGroups.module.css'

const ListOfGroups = () => {
    return (
        <div className={ s.YourMails }>
            <ul className={s.listOfGroups}>
                <li><button className={ s.Button13 }>Income</button></li>
                <li><button className={ s.Button13 }>Sent</button></li>
                <li><button className={ s.Button13 }>Drafts</button></li>
                <li><button className={ s.Button13 }>Spam</button></li>
                <li><button className={ s.Button13 }>Deleted</button></li>
            </ul>
        </div>

    )
}

export default ListOfGroups