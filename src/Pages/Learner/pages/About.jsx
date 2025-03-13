import React from 'react'
import { GoPeople } from 'react-icons/go'
import { AiTwotoneSafetyCertificate } from 'react-icons/ai'
import { BiWorld } from 'react-icons/bi'
import { FaArrowRight, FaCertificate } from 'react-icons/fa'
import { BsStack } from 'react-icons/bs'
import img1 from '../../../assets/images/about/img1.png'
import mission from '../../../assets/images/about/mission.png'
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
import galleryImage7 from '../../../assets/images/gallery/image7.jpeg'
import Review from '../../../Components/Learner/Reviews/Review'

function About() {
  const reviews = [
    {
      review:
        'Eduguard fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.',
      name: 'Sundar Pichai',
      position: 'Chief Chairman',
      company: 'Google',
      link: 'https://www.google.com',
    },
    {
      review:
        'The best platform for learning and growing in tech. The courses are structured very well and provide hands-on experience.',
      name: 'Satya Nadella',
      position: 'CEO',
      company: 'Microsoft',
      link: 'https://www.microsoft.com',
    },
    {
      review:
        'A game changer in online education. The content is high quality and accessible to everyone who wants to upskill.',
      name: 'Elon Musk',
      position: 'CEO',
      company: 'Tesla',
      link: 'https://www.tesla.com',
    },
  ];

  return (
    <>
      <div className='flex flex-col justify-center items-center bg-gray-200 py-3'>
        <div className='py-4'>
          <p className='font-inter font-bold text-xl'>
            About
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <a className='font-inter text-xs text-gray-600 hover:text-black mx-2' href='/' >
            Home
          </a>
          <p className='font-inter font-bold mx-2'>
            /
          </p>
          <a className='font-inter text-xs text-gray-600 hover:text-black mx-2' href='/about'>
            About
          </a>
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <div className='flex flex-col md:flex-row justify-center items-center py-12'>
          <div className='flex flex-col justify-center items-start w-10/12 md:w-4/12'>
            <p className='text-gray-300 font-inter font-bold text-3xl lg:text-4xl xl:text-6xl my-3'>
              2002-2025
            </p>
            <p className='text-black font-bold font-inter text-xl lg:text-4xl mb-4'>
              We share knowledge <br /> with the world
            </p>
            <p className='text-xs md:text-sm font-inter text-gray-600 w-11/12 lg:w-8/12 mb-4'>
              Interdum et malesuada fames ac ante ipsum primis in faucibus. 
              Praesent fermentum quam mauris. Fusce tempor et augue a aliquet. 
              Donec non ipsum non risus egestas tincidunt at vitae nulla. 
              </p>
          </div>
          <div className='w-10/12 md:w-6/12 lg:w-5/12 xl:w-3/12 overflow-hidden object-cover'>
            <img className='rounded-sm' src={img1} alt='logo1' />
          </div>
        </div>
      </div>

      <div className='bg-gray-50'>
        <div className='flex flex-col justify-center items-center my-6 lg:my-10 py-10'>
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
      
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col lg:flex-row justify-center items-start lg:items-center py-4 pb-12'>
            <div className='flex justify-center items-start mx-8 mb-7'>
              <GoPeople className='text-orange-600 text-2xl mt-1'/>
              <div className='flex flex-col justify-center items-start mx-6'>
                <p className='font-inter font-bold text-3xl'>67.1k</p>
                <p className='font-inter text-sm'>Students</p>
              </div>
            </div>
            <div className='flex justify-center items-start mx-8 mb-7'>
              <AiTwotoneSafetyCertificate className='text-blue-600 text-2xl mt-1'/>
              <div className='flex flex-col justify-center items-start mx-6'>
                <p className='font-inter font-bold text-3xl'>26k</p>
                <p className='font-inter text-sm'>Certified Instructor</p>
              </div>
            </div>
            <div className='flex justify-center items-start mx-8 mb-7'>
              <BiWorld className='text-red-600 text-2xl mt-1'/>
              <div className='flex flex-col justify-center items-start mx-6'>
                <p className='font-inter font-bold text-3xl'>72</p>
                <p className='font-inter text-sm'>Country Language</p>
              </div>
            </div>
            <div className='flex justify-center items-start mx-8 mb-7'>
              <FaCertificate className='text-green-600 text-2xl mt-1'/>
              <div className='flex flex-col justify-center items-start mx-6'>
                <p className='font-inter font-bold text-3xl'>99.9%</p>
                <p className='font-inter text-sm'>Success Rate</p>
              </div>
            </div>
            <div className='flex justify-center items-start mx-8 mb-7'>
              <BsStack className='text-orange-600 text-2xl mt-1'/>
              <div className='flex flex-col justify-center items-start mx-6'>
                <p className='font-inter font-bold text-3xl'>57</p>
                <p className='font-inter text-sm'>Trusted Companies</p>
              </div>
            </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center bg-orange-100'>
        <div className='flex flex-col-reverse lg:flex-row justify-center items-center md:w-8/12 lg:w-9/12 xl:w-8/12 pt-16'>
          <img className='w-8/12 md:8/12 lg:w-4/12 md:mr-12 lg:mr-36' src={mission} alt='mission' />
          <div className='flex flex-col justify-center items-start ml-8'>
              <p className='text-sm font-inter text-orange-500 mb-3'>
                OUR ONE BILLION MISSION
              </p>
              <p className='text-2xl lg:text-4xl font-inter font-bold lg:mb-5 xl:mb-7 xl:w-9/12'>
                Our one billion mission sounds bold, We agree.
              </p>
              <p className='font-inter text-xs lg:text-sm  text-gray-700  lg:w-10/12 xl:w-9/12'>
                "We cannot solve our problems with the same thinking we used when 
                we created them."—Albert Einstein. Institutions are slow to change. 
                Committees are where good ideas and innovative thinking go to die. 
                Choose agility over dogma. Embrace and drive change. We need to 
                wipe the slate clean and begin with bold, radical thinking.
              </p>
          </div>
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
              <a href='/' className='flex justify-center items-center bg-orange-600 text-white font-inter text-sm py-2 px-4 tranfrom transition duration-300 easy-in-out hover:scale-105'>
                Join our team
                <FaArrowRight className='ml-4'/>
              </a>
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

      <div className='flex justify-center items-start m-10'>
        <div className='flex justify-center items-start p-10 w-11/12'>
          {reviews.map((review, index) => (
            <Review key={index} review={review} />
          ))}
        </div>
      </div>
    </>
  )
}

export default About