import React from 'react'
import career from '../../../assets/images/career/career.png'
import companyLogo1 from '../../../assets/images/company/logo1.png'
import companyLogo2 from '../../../assets/images/company/logo2.png'
import companyLogo3 from '../../../assets/images/company/logo3.png'
import companyLogo4 from '../../../assets/images/company/logo4.png'
import companyLogo5 from '../../../assets/images/company/logo5.png'
import companyLogo6 from '../../../assets/images/company/logo6.png'
import companyLogo7 from '../../../assets/images/company/logo7.png'
import companyLogo8 from '../../../assets/images/company/logo8.png'
import galleryImage1 from '../../../assets/images/gallery/image1.jpeg'
import galleryImage2 from '../../../assets/images/gallery/image2.jpeg'
import galleryImage3 from '../../../assets/images/gallery/image3.jpeg'
import galleryImage4 from '../../../assets/images/gallery/image4.jpeg'
import galleryImage5 from '../../../assets/images/gallery/image5.jpeg'
import galleryImage6 from '../../../assets/images/gallery/image6.jpeg'
import union1 from '../../../assets/images/career/union1.jpeg'
import union2 from '../../../assets/images/career/union2.jpeg'
import union3 from '../../../assets/images/career/union3.jpeg'
import { VscVerified, VscVerifiedFilled } from 'react-icons/vsc'
import { FaMoneyBillWave, FaClock, FaHeartbeat, FaGraduationCap, FaHome, FaPlane, FaUsers, FaChartLine } from 'react-icons/fa';
import PerksCard from '../../../Components/Learner/PerksCard/PerksCard'
import JobCard from '../../../Components/Learner/JobCard/JobCard'

function Career() {
    const perksData = [
        { name: 'Competitive Salary', color: 'blue', icon: FaMoneyBillWave },
        { name: 'Flexible Work Hours', color: 'green', icon: FaClock },
        { name: 'Health Insurance', color: 'red', icon: FaHeartbeat },
        { name: 'Learning & Development', color: 'purple', icon: FaGraduationCap },
        { name: 'Remote Work Option', color: 'yellow', icon: FaHome },
        { name: 'Paid Vacation', color: 'pink', icon: FaPlane },
        { name: 'Team Collaboration', color: 'gray', icon: FaUsers },
        { name: 'Career Growth', color: 'indigo', icon: FaChartLine },
      ];
      
      const jobsData = [
        {
          name: 'Software Engineer',
          location: 'San Francisco, CA',
          type: 'Full-Time',
          noofvacancy: '3 Vacancies',
          deadline: 'April 30, 2025',
        },
        {
          name: 'UI/UX Designer',
          location: 'New York, NY',
          type: 'Remote',
          noofvacancy: '2 Vacancies',
          deadline: 'March 25, 2025',
        },
        {
          name: 'Project Manager',
          location: 'Seattle, WA',
          type: 'Hybrid',
          noofvacancy: '1 Vacancy',
          deadline: 'May 10, 2025',
        },
      ];
      
  return (
    <>
        <div className='flex flex-col justify-center items-center bg-gray-200 py-3'>
        <div className='py-4'>
          <p className='font-inter font-bold text-xl'>
            Carrer
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <a className='font-inter text-xs text-gray-600 hover:text-black mx-2' href='/' >
            Home
          </a>
          <p className='font-inter font-bold mx-2'>
            /
          </p>
          <a className='font-inter text-xs text-gray-600 hover:text-black mx-2' href='/career'>
            careet
          </a>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col md:flex-row justify-center items-center w-8/12 mt-6'>
          <div className='flex flex-col justify-center items-center md:items-start md:w-6/12'>
            <p className='font-inter md:text-xl lg:text-2xl xl:text-3xl font-bold mb-4 text-center'>
            Join the most incredible & creative team.
            </p>
            <p className='font-inter text-sm w-full text-center md:text-left md:w-11/12 lg:w-9/12 xl:w-7/12 text-gray-700 mb-4'>
                Proin gravida enim augue, dapibus ultrices eros feugiat et. 
                Pellentesque bibendum orci felis, sit amet efficitur felis lacinia ac. 
                Mauris gravida justo ac nunc consectetur.
            </p>
            <a href='/' className='flex justify-center items-center bg-orange-500 text-white px-6 py-2 lg:py-3 hover:border-2 border-orange-500 hover:bg-white hover:text-orange-500'>
                View Open Positions
            </a>
          </div>
          <div className='w-9/12 md:w-4/12'>
            <img src={career} alt='' className='' />
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center bg-gray-100'>
        <div className='flex flex-col-reverse xl:flex-row justify-center items-center w-11/12 xl:w-10/12 py-16'>
            <div className='flex justify-center items-center w-4/12 lg:w-6/12 mt-8'>
                <img className='w-36 mr-2' src={union1} alt='' />
                <img className='w-36 mr-2' src={union2} alt='' />
                <img className='w-36 mr-2' src={union3} alt='' />
            </div>
            <div className='flex flex-col justify-center items-center xl:items-start lg:w-8/12 xl:w-6/12'>
                <p className='font-inter text-3xl font-bold mb-5 text-center'>
                    Why you will join our team
                </p>
                <p className='font-inter text-sm text-gray-700 mb-5 text-center xl:text-start'>
                    Our team brings expertise, innovation, 
                    and a results-driven approach to building 
                    a high-quality Learning Management System (LMS).
                    We ensure seamless functionality, scalability, and a user-friendly experience.
                </p>
                <div className='flex justify-center items-start md:w-8/12 bg-white py-5 px-10 rounded-lg mb-6'>
                    <div className='flex justify-center items-start'>
                        <VscVerifiedFilled className='text-green-700 text-xl lg:text-3xl mr-8' />
                    </div>
                    <div className='font-inter'>
                        <p className='font-bold text-sm'>
                            Expert Development:
                        </p>
                        <p className='text-xs text-gray-700'>
                            Skilled in MERN, MEAN, and other modern web technologies.
                            Experts in the field
                        </p>
                    </div>
                </div>
                <div className='flex justify-center items-start md:w-8/12 bg-white py-5 px-10 rounded-lg'>
                    <div className='flex justify-center items-start'>
                        <VscVerifiedFilled className='text-green-700 text-xl lg:text-3xl mr-8'/>
                    </div>
                    <div className='font-inter'>
                        <p className='font-bold text-sm'>
                            Real-Time Features
                        </p>
                        <p className='text-xs text-gray-700'>
                            Live chat, notifications, and progress tracking with Socket.io & Chart.js.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center pb-16'>
        <p className='font-bold text-2xl md:text-2xl text-center my-4 mb-8'>Our Perks & Benefits</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {perksData.map((perk, index) => (
            <PerksCard key={index} {...perk} />
        ))}
        </div>
      </div>

      <div className='flex flex-col justify-center items-center bg-gray-50'>
          <div className='flex flex-col md:flex-row justify-center items-center w-8/12 py-10'>
            <div className='flex flex-col justify-center items-start md:w-5/12 md:mr-36 mb-6'>
              <p className='font-inter text-sm text-orange-600 mb-3'>
                OUR GALLERY
              </p>
              <p className='font-inter font-bold text-xl md:text-4xl w-8/12 mb-2'>
                We’ve been here almost 17 years
              </p>
              <p className='font-inter text-gray-700 text-sm w-9/12 mb-2'>
                Fusce lobortis leo augue, sit amet tristique nisi 
                commodo in. Aliquam ac libero quis tellus venenatis 
                imperdiet. Sed sed nunc libero. Curabitur in urna ligula.  
                torquent per conubia nostra.
              </p>
            </div>
            <div className='flex flex-col justify-center items-center w-7/12 md:w-4/12'>
              <div className='flex justify-center items-end mb-3'>
                 <img className='w-6/12 mr-3' src={galleryImage1} alt='galleryimage' />
                 <img className='w-8/12 mr-3' src={galleryImage2} alt='galleryimage' />
                 <img className='w-3/12' src={galleryImage3} alt='galleryimage' />
              </div>
              <div className='flex justify-center items-start'>
                  <img className='w-4/12 mr-3' src={galleryImage4} alt='galleryimage' />
                  <img className='w-10/12 mr-3' src={galleryImage5} alt='galleryimage' />
                  <img className='w-6/12' src={galleryImage6} alt='galleryimage' />
              </div>
            </div>
          </div>
      </div>

      <div className='bg-gray-50'>
        <div className='flex flex-col justify-center items-center py-10'>
          <div className='flex flex-col lg:flex-row justify-center items-center'>
            <div className='flex flex-col justify-center items-strat w-11/12 lg:w-4/12 mb-4'>
              <p className='text-lg md:text-2xl font-inter font-bold mb-4'>We Just keep growing<br /> with 6.3k Companies</p>
              <p className='text-xs w-64 font-inter text-gray-500'>Nullam egestas tellus at enim ornare tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 w-8/12'>
              <div className='flex justify-center items-center bg-gray-100 w-36 h-20'>
                <img className='px-6' src={companyLogo1} alt='logo' />
              </div>
              <div className='flex justify-center items-center bg-gray-100 w-36 h-20'>
                <img className='px-6' src={companyLogo2} alt='logo' />
              </div>
              <div className='flex justify-center items-center bg-gray-100 w-36 h-20'>
                <img className='px-6' src={companyLogo3} alt='logo' />
              </div>
              <div className='flex justify-center items-center bg-gray-100 w-36 h-20'>
                <img className='px-6' src={companyLogo4} alt='logo' />
              </div>
              <div className='flex justify-center items-center bg-gray-100 w-36 h-20'>
                <img className='px-6' src={companyLogo5} alt='logo' />
              </div>
              <div className='flex justify-center items-center bg-gray-100 w-36 h-20'>
                <img className='px-6' src={companyLogo6} alt='logo' />
              </div>
              <div className='flex justify-center items-center bg-gray-100 w-36 h-20'>
                <img className='px-6' src={companyLogo7} alt='logo' />
              </div>
              <div className='flex justify-center items-center bg-gray-100 w-36 h-20'>
                <img className='px-6' src={companyLogo8} alt='logo' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center bg-gray-100 pb-16'>
        <p className='font-bold text-2xl md:text-3xl text-center my-4 mb-8'>Our all open positions</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6'>
        {jobsData.map((job, index) => (
            <JobCard key={index} job={job} />
        ))}
        </div>
      </div>

    </>
  )
}

export default Career