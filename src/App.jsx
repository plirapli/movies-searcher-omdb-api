import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './components/Form.jsx';
import ToggleButton from './components/ToggleButton';
import Home from './components/Home.jsx';
import MovieDetails from './components/MovieDetails.jsx';

function App() {
  const apiKey = '65159463&';
  const [dark, setDark] = useState(false);
  const [searchCompleted, setSearchCompleted] = useState(false);
  const [foundMovie, setFoundMovie] = useState(true);

  const [movieTitle, setMovieTitle] = useState('');

  const [movies, setMovies] = useState([]);

  const darkModeToggle = () => setDark((prev) => !prev);

  const getMovies = async () => {
    await fetch(`http://www.omdbapi.com/?apikey=${apiKey}s=${movieTitle}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === 'True') {
          setFoundMovie(true);
          return setMovies(data.Search);
        } else {
          setFoundMovie(false);
          setMovies([]);
        }
      })
      .catch((err) => console.log(err));
  };

  const searchHandler = (e) => {
    e.preventDefault();
    getMovies();
    setSearchCompleted(() => true);
  };

  return (
    <Router>
      <div className={`${dark ? 'dark' : ''}`}>
        <div className="min-h-screen p-4 sm:p-8 flex flex-col items-center font-body dark:bg-gray-800">
          <div className="max-w-screen-md w-full">
            <div className="w-full mb-4 flex justify-between">
              <h1 className="text-2xl font-medium dark:text-white">
                Search Your Movie
              </h1>

              <div className="flex items-center">
                <span
                  className={`mr-3 text-sm font-bold text-opacity-30 ${
                    dark ? 'text-white' : 'text-black'
                  }`}
                >
                  Dark
                </span>
                <ToggleButton toggleHandler={darkModeToggle} toggler={dark} />
              </div>
            </div>
            <div className="w-full flex flex-col items-center">
              <Form
                setMovieTitle={setMovieTitle}
                searchHandler={searchHandler}
              />
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/:movieId">
            <MovieDetails apiKey={apiKey} />
          </Route>
          <Route path="/">
            <Home foundMovie={foundMovie} movies={movies} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
