import React, { useState, useEffect } from 'react';

export default function MovieList({ movie, selectedID, setSelectedID }) {
  const key = '65159463&i';

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
    <div className="transform hover:-translate-y-2 transition-all">
      <div
        className="
        flex-1
        rounded-2xl bg-black text-white 
        shadow-md overflow-hidden cursor-pointer"
      >
        <div className="relative h-80 flex items-center">
          <img
            loading="lazy"
            src={movie.Poster}
            alt=""
            className="bg-cover w-full"
          />
          <div className="w-full absolute top-0 flex justify-between items-start pt-2 px-2">
            <div className="text-xs font-medium px-2 py-1 text-center bg-black bg-opacity-60 rounded-md uppercase">
              {movie.Type}
            </div>
          </div>
        </div>
      </div>
      {/* Movie Details */}
      <div className="w-full mt-2">
        <p className="">Lorem ipsum</p>
        <p className="font-bold text-sm text-black text-opacity-40">2020</p>
      </div>
    </div>
  );
}
