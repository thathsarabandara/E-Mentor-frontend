import React from 'react'
import DashboardCard from '../../../../Components/Learner/Auth/DashboardCard/DashboardCard'
import { FaBook, FaCheckCircle, FaHeart, FaShoppingCart } from 'react-icons/fa';
import EnrolledCourseCard from '../../../../Components/Learner/Auth/EnrolledCourseCard/EnrolledCourseCard';
import course1 from '../../../../assets/images/best_selling_courses/course1.png'
import course2 from '../../../../assets/images/best_selling_courses/course2.png'
import course3 from '../../../../assets/images/best_selling_courses/course3.png'
import course4 from '../../../../assets/images/best_selling_courses/course4.png'
import course5 from '../../../../assets/images/best_selling_courses/course5.png'
import course6 from '../../../../assets/images/best_selling_courses/course6.png'

function DashBoard() {

  const coursesData = [
    { image: course1 , title: 'Herbal Medicine 101', lecture: '1. Healing with Herbs' },
    { image: course2 , title: 'Holistic Nutrition', lecture: '2. Food as Medicine' },
    { image: course3 , title: 'Sound Therapy for Beginners', lecture: '1. Vibrational Healing' },
    { image: course4 , title: 'Essential Oils & Aromatherapy', lecture: '2. Healing Scents' },
    { image: course5 , title: 'Mindfulness Meditation', lecture: '1. Awareness Practice' },
    { image: course6 , title: 'The Art of Zen', lecture: '2. Living in the Moment' },
  ];

  const dashboardItems = [
    { label: 'Enrolled Courses', amount: 5, color: 'blue', icon: FaBook },
    { label: 'Wishlist Items', amount: 8, color: 'red', icon: FaHeart },
    { label: 'Purchase History', amount: 3, color: 'green', icon: FaShoppingCart },
    { label: 'Completed Courses', amount: 2, color: 'yellow', icon: FaCheckCircle },
  ];

  return (
    <div className='flex justify-center items-center font-inter'>
      <div className='w-8/12'>

        <div className='flex flex-col justify-center items-center lg:items-start mb-5'>
          <p className='text-lg font-bold'>
            Dashboard
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-12 lg:gap-2 lg:gap-8 xl:gap-16 2xl:gap-20 pt-6'>
            {dashboardItems.map((item, index) => (
              <DashboardCard key={index} {...item} />
            ))}
          </div>
        </div>

        <div className='flex flex-col justify-center items-center lg:items-start mb-5'>
          <p className='text-lg font-bold'>
          Let’s start learning, Kevin
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 pt-6'>
            {coursesData.map((course, idx) => (
              <EnrolledCourseCard key={idx} {...course} />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default DashBoard