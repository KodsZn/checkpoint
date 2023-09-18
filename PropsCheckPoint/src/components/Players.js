import React from 'react'
import './Player.css';

const Players = ({joueur}) => {
    return (
        <>
    <div style={{ textalign: 'center',  display: 'inline-block'}}>
        <section className="cards">
        <article className="card card--1">
        <div className="card__info-hover">
    
        <div className="card__clock-info">
        <span className="card__time">{joueur.nationality} </span>
        </div>
    
    </div>
    <div className="card__img"></div>
    <a href="#" className="card_link">
        <img src={joueur.imgUrl} className="card__img--hover"></img>
    </a>
    <div className="card__info">
    <span className="card__category"> {joueur.team} {joueur.Number}</span>
    <h3 className="card__title">{joueur.name}</h3>
    <span className="card__by">age:{joueur.age}</span>
    </div>
</article>  </section>
        </div>
            </>
)
}

export default Players