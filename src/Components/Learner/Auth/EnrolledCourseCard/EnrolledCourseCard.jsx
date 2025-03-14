import React from 'react'

function EnrolledCourseCard({ image, title, lecture }) {
  return (
    <div className="flex flex-col justify-center items-start w-72 bg-white hover:shadow-lg rounded-lg border-2">
      <div className="w-full overflow-hidden">
        <img
          className="w-full h-40 object-cover transform transition duration-300 ease-in-out hover:scale-110"
          src={image}
          alt="Course"
        />
      </div>
      <div className="flex flex-col justify-between mt-4 w-full px-4">
        <p className="text-xs  text-gray-800">{title}</p>
        <p className="text-sm font-semibold text-gray-700 mt-2">{lecture}</p>
        <hr className='w-full my-3' />
        <a
          href="#"
          className="mb-3 text-orange-600 font-medium hover:underline py-2 text-center bg-orange-100"
        >
          Watch Lecture
        </a>
      </div>
    </div>
  );
}

export default EnrolledCourseCard