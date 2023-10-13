import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies,inputSearch,inputStars}) => {
  return (
    <div style={{display:"flex",flexWrap:"wrap"}}>
                {movies.map(movie=><MovieCard movie={movie} key={movie.id}/>)}

    </div>
  );
}

export default MovieList