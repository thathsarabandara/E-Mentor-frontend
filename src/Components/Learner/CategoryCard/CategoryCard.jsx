import React from 'react'

function CategoryCard({bgColor, icon: Icon, label, student}) {
  return (
    <div className={`flex justify-start items-center bg-${bgColor}-100 px-8 py-3 hover:bg-white hover:drop-shadow-lg hover:border-1 border-gray-200 rounded-sm m-2`}>
        <div className='bg-white rounded-sm hover:bg-orange-500'>
            <Icon className={`bg-white text-${bgColor}-500 w-10 h-10 p-2 hover:bg-orange-500 hover:text-white`} />
        </div>
        <div className='flex flex-col justify-center items-start'>
            <p className='text-md font-inter mx-5'>{label}</p>
            <p className='text-xs mx-5 text-gray-500'> {student} Courses</p>
        </div>
    </div>
  )
}

export default CategoryCard