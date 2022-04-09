import React from "react"
import s from './Container.module.css'
import Header from "./Header/Header";
import BodyApp from "./BodyApp/BodyApp";


const Container = () => {
    return (
        <div className={s.container} >
           <Header />
            <BodyApp />
        </div>
    )
}

export default Container