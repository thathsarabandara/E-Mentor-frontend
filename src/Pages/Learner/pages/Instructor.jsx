import React from 'react'
import instructor from '../../../assets/images/become_an_instructor/image1.png'
import { AiTwotoneSafetyCertificate } from 'react-icons/ai'
import { BiWorld } from 'react-icons/bi'
import { BsStack } from 'react-icons/bs'
import { FaArrowRight, FaCertificate } from 'react-icons/fa'
import { GoDotFill, GoPeople } from 'react-icons/go'
import { VscVerifiedFilled } from 'react-icons/vsc'
import union1 from '../../../assets/images/become_an_instructor/image2.png'
import image31 from '../../../assets/images/become_an_instructor/image31.png'
import image32 from '../../../assets/images/become_an_instructor/image32.png'
import image41 from '../../../assets/images/become_an_instructor/image41.png'
import image42 from '../../../assets/images/become_an_instructor/image42.png'
import imag1 from '../../../assets/images/become_an_instructor/image5.png'
import imag2 from '../../../assets/images/become_an_instructor/image6.png'
import imag3 from '../../../assets/images/become_an_instructor/image7.png'
import imag4 from '../../../assets/images/become_an_instructor/image8.png'
import imag5 from '../../../assets/images/become_an_instructor/image9.png'
import imag6 from '../../../assets/images/become_an_instructor/image10.png'
import imag7 from '../../../assets/images/become_an_instructor/image11.png'
import imag8 from '../../../assets/images/become_an_instructor/image12.png'
import foot1 from '../../../assets/images/become_an_instructor/image131.png'
import foot2 from '../../../assets/images/become_an_instructor/image132.png'
import { MdOutlineMarkEmailRead } from 'react-icons/md'
import { SiComma } from 'react-icons/si'

function Instructor() {
  return (
    <>
      <div className='flex flex-col justify-center items-center bg-gray-200 py-3'>
        <div className='py-4'>
          <p className='font-inter font-bold text-xl'>
            Become an Instructor
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <a className='font-inter text-xs text-gray-600 hover:text-black mx-2' href='/' >
            Home
          </a>
          <p className='font-inter font-bold mx-2'>
            /
          </p>
          <a className='font-inter text-xs text-gray-600 hover:text-black mx-2' href='/beaninstructor'>
            Become an Instructor
          </a>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col md:flex-row justify-center items-center w-8/12 mt-6'>
          <div className='flex flex-col justify-center items-center md:items-start md:w-6/12'>
            <p className='font-inter md:text-xl lg:text-2xl xl:text-3xl font-bold mb-4 text-center'>
              Become an Instuctor
            </p>
            <p className='font-inter text-sm w-full text-center md:text-left md:w-11/12 lg:w-9/12 xl:w-7/12 text-gray-700 mb-4'>
              Become an instructor & start teaching with 26k certified instructors. 
              Create a success story with 67.1k Students — Grow yourself with 71 countries.
            </p>
            <a href='/' className='flex justify-center items-center bg-orange-500 text-white px-6 py-2 lg:py-3 hover:border-2 border-orange-500 hover:bg-white hover:text-orange-500'>
              Get Started
            </a>
          </div>
          <div className='w-9/12 md:w-4/12'>
            <img src={instructor} alt='' className='' />
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center bg-orange-50'>
        <div className='flex flex-col lg:flex-row justify-center items-start lg:items-center py-12'>
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

      <div className='flex flex-col justify-center items-center bg-gray-100'>
        <div className='flex flex-col-reverse xl:flex-row justify-center items-center w-11/12 xl:w-10/12 py-16'>
            <div className='flex justify-center items-center w-11/12 lg:w-6/12 mt-8'>
                <img className='w-8/12 mr-2' src={union1} alt='' />
            </div>
            <div className='flex flex-col justify-center items-center xl:items-start lg:w-8/12 xl:w-6/12'>
                <p className='font-inter text-3xl font-bold mb-5 text-center'>
                    Why you’ll start teaching on E-Mentor
                </p>
                <p className='font-inter text-sm text-gray-700 mb-5 text-center xl:text-start'>
                  Praesent congue ornare nibh sed ullamcorper. Proin venenatis tellus non turpis scelerisque, 
                  vitae auctor arcu ornare. Cras vitae nulla a purus mollis venenatis. 
                </p>
                <div className='flex justify-center items-start md:w-8/12 bg-white py-5 px-10 rounded-lg mb-6'>
                    <div className='flex justify-center items-start'>
                        <VscVerifiedFilled className='text-green-700 text-xl lg:text-3xl mr-8' />
                    </div>
                    <div className='font-inter'>
                        <p className='font-bold text-sm'>
                            Tech your students as you want.
                        </p>
                        <p className='text-xs text-gray-700'>
                          Morbi quis lorem non orci fermentum euismod. Nam sapien tellus, 
                          aliquam nec porttitor vel, 
                          pellentesque at metus. 
                        </p>
                    </div>
                </div>
                <div className='flex justify-center items-start md:w-8/12 bg-white py-5 px-10 rounded-lg mb-6'>
                    <div className='flex justify-center items-start'>
                        <VscVerifiedFilled className='text-green-700 text-xl lg:text-3xl mr-8'/>
                    </div>
                    <div className='font-inter'>
                        <p className='font-bold text-sm'>
                          Manage your course, payment in one place
                        </p>
                        <p className='text-xs text-gray-700'>
                          Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh consequat eu. 
                          Nullam vel libero pharetra, euismod turpis et, elementum enim.
                        </p>
                    </div>
                </div>
                <div className='flex justify-center items-start md:w-8/12 bg-white py-5 px-10 rounded-lg'>
                    <div className='flex justify-center items-start'>
                        <VscVerifiedFilled className='text-green-700 text-xl lg:text-3xl mr-8'/>
                    </div>
                    <div className='font-inter'>
                        <p className='font-bold text-sm'>
                          Chat with your students
                        </p>
                        <p className='text-xs text-gray-700'>
                          Nullam mattis lectus ac diam egestas posuere. 
                          Praesent auctor massa orci, ut fermentum eros dictum id. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center '>
        <div className='flex flex-col lg:flex-row-reverse justify-center items-center md:w-8/12 lg:w-9/12 xl:w-8/12 pt-16'>
          <div className='flex justify-center items-end w-6/12 md:w-9/12 md:mr-12 lg:mr-36 mb-10' >
                <img className='w-6/12 mr-2' src={image41} alt='' />
                <img className='w-8/12 mr-2' src={image42} alt='' />
          </div>
          <div className='flex flex-col justify-center items-start ml-8'>
              <p className='text-2xl lg:text-4xl font-inter font-bold lg:mb-5 xl:mb-7 xl:w-9/12'>
                  Instructor rules & regulations
              </p>
              <p className='font-inter text-xs lg:text-sm  text-gray-700 w-10/12 lg:w-10/12 xl:w-9/12'>
                To ensure a smooth and effective learning experience, 
                instructors using the LMS must adhere to specific rules and regulations. 
                These guidelines help maintain professionalism, 
                ensure fair assessment, and create a positive digital learning environment
              </p>
              <div className='flex flex-col justify-center items-start font-inter w-11/12 text-xs ml-5 mt-5 mb-12'>
                <div className='flex justify-center items-center mt-2'>
                  <GoDotFill className='text-red-500' />
                  <p className='ml-4'>
                    Structure lessons clearly, maintaining consistency in formats and deadlines.
                  </p>
                </div>
                <div className='flex justify-center items-center mt-2'>
                  <GoDotFill className='text-red-500' />
                  <p className='ml-4'>
                    Provide timely responses to student inquiries and constructive feedback on assignments.
                  </p>
                </div>
                <div className='flex justify-center items-center mt-2'>
                  <GoDotFill className='text-red-500' />
                  <p className='ml-4'>
                    Regularly update student progress reports and address performance concerns proactively.
                  </p>
                </div>
                <div className='flex justify-center items-center mt-2'>
                  <GoDotFill className='text-red-500' />
                  <p className='ml-4'>
                    Adhere to institutional policies regarding privacy, data security, and ethical conduct.
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center bg-orange-100'>
        <div className='flex flex-col-reverse lg:flex-row justify-center items-center md:w-8/12 lg:w-9/12 xl:w-8/12 pt-16'>
          <div className='flex justify-center items-end w-6/12 md:mr-12 lg:mr-36 mb-10' >
                <img className='w-8/12 mr-2' src={image31} alt='' />
                <img className='w-8/12 mr-2' src={image32} alt='' />
          </div>
          <div className='flex flex-col justify-center items-start ml-8'>
              <p className='text-2xl lg:text-4xl font-inter font-bold lg:mb-5 xl:mb-7 xl:w-9/12'>
                Don’t worry we’re always here to help you
              </p>
              <p className='font-inter text-xs lg:text-sm  text-gray-700 w-6/12 lg:w-10/12 xl:w-9/12'>
                Teachers play a crucial role in utilizing Learning Management Systems (LMS) to enhance education. 
                By effectively leveraging LMS features, 
                they can streamline teaching, improve student engagement, and optimize course management.
              </p>
              <div className='flex flex-col justify-center items-start font-inter text-xs ml-5 mt-5'>
                <div className='flex justify-center items-center mt-2'>
                  <FaArrowRight className='text-red-500' />
                  <p className='ml-4'>
                    Content Management & Course Organization
                  </p>
                </div>
                <div className='flex justify-center items-center mt-2'>
                  <FaArrowRight className='text-red-500' />
                  <p className='ml-4'>
                    Student Engagement & Interaction
                  </p>
                </div>
                <div className='flex justify-center items-center mt-2'>
                  <FaArrowRight className='text-red-500' />
                  <p className='ml-4'>
                    Performance Tracking & Assessment
                  </p>
                </div>
                <div className='flex justify-center items-center mt-2'>
                  <FaArrowRight className='text-red-500' />
                  <p className='ml-4'>
                    Collaboration & Communication
                  </p>
                </div>
                <div className='flex justify-center items-center my-5 font-inter'>
                  <div className='flex flex-col justify-center items-center bg-white p-5 rounded-3xl'>
                    <MdOutlineMarkEmailRead className='text-red-500' />
                  </div>
                  <div className='flex flex-col justify-center items-start ml-5'>
                    <p className='pb-1 text-gray-500'>
                      Email us, anytime anywhere
                    </p>
                    <p className='text-sm'>
                      help.eduguard@gamil.com
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center bg-gray-50'>
          <div className='flex flex-col lg:flex-row justify-center items-center w-8/12 py-10'>
            <div className='flex flex-col justify-center items-center lg:items-start lg:w-5/12 lg:mr-36 mb-6'>
              <p className='font-inter font-bold text-xl md:text-4xl w-10/12 mb-2 text-center lg:text-start'>
                20k+ Instructor created their success story with E-Mentor
              </p>
              <p className='font-inter text-gray-700 text-sm w-9/12 mb-2'>
                These are honest reviews from our past instructors about their experience using our platform. 
                Their valuable feedback helps us continuously improve and provide a better user experience for both educators and students. 
                Below are some insights shared by our instructors.
              </p>
              <div className='flex flex-col justify-center items-start font-inter bg-orange-100 py-6 px-7 w-9/12'>
                  <div className='flex justify-center items-start mb-4'>
                    <SiComma />
                    <SiComma />
                  </div>
                  <p className='text-xs'>
                    "I've been using this platform for a while now, 
                    and I must say it has significantly enhanced my teaching experience. 
                    Overall, I'm very satisfied with how the platform has streamlined my workflow.
                  </p>
              </div>
            </div>
            <div className='flex justify-center items-center w-10/12 lg:w-4/12'>
              <div className='flex flex-col justify-center items-center mb-3 w-7/12 mr-2'>
                 <div className='flex justify-between items-end mb-2'>
                    <img className='w-4/12 mr-3' src={imag1} alt='galleryimage' />
                    <img className='w-7/12 mr-3' src={imag2} alt='galleryimage' />
                 </div>
                 <img className='w-full mr-3' src={imag4} alt='galleryimage' />
                 <div className='flex justify-between items-start mt-2'>
                    <img className='w-4/12 mr-3' src={imag7} alt='galleryimage' />
                    <img className='w-7/12 mr-3' src={imag6} alt='galleryimage' />
                 </div>
              </div>
              <div className='flex flex-col justify-center items-start w-5/12'>
                  <img className='w-11/12 mr-3 mb-3' src={imag3} alt='galleryimage' />
                  <img className='w-full mr-3 mb-3' src={imag5} alt='galleryimage' />
                  <img className='w-10/12' src={imag8} alt='galleryimage' />
              </div>
            </div>
          </div>
      </div>

      <div className='flex flex-col lg:flex-row justify-center items-center bg-gray-800 py-16 border-b-2'>
        <div className='flex flex-col justify-center items-center md:items-start lg:ml-16 xl:ml-32 px-6'>
          <div className='flex flex-col justify-center items-start md:w-7/12 '>
            <p className='text-white font-inter text-xl md:text-4xl ml-6 md:ml-0 font-bold mb-5'>
              Start teaching with us and inspire others.
            </p>
            <p className='text-white font-inter text-xl md:text-sm ml-6 md:ml-0'>
              Become an instructor & start teaching with 26k certified instructors.
              Create a success story with 67.1k Students — Grow yourself with 71 countries.
            </p>
          </div>
          <div className='flex justify-center items-center py-4'>
            <a href='/' className='text-white text-sm px-6 py-2 bg-orange-600 mr-4 transform transition duration-300 ease-in-out hover:scale-110'>
              Register now
            </a>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-start md:items-center mt-7 w-full w-9/12 lg:w-6/12'>
          <div className='flex flex-row-reverse justify-center items-end'>
            <img className='w-8/12 sm:w-4/12 lg:w-4/12 mr-2' src={foot1} alt='foot1' />
            <img className='w-4/12 sm:w-2/12 lg:w-2/12 mr-2' src={foot2} alt='foot2' />
          </div>
        </div>
      </div>

    </>
  )
}

export default Instructor