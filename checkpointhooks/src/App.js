import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './Component/MovieList';
import { useState } from 'react';
import moviesData from './Data';
import NavBar from './Component/NavBar';
import AddMovie from './Component/AddMovie';


function App() {
  const[movies,setMovie]=useState(moviesData)
  const[inputSearch,setInputSearch]=useState("")
  const [inputStars,setInputStars]=useState(0)
  const Add =(movie) => {
    setMovie([...moviesData,movie])
  }
  return (
    <div>
      <h1>WatchFlex</h1>
      <NavBar setInputSearch={setInputSearch} setInputStars={setInputStars}/> <AddMovie Add={Add} />

      <MovieList movies={movies} inputSearch={inputSearch} inputStars={inputStars}/>
    </div>
  );
}

export default App;
