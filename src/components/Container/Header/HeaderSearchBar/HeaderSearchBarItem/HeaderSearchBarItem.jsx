import React from "react"
import s from './HeaderSearchBarItem.module.css'

const HeaderSearchBarItem = () => {
    return (
        <form>
            <input className={s.searchInput}></input>
            <button className={s.searchButton}>🔍</button>
        </form>
    )
}

export default HeaderSearchBarItem