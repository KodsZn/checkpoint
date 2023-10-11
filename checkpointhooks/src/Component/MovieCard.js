import { Rating } from '@mui/material';
import React from 'react'
import './MovieCard.css';

const MovieCard = ({movie}) => {
return (
<>

<div style={{ textalign: 'center',  display: 'inline-block'}}>
        <section className="cards">
        <article className="card card--1">
        <div className="card__info-hover">
    
        <div className="card__clock-info">
        <span className="card__time"><Rating name="size-medium" defaultValue={movie.rate} /></span>
        </div>
    
    </div>
    <div className="card__img"></div><img src={movie.posterUrl} className="card__img--hover"/>

    <div className="card__info">
    <span className="card__category">  {movie.description}</span>
    <h3 className="card__title">{movie.title}</h3>

    <span className="card__by"  ><a href='{movie.trailer}'> watch trailer </a> </span> 
    </div>
</article>  </section>
        </div>
</>


	
      )
}


export default MovieCard;