import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import moviesData from '../Data';

const Descp_Trailer = ({movies}) => {
 
  const navigate = useNavigate();
  let {id}= useParams()
  const [film,setFilm]=useState({})
console.log(film)
useEffect((movies)=>{
    const movieDetails = movies.filter((el)=>el.id==id)
    setFilm(movieDetails)},[id])
  return (
    <div>

        <p>{film.description}</p>
        <iframe src={film.trailer}></iframe>
        <button onClick={()=>navigate('/')}>Go Back</button>

    </div>
  )
}

export default Descp_Trailer