import React from 'react';
import hero from '../../../assets/images/hero.png';
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
import instructor from '../../../assets/images/instructor/instructor1.png';
import CategoryCard from '../../../Components/Learner/CategoryCard/CategoryCard';
import { FiBook, FiCamera, FiCloud, FiCode, FiCpu, FiDatabase, FiGlobe, FiMonitor, FiMusic, FiServer, FiSmartphone, FiTool } from 'react-icons/fi';
import CourseCard from '../../../Components/Learner/CourseCard/CourseCard';
import FeatureCourseCard from '../../../Components/Learner/FeatureCourseCard/FeatureCourseCard';

function Home() {
  const categories = [
    { bgColor: 'blue', icon: FiCpu, label: 'AI & ML', student: '63,476' },
    { bgColor: 'red', icon: FiCode, label: 'Web Development', student: '45,320' },
    { bgColor: 'green', icon: FiDatabase, label: 'Database', student: '30,210' },
    { bgColor: 'purple', icon: FiMonitor, label: 'UI/UX Design', student: '25,876' },
    { bgColor: 'yellow', icon: FiCloud, label: 'Cloud Computing', student: '19,534' },
    { bgColor: 'orange', icon: FiServer, label: 'Backend Development', student: '41,652' },
    { bgColor: 'teal', icon: FiTool, label: 'DevOps', student: '21,897' },
    { bgColor: 'cyan', icon: FiSmartphone, label: 'Mobile Development', student: '35,678' },
    { bgColor: 'pink', icon: FiGlobe, label: 'Cyber Security', student: '18,543' },
    { bgColor: 'gray', icon: FiCamera, label: 'Photography', student: '10,784' },
    { bgColor: 'indigo', icon: FiMusic, label: 'Music Production', student: '22,479' },
    { bgColor: 'lime', icon: FiBook, label: 'Education', student: '28,905' }
  ];

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

  const featureCourses = [
    { id: 1, image: course1, title: 'Investing In Stocks The Complete Course!', category: 'Health & Fitness', color: 'green', price: 14, oldPrice: 26, instructor: instructor, instructorName: 'Kevin Gilbert', instructorLink: '#', courseLink: '#', rating: 5.0, students: '256.7K', level: 'Beginner', duration: '6 hours' },
    { id: 2, image: course2, title: 'Mastering Web Development with React.js', category: 'Web Development', color: 'blue', price: 18, oldPrice: 35, instructor: instructor, instructorName: 'Sarah Johnson', instructorLink: '#', courseLink: '#', rating: 4.8, students: '189.2K', level: 'Intermediate', duration: '12 hours' },
    { id: 3, image: course3, title: 'AI & Machine Learning Bootcamp', category: 'Artificial Intelligence', color: 'purple', price: 22, oldPrice: 45, instructor: instructor, instructorName: 'Michael Brown', instructorLink: '#', courseLink: '#', rating: 4.9, students: '322.5K', level: 'Advanced', duration: '10 hours' },
    { id: 4, image: course4, title: 'Cybersecurity Fundamentals', category: 'Cybersecurity', color: 'red', price: 16, oldPrice: 30, instructor: instructor, instructorName: 'Emma Williams', instructorLink: '#', courseLink: '#', rating: 4.7, students: '278.3K', level: 'Beginner', duration: '8 hours' },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className='flex flex-col md:flex-row justify-between items-center w-full'>
        <div className='flex flex-col justify-center items-start m-auto md:ml-24 lg:ml-56 my-8'>
          <h1 className='text-4xl xl:text-6xl font-inter mb-4'>
            Learn with expert<br /> anytime anywhere
          </h1>
          <p className='text-sm xl:text-lg font-inter mb-4 text-gray-500'>
            Our mission is to help people find the best courses<br /> online and learn with experts anytime, anywhere.
          </p>
          <a href='/register' className='w-48 h-12 bg-orange-500 text-center text-white font-bold font-inter pt-3 hover:border-2 border-orange-500 hover:bg-white hover:text-orange-500 cursor-pointer'>
            Create Account
          </a>
        </div>
        <div className='w-12/12 md:w-5/12'>
          <img src={hero} alt='hero' />
        </div>
      </div>

      {/* Category Section */}
      <div className='flex flex-col justify-center items-center my-8'>
        <div className='flex justify-center items-center'>
          <p className='font-bold text-4xl my-4 mb-8'>Browse top categories</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {categories.map((category, index) => (
            <CategoryCard 
              key={index}
              bgColor={category.bgColor}
              icon={category.icon} // <-- Corrected from "Icon" to "icon"
              label={category.label}
              student={category.student}
            />
          ))}
        </div>
        <div className='flex justify-center items-center'>
          <p className='text-sm font-inter text-gray-500'>We have more category & subcategory.</p>
          <a className='text-orange-500 text-sm font-inter hover:underline mx-4 my-8'>Browse All</a>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center my-4 bg-gray-50 pb-16'>
        <p className='font-bold text-2xl md:text-4xl text-center my-4 mb-8'>Best selling courses</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6'>
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      <div className='border-2 border-gray-300'>
        <div className='flex flex-col justify-center items-center px-4 py-12'>
          <div className='flex flex-col md:flex-row justify-between items-center w-8/12 mb-10'>
            <p className='text-2xl xl:text-4xl font-bold text-center font-inter'>Our feature courses</p>
            <p className='text-sm font-bold text-center text-gray-500 font-inter'>Students Wise Choice</p>
          </div>
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
          {featureCourses.map((course) => (
            <FeatureCourseCard key={course.id} course={course} />
          ))}
          </div>
        </div>
      </div>
      
      <div className='flex flex-col justify-center items-center my-4 bg-gray-50 pb-16'>
        <p className='font-bold text-2xl md:text-4xl text-center my-4 mb-8'>Best selling courses</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6'>
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
