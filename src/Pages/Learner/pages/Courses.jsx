import React from 'react'
import course1 from '../../../assets/images/best_selling_courses/course1.png';
import course2 from '../../../assets/images/best_selling_courses/course2.png';
import course3 from '../../../assets/images/best_selling_courses/course3.png';
import course4 from '../../../assets/images/best_selling_courses/course4.png';
import course5 from '../../../assets/images/best_selling_courses/course5.png';
import course6 from '../../../assets/images/best_selling_courses/course6.png';
import course7 from '../../../assets/images/best_selling_courses/course7.png';
import course8 from '../../../assets/images/best_selling_courses/course8.png';
import course9 from '../../../assets/images/best_selling_courses/course9.png';
import course10 from '../../../assets/images/best_selling_courses/course10.png';
import NewLearnerFooter from '../../../Components/Learner/NewLearnerFooter/NewLearnerFooter'
import CourseCard from '../../../Components/Learner/CourseCard/CourseCard';

function Courses() {
  const courses = [
      { id: 1, image: course1, color: 'blue', category: 'Design', price: '$57', title: 'Machine Learning A-Z™: Hands-On Python & R In Data...', rating: '5.0', students: '256.7K', link: '/course/1' },
      { id: 2, image: course2, color: 'blue', category: 'Development', price: '$45', title: 'The Complete JavaScript Course 2023: From Zero to Expert!', rating: '4.8', students: '198.5K', link: '/course/2' },
      { id: 3, image: course3, color: 'blue', category: 'Business', price: '$39', title: 'Business Analysis Fundamentals: Practical Guide', rating: '4.7', students: '134.2K', link: '/course/3' },
      { id: 4, image: course4, color: 'blue', category: 'Marketing', price: '$49', title: 'Digital Marketing Masterclass - 23 Courses in 1', rating: '4.9', students: '212.3K', link: '/course/4' },
      { id: 5, image: course5, color: 'blue', category: 'Photography', price: '$29', title: 'Photography Masterclass: A Complete Guide to Photography', rating: '4.6', students: '98.7K', link: '/course/5' },
      { id: 6, image: course6, color: 'blue', category: 'Finance', price: '$65', title: 'The Complete Financial Analyst Course 2023', rating: '4.9', students: '175.9K', link: '/course/6' },
      { id: 7, image: course7, color: 'blue', category: 'IT & Software', price: '$55', title: 'AWS Certified Solutions Architect - Associate 2023', rating: '5.0', students: '289.3K', link: '/course/7' },
      { id: 8, image: course8, color: 'blue', category: 'Health & Fitness', price: '$35', title: 'Yoga for Beginners: A Complete Guide', rating: '4.7', students: '125.4K', link: '/course/8' },
      { id: 9, image: course9, color: 'blue', category: 'Personal Development', price: '$42', title: 'Time Management & Productivity: Get More Done', rating: '4.8', students: '112.6K', link: '/course/9' },
      { id: 10, image: course10, color: 'blue', category: 'Music', price: '$48', title: 'Piano Lessons for Beginners - Learn to Play Piano', rating: '4.9', students: '153.8K', link: '/course/10' }
    ];

  return (
    <>
      <div className='flex flex-col justify-center items-center my-8 pb-16'>
        <p className='font-inter font-bold text-xl md:text-4xl text-center my-4 mb-8 text-gray-700'>Best selling courses in Web Development</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6'>
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      <NewLearnerFooter />
    </>
  )
}

export default Courses