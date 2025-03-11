import React from 'react';

const FooterBtn = ({ name, link }) => {
  return (
    <a href={link} className='relative group text-lg font-inter text-gray-400 inline-block text-sm mb-2 md:mt-4'>
      {name}
      <span className='absolute left-1/2 bottom-0 h-[2px] w-0 bg-orange-500 transition-all duration-300 ease-in-out group-hover:w-[100%] mt-2 group-hover:left-[-4%]'></span>
      <span className="mx-2 inline-block opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:translate-x-1">
        ➜
      </span>
    </a>
  );
};

export default FooterBtn;
