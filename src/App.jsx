import React, { useState } from 'react';
import Form from './components/Form.jsx';
import ToggleButton from './components/ToggleButton';
import MovieList from './components/MovieList';

function App() {
  const [dark, setDark] = useState(false);
  const [searchCompleted, setSearchCompleted] = useState(false);
  const [foundMovie, setFoundMovie] = useState(false);

  const [movieTitle, setMovieTitle] = useState('');
  const [selectedID, setSelectedID] = useState('');

  const [movies, setMovies] = useState([]);

  const darkModeToggle = () => setDark((prev) => !prev);

  const getMovies = async () => {
    await fetch(`http://www.omdbapi.com/?apikey=65159463&s=${movieTitle}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === 'True') {
          setFoundMovie(false);
          return setMovies(data.Search);
        } else {
          setFoundMovie(true);
          setMovies([]);
        }
      })
      .catch((err) => console.log(err));
  };

  const searchHandler = (e) => {
    e.preventDefault();
    setSearchCompleted(() => true);
    getMovies();
  };

  return (
    <div className={`${dark ? 'dark' : ''} w-full`}>
      <div className="min-h-screen border border-red-500 p-4 sm:p-8 font-body dark:bg-gray-800">
        <div className="max-w-screen-md">
          <div className="w-full mb-4 flex justify-between">
            <h1 className="text-2xl font-medium dark:text-white">
              Search Your Movie
            </h1>

            <div className="flex items-center">
              <span
                className={`mr-3 font-bold ${
                  dark ? 'text-white' : 'text-black'
                }`}
              >
                Dark
              </span>
              <ToggleButton toggleHandler={darkModeToggle} toggler={dark} />
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <Form setMovieTitle={setMovieTitle} searchHandler={searchHandler} />
          </div>
        </div>
        {/* <section className="w-full grid grid-cols-card gap-6">
          {foundMovie && (
            <div className="text-lg opacity-50 text-black dark:text-white">
              Movie not found
            </div>
          )}
          {movies.map((movie, i) => (
            <MovieList
              key={movie.imdbID}
              movie={movie}
              selectedID={selectedID}
              setSelectedID={setSelectedID}
            />
          ))}
        </section> */}
      </div>
    </div>
  );
}

export default App;
