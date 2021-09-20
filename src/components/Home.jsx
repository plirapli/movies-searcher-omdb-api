import React from 'react';
import MovieList from './MovieList';

export default function Home({ foundMovie, movies }) {
  return (
    <section className="w-full grid grid-cols-card gap-4 mt-8">
      {!foundMovie && (
        <div className="text-lg opacity-50 text-black dark:text-white">
          Movie not found
        </div>
      )}
      {movies.map((movie, i) => (
        <MovieList key={movie.imdbID} movie={movie} />
      ))}
    </section>
  );
}
