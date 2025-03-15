import React, { useState } from 'react';
import course1 from '../../../../assets/images/best_selling_courses/course1.png';
import course2 from '../../../../assets/images/best_selling_courses/course2.png';
import course3 from '../../../../assets/images/best_selling_courses/course3.png';
import course4 from '../../../../assets/images/best_selling_courses/course4.png';
import EnrolledCourseCard from '../../../../Components/Learner/Auth/EnrolledCourseCard/EnrolledCourseCard';

const coursesData = [
  { image: course1, title: 'Herbal Medicine 101', lecture: '1. Healing with Herbs' },
  { image: course2, title: 'Holistic Nutrition', lecture: '2. Food as Medicine' },
  { image: course3, title: 'Sound Therapy for Beginners', lecture: '1. Vibrational Healing' },
  { image: course4, title: 'Essential Oils & Aromatherapy', lecture: '2. Healing Scents' },
];

function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('All Courses');
  const [selectedLecture, setSelectedLecture] = useState('All Lectures');

  const allCourses = ['All Courses', ...new Set(coursesData.map(course => course.title))];
  const allLectures = ['All Lectures', ...new Set(coursesData.map(course => course.lecture))];

  const filteredCourses = coursesData.filter(course =>
    (selectedCourse === 'All Courses' || course.title === selectedCourse) &&
    (selectedLecture === 'All Lectures' || course.lecture === selectedLecture) &&
    (course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     course.lecture.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className='flex justify-center items-center font-inter'>
      <div className='w-full sm:w-10/12 lg:w-8/12'>
        <div className='flex flex-col justify-center items-center lg:items-start mb-5'>
          <p className='text-xl font-bold'>Courses ({filteredCourses.length})</p>
          <div className="flex flex-col md:flex-row gap-4 mb-6 mt-4 w-11/12">
            <div className="flex flex-col w-full sm:w-1/3">
              <label className="text-xs font-medium text-gray-700 mb-1">Search:</label>
              <input 
                type="text" 
                placeholder="Search courses or lectures..." 
                className="border p-2 w-full text-xs" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full sm:w-1/3">
              <label className="text-xs font-medium text-gray-700 mb-1">Sort by Course:</label>
              <select 
                className="border p-2 w-full sm:w-56 text-xs" 
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
              >
                {allCourses.map((course, index) => (
                  <option key={index} value={course}>{course}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col w-full sm:w-1/3">
              <label className="text-xs font-medium text-gray-700 mb-1">Sort by Lecture:</label>
              <select 
                className="border p-2 w-full sm:w-56 text-xs" 
                value={selectedLecture}
                onChange={(e) => setSelectedLecture(e.target.value)}
              >
                {allLectures.map((lecture, index) => (
                  <option key={index} value={lecture}>{lecture}</option>
                ))}
              </select>
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 pt-6'>
            {filteredCourses.map((course, idx) => (
              <EnrolledCourseCard key={idx} {...course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
