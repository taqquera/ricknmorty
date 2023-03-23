import React from "react";
import s from "./Header.module.css";
import logo from "../../../assets/images/logo.png";



const Header = (props) => {
    return (
        <div className={s.header}>
            <img className={s.logo} src={logo} alt="logo" />
        </div>
    )
}

export default Header
