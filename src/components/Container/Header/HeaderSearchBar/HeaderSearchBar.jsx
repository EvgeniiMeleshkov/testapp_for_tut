import React from "react"
import s from './HeaderSearchBar.module.css'
import HeaderSearchBarItem from "./HeaderSearchBarItem/HeaderSearchBarItem"

const HeaderSearchBar = () => {
    return (
        <div className={s.headerSearchBar}>
            <HeaderSearchBarItem />
        </div>
    )
}

export default HeaderSearchBar