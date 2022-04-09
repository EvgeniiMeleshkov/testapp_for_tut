import React from "react";
import s from './TableTopRow.module.css'

const TableTopRow = () => {
    return (
        <tr className={s.tr}>
            <th>Date</th>
            <th>Subject</th>
            <th>
                From
                <div>
                  <div className='labelTo'>To</div>
                  <div className='new'><button className={ s.newMailButton }>✏️  ...</button></div>
                </div>
            </th>
        </tr>
    )
}

export default TableTopRow