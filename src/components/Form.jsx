import React from 'react';

export default function Form(props) {
  const inputTitleHandler = (e) => props.setMovieTitle(() => e.target.value);

  return (
    <form
      onSubmit={props.searchHandler}
      action=""
      className="w-full flex flex-col sm:flex-row"
    >
      <input
        onChange={inputTitleHandler}
        placeholder="Search Movie"
        className="dark:bg-gray-600 dark:text-white w-full sm:flex-grow focus:outline-none rounded-lg px-4 py-2 shadow mb-4 sm:mb-0 sm:mr-4"
        type="text"
      />
      <button
        type="submit"
        className="px-4 py-2 shadow bg-black text-white font-medium rounded-lg focus:outline-none"
      >
        Search
      </button>
    </form>
  );
}
