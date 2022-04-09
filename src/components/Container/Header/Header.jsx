import React from "react"
import s from './Header.module.css'
import HeaderLabel from "./HeaderLabel/HeaderLabel"
import HeaderSearchBar from "./HeaderSearchBar/HeaderSearchBar";

const Header = () => {
    return (
        <div className={s.header}>
            <HeaderLabel />
            <HeaderSearchBar />
        </div>
    )
}

export default Header