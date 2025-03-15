import React from 'react'
import { FaCirclePlay } from 'react-icons/fa6'

function DashboardCard({label, amount , color, icon: Icon}) {
  return (
    <div>
        <div className={`flex flex-col sm:flex-row justify-center items-center bg-${color}-100 py-5 px-2 xl:px-4 2xl:px-8 w-11/12 rounded-sm transform transition duration-300 easy-in-out hover:scale-105`}>
            <div className='bg-white p-4'>
                <Icon className={`text-${color}-500`}/>
            </div>
            <div className='flex flex-col justify-center items-center sm:items-start mt-2 ml-2 2xl:mx-4 w-11/12'>
                <p className='text-sm font-bold'>
                    {amount}
                </p>
                <p className='text-xs text-center sm:text-start'>
                {label}
                </p>
            </div>
        </div>
    </div>
  )
}

export default DashboardCard