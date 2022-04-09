import React from "react"
import s from './AddDeleteGroup.module.css'

const AddDeleteGroup = () => {
    return (
        <div className={s.addDeleteGroup}>
            <div>
                <button className={s.buttonAdd}>➕</button>
            </div>
            <div>
                <button className={s.buttonDelete}>✖️</button>
            </div>
        </div>
    )
}

export default AddDeleteGroup