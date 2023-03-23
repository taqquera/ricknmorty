import React from "react";
import s from "./SearchString.module.css";
import search from "../../../assets/images/Search.svg";

const SearchString = ({setSearch, setPageNumber}) => {
    return (
        <div className={s.inputWrapper}>
            <button onClick={(e) => {
                e.preventDefault()
            }} className={s.btn}><img className={s.searchIcon} src={search} alt="search" /></button>
            <input onChange={(e) => {
                setPageNumber(1)
                setSearch(e.target.value)
            }} type="search" placeholder="Filter by name..." className={s.searchString} />
        </div>
        
    )
}

export default SearchString