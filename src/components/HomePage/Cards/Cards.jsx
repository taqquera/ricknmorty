import React from "react";
import s from "./Cards.module.css"
import { Link } from "react-router-dom";


const Cards = ({results, page}) => {

    let display
    
    if(results){
        display = results.map(x=>{
            let {id, name, image, species} = x
            return(
                <Link to={`${page}${id}`} key={id} className={s.cardsItem}>
                    <img className={s.avatar} src={image} alt="avatar" />
                    <div className={s.info}>
                      <h6 className={s.name}>{name}</h6>
                      <p className={s.species}>{species}</p>
                    </div>
                </Link>
            )
        });
    }else{
        display = "No Characters Found :/"
    }


    return(
        <div className={s.cardsBox}>{display}</div>
    )
}

export default Cards;