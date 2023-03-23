import React, {useState, useEffect} from 'react'
import s from "./CardsInfo.module.css"
import { useParams, Link } from 'react-router-dom'
import btnImg from '../../../../assets/images/arrowBack.svg'


const CardsInfo = () => {

  let { id } = useParams()
  let api =  `https://rickandmortyapi.com/api/character/${id}`
  let [fetchedData, updateFetchedData] = useState([]) 
  let { image, name, gender, status, species, origin, type } = fetchedData
  console.log(fetchedData)

  useEffect (()=>{

    (async function(){
      let data = await fetch(api).then(res=>res.json())
      updateFetchedData(data)
    }) ()

  }, [api])

  

  return (
    <div className={s.cardsInfo}>
    
        <Link to="/" className={s.btnItem}>
                <button className={s.backBtn}><img src={btnImg} alt="arrowBack" /></button>
                <h3 className={s.btnTitle}> GO BACK</h3>
        </Link>

            <div className={s.userItem}>
                <img className={s.avatar} src={image} alt="avatar" />
                <p className={s.userName}>{name}</p>
                <div className={s.userInfo}>
                    <h6 className={s.infoTitle}>Informations</h6>
                    <div className={s.infoContainer}>
                        <div className={s.infoItem}>
                            <p className={s.itemTitle}>Gender</p>
                            <p className={s.itemValue}>{gender}</p>
                        </div>
                        <div className={s.infoItem}>
                            <p className={s.itemTitle}>Status</p>
                            <p className={s.itemValue}>{status}</p>
                        </div>
                        <div className={s.infoItem}>
                            <p className={s.itemTitle}>Specie</p>
                            <p className={s.itemValue}>{species}</p>
                        </div>
                        <div className={s.infoItem}>
                            <p className={s.itemTitle}>Origin</p>
                            <p className={s.itemValue}>{origin?.name}</p>
                        </div>
                        <div className={s.infoItem}>
                            <p className={s.itemTitle}>Type</p>
                            <p className={s.itemValue}>{type === ""? "Unknown" : type}</p>
                        </div>
                    </div>
                </div>
            </div> 
    </div>
  )
}

export default CardsInfo
