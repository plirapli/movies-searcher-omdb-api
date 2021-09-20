import React, { useState, useEffect } from 'react';

export default function MovieList({ movie, selectedID, setSelectedID }) {
  const key = '65159463&i';
  const [full, setFull] = useState(false);

  // const [movieDetails, setMovieDetails] = useState({});
  // const [genres, setGenres] = useState([]);

  // const getMovieDetails = async () => {
  //   await fetch(`http://www.omdbapi.com/?apikey=${key}=${movie.imdbID}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const arr = data.Genre.split(', ');
  //       const dur = convDur(data.Runtime);
  //       setGenres(arr);
  //       return setMovieDetails({ ...data, Runtime: dur });
  //     })
  //     .catch((err) => console.log(err));
  // };

  // const clickDetailHandler = () => {
  //   setSelectedID(movie.imdbID);
  //   setCheckFull((prev) => !prev);
  // };

  // useEffect(() => {
  //   selectedID === movie.imdbID ? setFull((f) => !f) : setFull(false);
  // }, [selectedID, checkFull]);

  // useEffect(() => {
  //   if (full) {
  //     getMovieDetails();
  //   }
  // }, [full]);

  // useEffect(() => {
  //   if(likes) {
  //     setLikedMovies(prev => [...prev, movie])
  //   } else {
  //     setLikedMovies(prev => (prev.filter(likedMovie => likedMovie.imdbID !== movie.imdbID)))
  //   }
  // }, [likes])

  const convDur = (dur) => {
    const newInt = parseInt(dur);
    const h = Math.floor(newInt / 60);
    const m = newInt % 60;
    return `${h}h ${m}m`;
  };

  return (
    <div
      className={`
        flex-1 min-w-card 
        rounded-2xl bg-black bg-opacity-40 text-white 
        shadow-md overflow-hidden 
        transform hover:-translate-y-2 hover:shadow-lg transition-all cursor-pointer`}
    >
      <div className={`relative ${full ? '' : 'h-80'}`}>
        <div
          className={`${
            full ? '' : 'h-64'
          } w-full flex items-center justify-center overflow-hidden`}
        >
          <img
            loading="lazy"
            src={movie.Poster}
            alt=""
            className="bg-cover w-full"
          />
        </div>
        <div className="w-full absolute top-0 flex justify-between items-start pt-2 px-2">
          <div className="text-xs font-medium px-2 py-1 text-center bg-black bg-opacity-30 rounded-md uppercase">
            {movie.Type}
          </div>
        </div>

        {/* Movie Details */}
        <div
          className={`w-full flex flex-col bg-black bg-opacity-40 rounded-t-2xl p-4 overflow-hidden
          ${full ? '' : 'absolute bottom-0'}`}
        >
          <div className="flex flex-col items-start">
            <h1 className="font-medium break-words mb-2">{movie.Title}</h1>
            <div
              className={`flex flex-col items-start text-xs text-center font-medium ${
                full ? 'mb-4' : 'mb-0'
              }`}
            >
              <div className="flex mb-2 items-center">
                <p className="px-1 bg-white bg-opacity-30  rounded-md mr-1">
                  {movie.Year}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
