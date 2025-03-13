import React from 'react';
import classNames from 'classnames';

function PerksCard({ color, icon: Icon, name }) {
  return (
    <div 
      className={classNames(
        "flex flex-col w-56 justify-center items-start rounded-lg py-6 px-4 transform transition duration-300 ease-in-out hover:scale-105",
        `bg-${color}-50 hover:bg-${color}-100`
      )}
    >
      <div className="bg-white p-4 mb-5 transition duration-300 hover:bg-opacity-75">
        <Icon className={`text-3xl text-${color}-500 hover:text-white`} />
      </div>
      <p className="font-inter text-sm">{name}</p>
    </div>
  );
}

export default PerksCard;
