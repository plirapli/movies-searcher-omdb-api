import React, { useState } from "react";
import './App.css';
import Form from "./components/Form";
import MovieList from "./components/MovieList";

function App() {
  const [searchCompleted, setSearchCompleted] = useState(false)

  const [movieTitle, setMovieTitle] = useState('')
  const [selectedID, setSelectedID] = useState('')

  const [movies, setMovies] = useState([])
  const [likedMovies, setLikedMovies] = useState([])

  const getMovies = async () => {
    await fetch(`http://www.omdbapi.com/?apikey=65159463&s=${movieTitle}`)
      .then(res => res.json())
      .then(data => setMovies(data.Search))
  }

  const searchHandler = (e) => {
    e.preventDefault()
    setSearchCompleted(() => true)
    getMovies()
  }

  return (
    <div className="flex flex-col min-h-screen items-center px-4 sm:px-8 font-body">
      <header 
        className={`w-full sm:max-w-screen-sm flex justify-center mx-auto p-4 ${searchCompleted ? 'mb-4' : 'mb-28'}`}>
        <div className="p-4 bg-gray-900 rounded-md"></div>
      </header>
      <section 
        className="w-full sm:max-w-screen-sm flex flex-col items-center justify-center mb-8">
        <h1 className="text-2xl font-medium mb-4">Search Your Movie</h1>
        <Form setMovieTitle={setMovieTitle} searchHandler={searchHandler} />
      </section>
      <section className="w-full grid grid-cols-card gap-4">
        {movies.map((movie, i) => (
          <MovieList 
            key={movie.imdbID} 
            movie={movie} 
            likedMovies={likedMovies} setLikedMovies={setLikedMovies} 
            selectedID={selectedID} setSelectedID={setSelectedID} 
          />
        ))}
      </section>
    </div>
  );
}

export default App;
