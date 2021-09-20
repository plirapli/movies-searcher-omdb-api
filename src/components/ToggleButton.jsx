import React from 'react';

function ToggleButton({ toggleHandler, toggler }) {
  return (
    <div
      onClick={toggleHandler}
      className={`bg-gray-400 rounded-full p-1 w-10 transition-all cursor-pointer flex ${
        toggler ? 'bg-green-400 justify-end' : 'justify-start'
      }`}
    >
      <div className="p-2 bg-white rounded-full"></div>
    </div>
  );
}

export default ToggleButton;
