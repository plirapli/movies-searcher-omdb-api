import React, { useState, useEffect } from 'react'

export default function MovieList(
  {movie, likedMovies, setLikedMovies, selectedID, setSelectedID}
) {
  const [full, setFull] = useState(false)
  const [checkFull, setCheckFull] = useState(false)
  const [likes, setLikes] = useState(false)

  const [movieDetails, setMovieDetails] = useState({})
  const [genres, setGenres] = useState([])

  const getMovieDetails = async () => {
    // await fetch(`http://www.omdbapi.com/?apikey=65159463&i=${movie.imdbID}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     const arr = data.Genre.split(', ')
    //     const dur = convDur(data.Runtime)
    //     setGenres(arr)
    //     return setMovieDetails({...data, Runtime: dur})
    //   })

    setMovieDetails({Runtime: '2h 10m', imdbVotes: '234,523'})
  }

  const clickDetailHandler = () => {
    setSelectedID(movie.imdbID)
    setCheckFull(prev => !prev)
  }

  useEffect(() => {
    selectedID === movie.imdbID ? setFull(f => !f) : setFull(false)
  }, [selectedID, checkFull])

  useEffect( () => {
    if (full) {
      getMovieDetails()
    }
  }, [full])

  useEffect(() => {
    if(likes) {
      setLikedMovies(prev => [...prev, movie])
    } else {
      setLikedMovies(prev => (prev.filter(likedMovie => likedMovie.imdbID !== movie.imdbID)))
    }
  }, [likes])

  const convDur = (dur) => {
    const newInt = parseInt(dur)
    const h = Math.floor(newInt/60)
    const m = newInt % 60
    return `${h}h ${m}m`
  }

  const likesHandler = () => {
    return setLikes(l => !l)
  }

  return (
    <div 
      className={`${full ? 'w-full' : 'flex-1 min-w-card'} rounded-2xl border-2 bg-gray-900 text-white shadow-md overflow-hidden hover:shadow-lg transition-all`}>
      <div className={`relative ${full ? "" : "h-80"}`}>
        <div className={`${full ? "" : "h-64"} w-full flex items-center justify-center overflow-hidden`}>
          <img loading="lazy" src={movie.Poster} alt="" className="bg-cover w-full" />
        </div>
        <div className="w-full absolute top-0 flex justify-between items-start pt-2 px-2">
          <div className="text-xs font-medium px-2 py-1 text-center bg-black bg-opacity-30 rounded-md uppercase">{movie.Type}</div>
          <div onClick={likesHandler} className="w-8 h-8 rounded-full bg-black p-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className={`${likes ? "fill-red" : "fill-gray"} cursor-pointer transition-all`}>
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Movie Details */}
        <div onClick={clickDetailHandler} className={`flex flex-col bg-gray-900 rounded-t-2xl p-4 overflow-hidden cursor-pointer ${full ? "" : "absolute bottom-0"}`}>
          <div className="flex flex-col items-start">
            <h1 className="font-medium break-words mb-2">{movie.Title}</h1>
            <div className={`flex flex-col items-start text-xs text-center font-medium ${full ? 'mb-4' : 'mb-0'}`}>
              <div className="flex mb-2 items-center">
                <p className="px-1 bg-white bg-opacity-30  rounded-md mr-1">
                  {movie.Year}
                </p>
                {full && (
                  <div className="flex">
                    <p className="mr-1">-</p>
                    <p>{movieDetails.Runtime}</p>
                  </div>
                )}
              </div>
              {full && (
                <div className="flex items-center">
                  <p className="text-yellow-300">
                    &#10025; 8.1 <span className="text-white">({movieDetails.imdbVotes})</span>
                  </p>
                </div>
              )}
            </div>
            {full && (
              <div className="text-sm">
                <div className="mb-4">
                  <div className="font-semibold mb-2">Storyline</div>
                  <p>
                    {movieDetails.Plot}
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <p className="font-semibold mb-2">Genre</p>
                  <div className="flex flex-wrap w-full">
                    {genres.map((genre, i) => (
                      <p key={i} className="text-xs px-2 py-1 mr-2 mb-2 last:mr-0 bg-white bg-opacity-70 rounded-md text-black font-medium">{genre}</p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
