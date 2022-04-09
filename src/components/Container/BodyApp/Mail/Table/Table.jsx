import React from "react";
import s from './Table.module.css'
import TableTopRow from "./TableTopRow/TableTopRow";

const Table = () => {
    return (
        <table className={s.table}>
            <thead>
                <TableTopRow />
            </thead>
            <tbody>
                <tr className={s.tr}>
                    <td>Sending Date</td>
                    <td>Mail Subject</td>
                    <td>From Who</td>
                </tr>
                <tr className={s.tr}>
                    <td>Sending Date</td>
                    <td>Mail Subject</td>
                    <td>From Who</td>
                </tr>
                <tr className={s.tr}>
                    <td>Sending Date</td>
                    <td>Mail Subject</td>
                    <td>From Who</td>
                </tr>
                <tr className={s.tr}>
                    <td>Sending Date</td>
                    <td>Mail Subject</td>
                    <td>From Who</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table