import React, { useState } from 'react'
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
import { FiCpu, FiCode, FiDatabase, FiMonitor, FiCloud, FiServer, FiTool, FiSmartphone, FiGlobe, FiCamera, FiMusic, FiBook } from "react-icons/fi";
import NewLearnerFooter from '../../../Components/Learner/NewLearnerFooter/NewLearnerFooter'
import CourseCard from '../../../Components/Learner/CourseCard/CourseCard';
import { GiSettingsKnobs } from 'react-icons/gi';
import { FaSearch, FaStar } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

function Courses() {

  const categories = [
    {
      label: "AI & ML",
      icon: FiCpu,
      subcategories: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision", "AI Ethics"]
    },
    {
      label: "Web Development",
      icon: FiCode,
      subcategories: ["Frontend Development", "Backend Development", "Full Stack Development", "JavaScript Frameworks", "Web Performance Optimization"]
    },
    {
      label: "Database",
      icon: FiDatabase,
      subcategories: ["SQL Databases", "NoSQL Databases", "Database Administration", "Big Data", "Database Security"]
    },
    {
      label: "UI/UX Design",
      icon: FiMonitor,
      subcategories: ["User Interface Design", "User Experience Research", "Prototyping & Wireframing", "Design Systems", "Accessibility Design"]
    },
    {
      label: "Cloud Computing",
      icon: FiCloud,
      subcategories: ["AWS", "Azure", "Google Cloud", "Serverless Computing", "Cloud Security"]
    },
    {
      label: "Backend Development",
      icon: FiServer,
      subcategories: ["Node.js", "Django", "Laravel", "Spring Boot", "Microservices Architecture"]
    },
    {
      label: "DevOps",
      icon: FiTool,
      subcategories: ["CI/CD Pipelines", "Infrastructure as Code", "Containerization (Docker & Kubernetes)", "Monitoring & Logging", "Site Reliability Engineering (SRE)"]
    },
    {
      label: "Mobile Development",
      icon: FiSmartphone,
      subcategories: ["iOS Development", "Android Development", "Flutter", "React Native", "Mobile App Security"]
    },
    {
      label: "Cyber Security",
      icon: FiGlobe,
      subcategories: ["Ethical Hacking", "Penetration Testing", "Network Security", "Cryptography", "Cyber Threat Intelligence"]
    },
    {
      label: "Photography",
      icon: FiCamera,
      subcategories: ["Portrait Photography", "Landscape Photography", "Product Photography", "Photo Editing", "Drone Photography"]
    },
    {
      label: "Music Production",
      icon: FiMusic,
      subcategories: ["Music Theory", "Sound Engineering", "Mixing & Mastering", "Beat Making", "Live Performance"]
    },
    {
      label: "Education",
      icon: FiBook,
      subcategories: ["E-Learning", "Teaching Methods", "Special Education", "Education Technology", "Language Learning"]
    }
  ]

  const [isFilterOpen, setFilterOpen] = useState(true);
  const [isCategoryOpen, setCategoryOpen] = useState(true);
  const [isRatingOpen, setRatingOpen] = useState(true);
  const [isLevelOpen, setLevelOpen] = useState(true);
  const [isPriceOpen, setPriceOpen] = useState(true);
  const [isDurationOpen, setDurationOpen] = useState(true);

  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedDurations, setSelectedDurations] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState({});

  const handleCheckboxChange = (categoryLabel, subcategory) => {
    setSelectedCategories(prevState => {
      const updatedCategories = { ...prevState };
      if (!updatedCategories[categoryLabel]) {
        updatedCategories[categoryLabel] = [];
      }

      if (updatedCategories[categoryLabel].includes(subcategory)) {
        updatedCategories[categoryLabel] = updatedCategories[categoryLabel].filter(item => item !== subcategory);
      } else {
        updatedCategories[categoryLabel].push(subcategory);
      }

      return updatedCategories;
    });
  };

  const handleRatingChange = (rating) => {
    setSelectedRatings(prevState =>
      prevState.includes(rating)
        ? prevState.filter(item => item !== rating)
        : [...prevState, rating]
    );
  };

  const handleLevelChange = (level) => {
    setSelectedLevels(prevState =>
      prevState.includes(level)
        ? prevState.filter(item => item !== level)
        : [...prevState, level]
    );
  };

  const handlePriceChange = (priceRange) => {
    setSelectedPrices(prevState =>
      prevState.includes(priceRange)
        ? prevState.filter(item => item !== priceRange)
        : [...prevState, priceRange]
    );
  };

  const handleDurationChange = (duration) => {
    setSelectedDurations(prevState =>
      prevState.includes(duration)
        ? prevState.filter(item => item !== duration)
        : [...prevState, duration]
    );
  };

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
      <div className='min-h-screen font-inter flex flex-col justify-start items-center'>

        <div className='flex flex-col justify-center items-center w-11/12 mt-5'>
          <div className="flex flex-col lg:flex-row justify-between items-center w-full">
            <div className="flex flex-col lg:flex-row items-center gap-x-4">
              <button 
                className="flex items-center text-orange-500 border-2 border-orange-500 py-2 px-4 rounded-md mb-3"
                onClick={()=>{setFilterOpen(!isFilterOpen)}}
              >
                <GiSettingsKnobs className="mr-2 text-2xl" />
                Filter
              </button>
              <div className="flex items-center border rounded-md overflow-hidden mb-4">
                <IoIosSearch className="text-4xl" />
                <input
                  className="h-10 px-2 border-none outline-none w-11/12 mr-6"
                  type="text"
                  placeholder="Search Your Course here..."
                />
                <button className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-md ">
                  <FaSearch className="mr-2" />
                  Search
                </button>
              </div>
            </div>
            <div className="flex items-center gap-x-2 text-gray-500">
              <label className='text-sm'>Sort by:</label>
              <select className="border px-4 py-3 rounded-md">
                <option>Trending</option>
              </select>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start w-11/12 font-inter mt-5'>
          {isFilterOpen && (
                <div className='flex flex-col justify-center items-center lg:w-3/12 lg:mr-12 mb-10'>
                <button 
                  className='flex justify-between items-center font-bold text-sm text-gray-500 border w-full px-8 py-2'
                  onClick={() => setCategoryOpen(!isCategoryOpen)}
                 >
                CATEGORY 
                {isCategoryOpen?(
                  <RiArrowDropUpLine className='ml-12 text-2xl' />
                ):(
                  <RiArrowDropDownLine className='ml-12 text-2xl' />
                )}
                </button>
                {isCategoryOpen && (
                <div className='flex flex-col justify-center items-start w-full'>
                  {categories.map((category, index) => (
                    <div key={index} className="mb-2 w-full">
                      <button 
                        className='flex justify-start items-center font-bold text-sm text-gray-500 border w-full px-5 py-2'
                        onClick={() => setCategoryOpen(!isCategoryOpen)}
                      >
                        <category.icon className='mr-4' />
                        {category.label}
                      </button>
                      <div className="pl-6 border">
                        {category.subcategories.map((subcategory, subIndex) => (
                          <label key={subIndex} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={selectedCategories[category.label]?.includes(subcategory)}
                              onChange={() => handleCheckboxChange(category.label, subcategory)}
                              className="accent-orange-500"
                            />
                            <span className='text-sm py-1 text-gray-500'>{subcategory}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <button 
                  className='flex justify-between items-center font-bold text-sm text-gray-500 border w-full px-8 py-2'
                  onClick={() => setRatingOpen(!isRatingOpen)}
                 >
                RATING 
                {isRatingOpen?(
                  <RiArrowDropUpLine className='ml-12 text-2xl' />
                ):(
                  <RiArrowDropDownLine className='ml-12 text-2xl' />
                )}
                </button>
                {isRatingOpen && (
                  <div className='flex flex-col justify-center items-start w-full ml-10'>
                    {[1, 2, 3, 4, 5].map((rating,index) => (
                      <label key={index} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={selectedRatings.includes(rating)}
                          onChange={() => handleRatingChange(rating)}
                          className="accent-orange-500"
                        />
                        <span className='flex justify-center items-center text-sm py-1 text-gray-500'><FaStar className='text-orange-600 mr-2' />{`${rating} stars`}</span>
                      </label>
                    ))}
                  </div>
                )}
                <button 
                  className='flex justify-between items-center font-bold text-sm text-gray-500 border w-full px-8 py-2'
                  onClick={() => setLevelOpen(!isLevelOpen)}
                 >
                COURSE LEVEL 
                {isLevelOpen?(
                  <RiArrowDropUpLine className='ml-12 text-2xl' />
                ):(
                  <RiArrowDropDownLine className='ml-12 text-2xl' />
                )}
                </button>
                {isLevelOpen && (
                  <div className='flex flex-col w-full pl-6'>
                    {["Beginner", "Intermediate", "Advanced"].map((level) => (
                      <label key={level} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={selectedLevels.includes(level)}
                          onChange={() => handleLevelChange(level)}
                          className="accent-orange-500"
                        />
                        <span className='text-sm py-1 text-gray-500'>{level}</span>
                      </label>
                    ))}
                </div>
                )}
                <button 
                  className='flex justify-between items-center font-bold text-sm text-gray-500 border w-full px-8 py-2'
                  onClick={() => setPriceOpen(!isPriceOpen)}
                 >
                PRICE 
                {isPriceOpen?(
                  <RiArrowDropUpLine className='ml-12 text-2xl' />
                ):(
                  <RiArrowDropDownLine className='ml-12 text-2xl' />
                )}
                </button>
                {isPriceOpen && (
                   <div className='flex flex-col w-full pl-6'>
                    {["Free", "Under $50", "$50 - $100", "Over $100"].map((priceRange) => (
                      <label key={priceRange} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={selectedPrices.includes(priceRange)}
                          onChange={() => handlePriceChange(priceRange)}
                          className="accent-orange-500"
                        />
                        <span className='text-sm py-1 text-gray-500'>{priceRange}</span>
                      </label>
                    ))}
                 </div>
                )}
                <button 
                  className='flex justify-between items-center font-bold text-sm text-gray-500 border w-full px-8 py-2'
                  onClick={() => setDurationOpen(!isDurationOpen)}
                 >
                DURATION 
                {isDurationOpen?(
                  <RiArrowDropUpLine className='ml-12 text-2xl' />
                ):(
                  <RiArrowDropDownLine className='ml-12 text-2xl' />
                )}
                </button>
                {isDurationOpen && (
                <div className='flex flex-col w-full pl-6'>
                  {["Under 1 hour", "1-5 hours", "5-10 hours", "Over 10 hours"].map((duration) => (
                    <label key={duration} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedDurations.includes(duration)}
                        onChange={() => handleDurationChange(duration)}
                        className="accent-orange-500"
                      />
                      <span className='text-sm py-1 text-gray-500'>{duration}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          )}
          {isFilterOpen ? (
              <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5'>
                {
                  courses.map((course, index) => (
                    <CourseCard key={index} course={course} />
                  ))
                }
              </div>
          ):(
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
            {
              courses.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))
            }
            </div>
          )}
          </div>
        </div>
      </div>

      <NewLearnerFooter />
    </>
  )
}

export default Courses