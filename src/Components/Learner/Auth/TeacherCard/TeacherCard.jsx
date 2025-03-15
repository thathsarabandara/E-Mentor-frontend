import React from 'react'
import { FaStar } from 'react-icons/fa6'

function TeacherCard({teacher}) {
  return (
    <div className="flex flex-col justify-center items-start w-72 bg-white hover:shadow-lg rounded-lg border-2">
      <div className="w-full overflow-hidden">
        <img
          className="w-full h-full object-cover transform transition duration-300 ease-in-out hover:scale-110"
          src={teacher.image}
          alt="Course"
        />
      </div>
      <div className="flex flex-col justify-between items-center mt-4 w-full px-4">
        <p className="text-lg font-semibold text-black">
        {teacher.name}
        </p>
        <p className="text-xs text-gray-600">
        {teacher.position}
        </p>
        <hr className='w-full my-3' />
        <div className='flex justify-between items-center py-3'>
            <div className='flex justify-center items-center text-xs mr-24'>
                <FaStar className='mr-1 text-orange-500' />
                <p className='text-xs'>
                {teacher.review}
                </p>
            </div>
            <div className='flex justify-center items-center text-xs'>
                <p className='mr-1 font-semibold'>
                    {teacher.students}
                </p>
                <p className=''>
                    students
                </p>
            </div>
        </div>
        <a
          href="#"
          className="mb-3 text-sm text-orange-500 font-medium hover:text-orange-700 py-2 text-center bg-orange-100 px-16"
        >
          Send message
        </a>
      </div>
    </div>
  )
}

export default TeacherCard