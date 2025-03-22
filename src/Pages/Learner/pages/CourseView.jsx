import React from 'react'
import { IoIosArrowForward, IoIosCheckbox, IoMdCheckmarkCircle } from 'react-icons/io'
import instructor from '../../../assets/images/instructor/instructor1.png'
import { FaFacebookF, FaRegFolderOpen, FaSignal, FaStar, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import overview from '../../../../courses/webDev/webIntro.mp4'
import ReactPlayer from 'react-player'
import { preload } from 'react-dom'
import { MdOutlineAccessAlarm, MdOutlineContentCopy } from 'react-icons/md'
import { CiClock2 } from 'react-icons/ci'
import { PiStudent, PiVideo } from 'react-icons/pi'
import { IoLanguageSharp, IoTvOutline } from 'react-icons/io5'
import { LuNotebook } from 'react-icons/lu'
import { SlNotebook } from 'react-icons/sl'
import { GoStack } from 'react-icons/go'
import { AiOutlineBook, AiOutlineTrophy } from 'react-icons/ai'
import { CgDollar } from 'react-icons/cg'
import { VscMail } from 'react-icons/vsc'
import { FaRightLong } from 'react-icons/fa6'
import CourseSubSectionDropdown from '../../../Components/Learner/CourseSubSectionDropdown/CourseSubSectionDropdown'
import CourseViewInstructorCard from '../../../Components/Learner/CourseViewInstructorCard/CourseViewInstructorCard'

function CourseView() {
  return (
    <div className='flex flex-col justify-start items-center font-inter min-h-screen'>
        <div className='flex flex-col justify-center items-start bg-gray-200 w-full'>
            <div className='flex flex-col justify-center items-center w-10/12 mt-6 py-8'>
                <div className='flex flex-col justify-center items-start'>
                    <div className='flex justify-center items-center text-xs text-gray-700'>
                        <a href='/'>Home</a>
                        <IoIosArrowForward />
                        <a href='/courses'>Courses</a>
                        <IoIosArrowForward />
                        <a href='/'>Web Development</a>
                        <IoIosArrowForward />
                    </div>
                    <p className='text-xl mt-3 font-bold'>
                        Complete Website Responsive Design: from Figma to Webflow to Website Design
                    </p>
                    <p className='text-sm mt-4'>
                        3 in 1 Course: Learn to design websites with Figma, build with Webflow, and make a living freelancing.
                    </p>
                    <div className='flex justify-between items-center mt-5 space-x-20'>
                        <div className='flex justify-center items-center'>
                            <div className='w-12 overflow-hidden rounded-full'>
                                <img className='transform transition duration-300 easy-in-out hover:scale-125' src={instructor} alt='instructor' />
                            </div>
                            <div className='flex flex-col justify-center items-start ml-5'>
                                <p className='text-xs mb-1 text-gray-700'>
                                    Course by
                                </p>
                                <p className='text-xs font-bold'>
                                    Kristin Watson
                                </p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center text-orange-500 space-x-1'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <div className='flex justify-center items-center text-black text-xs'>
                                <p className=''>
                                    4.8
                                </p>
                                <p className=''>
                                (451,444 Rating)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-start pt-12 w-10/12'>
            <div className='flex flex-col justify-center items-center w-8/12 '>
                <ReactPlayer
                    url={overview}
                    controls={true}
                    width='80%'
                    height='auto'
                    playing={false}
                    config={{
                        file:{
                            attributes:{
                                preload: 'auto',
                            }
                        }
                    }}
                />
                <ul className='flex justify-between items-center mt-4 w-10/12 py-2 px-20 border-b-2'>
                    <li>
                        <a href='#overview' className='pb-2 hover:border-b-2 border-orange-500'>Overview</a>
                    </li>
                    <li>
                        <a href='#curriculum' className='pb-2 hover:border-b-2 border-orange-500'>Curriculum</a>
                    </li>
                    <li>
                        <a href='#instructor' className='pb-2 hover:border-b-2 border-orange-500'>Instructor</a>
                    </li>
                    <li>
                        <a href='#review' className='pb-2 hover:border-b-2 border-orange-500'>Review</a>
                    </li>
                </ul>
                <section id='overview'>
                    <div className='flex flex-col justify-center items-start w-10/12 mt-2 ml-24'>
                        <div className='flex flex-col justify-center items-start '>
                            <p className='text-lg font-bold'>
                                Description
                            </p>
                            <p className='text-xs text-gray-500'>
                            It gives you a huge self-satisfaction when you look at your work and say, "I made this!". I love that feeling after I'm done working on something. When I lean back in my chair, look at the final result with a smile, and have this little "spark joy" moment. It's especially satisfying when I know I just made $5,000.

                            I do! And that's why I got into this field. Not for the love of Web Design, which I do now. But for the LIFESTYLE! There are many ways one can achieve this lifestyle. This is my way. This is how I achieved a lifestyle I've been fantasizing about for five years. And I'm going to teach you the same. Often people think Web Design is complicated. That it needs some creative talent or knack for computers. Sure, a lot of people make it very complicated. People make the simplest things complicated. Like most subjects taught in the universities. But I don't like complicated. I like easy. I like life hacks. I like to take the shortest and simplest route to my destination. I haven't gone to an art school or have a computer science degree. I'm an outsider to this field who hacked himself into it, somehow ending up being a sought-after professional. That's how I'm going to teach you Web Design. So you're not demotivated on your way with needless complexity. So you enjoy the process because it's simple and fun. So you can become a Freelance Web Designer in no time.

                            For example, this is a Design course but I don't teach you Photoshop. Because Photoshop is needlessly complicated for Web Design. But people still teach it to web designers. I don't. I teach Figma – a simple tool that is taking over the design world. You will be designing a complete website within a week while others are still learning how to create basic layouts in Photoshop.

                            Second, this is a Development course. But I don't teach you how to code. Because for Web Design coding is needlessly complicated and takes too long to learn. Instead, I teach Webflow – a tool that is taking over the web design world. You will be building complex websites within two weeks while others are still learning the basics of HTML & CSS. Third, this is a Freelancing course. But I don't just teach you how to write great proposals. I give you a winning proposal template. When you're done with the course, you will have a stunning portfolio website with portfolio pieces already in it. Buy this course now and take it whenever the time is right for you.
                            </p>
                        </div>

                        <div className='flex flex-col justify-start items-start bg-green-200 w-full my-4'>
                            <p className='px-8 py-5 text-lg font-bold'>
                                What you will learn in this course
                            </p>
                            <div className='grid grid-cols-2'>
                                <div className='flex justify-center items-start pl-8 pb-5 px-5'>
                                    <IoMdCheckmarkCircle className='text-green-600 text-lg mr-2' />
                                    <p className='text-xs text-gray-700 w-11/12'>
                                        You will learn how to design beautiful websites using Figma, an interface design tool used by designers at Uber, Airbnb and Microsoft.
                                    </p>
                                </div>
                                <div className='flex justify-center items-start pl-8 pb-5 px-5'>
                                    <IoMdCheckmarkCircle className='text-green-600 text-lg mr-2' />
                                    <p className='text-xs text-gray-700 w-11/12'>
                                        You will learn how to take your designs and build them into powerful websites using Webflow, a state of the art site builder used by teams at Dell, NASA and more.
                                    </p>
                                </div><div className='flex justify-center items-start pl-8 pb-5 px-5'>
                                    <IoMdCheckmarkCircle className='text-green-600 text-lg mr-2' />
                                    <p className='text-xs text-gray-700 w-11/12'>
                                        You will learn secret tips of Freelance Web Designers and how they make great money freelancing online.
                                    </p>
                                </div><div className='flex justify-center items-start pl-8 pb-5 px-5'>
                                    <IoMdCheckmarkCircle className='text-green-600 text-lg mr-2' />
                                    <p className='text-xs text-gray-700 w-11/12'>
                                        Learn to use Python professionally, learning both Python 2 and Python 3!
                                    </p>
                                </div><div className='flex justify-center items-start pl-8 pb-5 px-5'>
                                    <IoMdCheckmarkCircle className='text-green-600 text-lg mr-2' />
                                    <p className='text-xs text-gray-700 w-11/12'>
                                        Understand how to use both the Jupyter Notebook and create .py files
                                    </p>
                                </div>
                                <div className='flex justify-center items-start pl-8 pb-5 px-5'>
                                    <IoMdCheckmarkCircle className='text-green-600 text-lg mr-2' />
                                    <p className='text-xs text-gray-700 w-11/12'>
                                        Get an understanding of how to create GUIs in the Jupyter Notebook system!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-start items-start w-full my-4'>
                            <p className='px-8 py-5 text-lg font-bold'>
                            Who this course is for:
                            </p>
                            <div className='grid grid-cols-1'>
                                <div className='flex justify-center items-start pl-8 pb-5'>
                                    <FaRightLong className='text-orange-600 text-lg mr-2' />
                                    <p className='text-xs text-gray-700 w-11/12'>
                                        You will learn how to design beautiful websites using Figma, an interface design tool used by designers at Uber, Airbnb and Microsoft.
                                    </p>
                                </div>
                                <div className='flex justify-center items-start pl-8 pb-5'>
                                    <FaRightLong className='text-orange-600 text-lg mr-2' />
                                    <p className='text-xs text-gray-700 w-11/12'>
                                        You will learn how to take your designs and build them into powerful websites using Webflow, a state of the art site builder used by teams at Dell, NASA and more.
                                    </p>
                                </div><div className='flex justify-center items-start pl-8 pb-5'>
                                    <FaRightLong className='text-orange-600 text-lg mr-2' />
                                    <p className='text-xs text-gray-700 w-11/12'>
                                        You will learn secret tips of Freelance Web Designers and how they make great money freelancing online.
                                    </p>
                                </div><div className='flex justify-center items-start pl-8 pb-5'>
                                    <FaRightLong className='text-orange-600 text-lg mr-2' />
                                    <p className='text-xs text-gray-700 w-11/12'>
                                        Learn to use Python professionally, learning both Python 2 and Python 3!
                                    </p>
                                </div><div className='flex justify-center items-start pl-8 pb-5'>
                                    <FaRightLong className='text-orange-600 text-lg mr-2' />
                                    <p className='text-xs text-gray-700 w-11/12'>
                                        Understand how to use both the Jupyter Notebook and create .py files
                                    </p>
                                </div>
                                <div className='flex justify-center items-start pl-8 pb-5'>
                                    <FaRightLong className='text-orange-600 text-lg mr-2' />
                                    <p className='text-xs text-gray-700 w-11/12'>
                                        Get an understanding of how to create GUIs in the Jupyter Notebook system!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-start items-start w-full my-4'>
                            <p className='px-8 py-5 text-lg font-bold'>
                                Course requirements
                            </p>
                            <div className='grid grid-cols-1'>
                                <div className='flex justify-center items-start pl-8 pb-5'>
                                    <IoIosCheckbox  className='text-orange-600 text-lg mr-2' />
                                    <p className='text-xs text-gray-700 w-11/12'>
                                        You will learn how to design beautiful websites using Figma, an interface design tool used by designers at Uber, Airbnb and Microsoft.
                                    </p>
                                </div>
                                <div className='flex justify-center items-start pl-8 pb-5'>
                                    <IoIosCheckbox className='text-orange-600 text-lg mr-2' />
                                    <p className='text-xs text-gray-700 w-11/12'>
                                        You will learn how to take your designs and build them into powerful websites using Webflow, a state of the art site builder used by teams at Dell, NASA and more.
                                    </p>
                                </div><div className='flex justify-center items-start pl-8 pb-5'>
                                    <IoIosCheckbox className='text-orange-600 text-lg mr-2' />
                                    <p className='text-xs text-gray-700 w-11/12'>
                                        You will learn secret tips of Freelance Web Designers and how they make great money freelancing online.
                                    </p>
                                </div><div className='flex justify-center items-start pl-8 pb-5'>
                                    <IoIosCheckbox className='text-orange-600 text-lg mr-2' />
                                    <p className='text-xs text-gray-700 w-11/12'>
                                        Learn to use Python professionally, learning both Python 2 and Python 3!
                                    </p>
                                </div><div className='flex justify-center items-start pl-8 pb-5'>
                                    <IoIosCheckbox className='text-orange-600 text-lg mr-2' />
                                    <p className='text-xs text-gray-700 w-11/12'>
                                        Understand how to use both the Jupyter Notebook and create .py files
                                    </p>
                                </div>
                                <div className='flex justify-center items-start pl-8 pb-5'>
                                    <IoIosCheckbox className='text-orange-600 text-lg mr-2' />
                                    <p className='text-xs text-gray-700 w-11/12'>
                                        Get an understanding of how to create GUIs in the Jupyter Notebook system!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='curriculum'>
                    <div className='flex flex-col justify-start items-start w-full mt-2 ml-24'>
                        <div className='flex flex-col justify-start items-start w-full my-4'>
                            <div className='flex justify-between items-center w-full'>
                                <div className='mr-96'>
                                    <p className='px-8 py-5 text-lg font-bold'>
                                        Curriculum
                                    </p>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <div className='flex justify-center items-center text-sm mr-3'>
                                        <FaRegFolderOpen className='text-orange-500' />
                                        <p className='ml-2 text-gray-600'>
                                            6 Sections
                                        </p>
                                    </div>
                                    <div className='flex justify-center items-center text-sm mr-3'>
                                        <PiVideo className='text-purple-500' />
                                        <p className='ml-2 text-gray-600'>
                                            202 lectures
                                        </p>
                                    </div>
                                    <div className='flex justify-center items-center text-sm mr-3'>
                                        <CiClock2 className='text-orange-500' />
                                        <p className='ml-2 text-gray-600'>
                                            19h 37m
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-1 items-stretch w-full'>
                                <CourseSubSectionDropdown className="w-full" />
                                <CourseSubSectionDropdown className="w-full" />
                            </div>
                        </div>
                    </div>
                </section>
                <section id='instructor'>
                    <div className='flex flex-col justify-start items-start w-full mt-2 ml-24'>
                        <div className='flex flex-col justify-start items-start w-full my-4'>
                            <p className='px-8 py-5 text-lg font-bold'>
                                Course Instructor
                            </p>
                            <div className='grid grid-cols-1'>
                                <CourseViewInstructorCard />
                            </div>
                        </div>
                    </div>
                </section>
                <section id='review'>
                    
                </section>
            </div>
            <div className='w-3/12 px-6 border py-5 font-inter'>
                <div className='flex flex-col justify-center items-center w-full'>
                    <div className='flex justify-between items-center w-full'>
                        <p className=''>
                            $14.00
                        </p>
                        <p className='py-1 px-2 bg-orange-100 text-orange-500'>
                            56% off
                        </p>
                    </div>
                    <div className='flex justify-start items-center w-full text-red-500 my-2 mb-4'>
                        <MdOutlineAccessAlarm />
                        <p className='text-xs'>
                            2 days left at this price!
                        </p>
                    </div>
                </div>
                <hr className='w-full h-1' />
                <div className='flex flex-col justify-start items-center text-gray-600 text-sm w-full my-2'>
                    <div className='flex justify-between items-center w-full my-1'>
                        <div className='flex justify-between items-center'>
                            <CiClock2 className='mr-2'/>
                            <p className=''>
                                Course Duration
                            </p>
                        </div>
                        <p className=''>
                            6 Month
                        </p>
                    </div>
                    <div className='flex justify-between items-center w-full my-1'>
                        <div className='flex justify-between items-center'>
                            <FaSignal className='mr-2'/>
                            <p className=''>
                                Course Level
                            </p>
                        </div>
                        <p className=''>
                        Beginner and Intermediate
                        </p>
                    </div>
                    <div className='flex justify-between items-center w-full my-1'>
                        <div className='flex justify-between items-center'>
                            <PiStudent className='mr-2'/>
                            <p className=''>
                                Students Enrolled
                            </p>
                        </div>
                        <p className=''>
                            69,419,618
                        </p>
                    </div>
                    <div className='flex justify-between items-center w-full my-1'>
                        <div className='flex justify-between items-center'>
                            <IoLanguageSharp className='mr-2'/>
                            <p className=''>
                                Language
                            </p>
                        </div>
                        <p className=''>
                            Mandarin
                        </p>
                    </div>
                    <div className='flex justify-between items-center w-full my-1'>
                        <div className='flex justify-between items-center'>
                            <LuNotebook  className='mr-2'/>
                            <p className=''>
                                Subtittle Language
                            </p>
                        </div>
                        <p className=''>
                            English
                        </p>
                    </div>
                </div>
                <hr className='w-full h-1' />
                <div className='flex flex-col justify-center items-center w-full my-3'>
                    <button 
                        className='border border-orange-500 hover:border-black bg-orange-500 text-white w-full py-3 font-bold mb-2'
                    >
                        Add to Cart
                    </button>
                    <button 
                        className='border border-orange-500 hover:border-black bg-orange-100 text-orange-500 w-full py-3 font-bold mb-2'
                    >
                        Buy now
                    </button>
                    <button 
                        className='border hover:border-orange-500 border-black w-full py-3 font-bold'
                    >
                        Add to wishlist
                    </button>
                    <p className='text-xs text-gray-600 mt-1'>
                        Note: all course have 30-days money-back guarantee
                    </p>
                </div>
                <hr className='w-full h-1' />
                <div className='flex flex-col justify-center items-start w-full my-3'>
                    <p className='text-black font-bold'>
                        This course includes:
                    </p>
                    <div className='flex flex-col justify-center items-start ml-4 mt-3'>
                        <div className='flex justify-center items-center my-2'>
                            <CiClock2 className='mr-2 text-xl text-orange-500' />
                            <p className='text-sm text-gray-700'>
                                Lifetime access
                            </p>
                        </div>
                        <div className='flex justify-center items-center my-2'>
                            <CgDollar className='mr-2 text-xl text-orange-500' />
                            <p className='text-sm text-gray-700'>
                                30-days money-back guarantee
                            </p>
                        </div>
                        <div className='flex justify-center items-center my-2'>
                            <AiOutlineBook className='mr-2 text-xl text-orange-500' />
                            <p className='text-sm text-gray-700'>
                                Free exercises file & downloadable resources
                            </p>
                        </div>
                        <div className='flex justify-center items-center my-2'>
                            <AiOutlineTrophy className='mr-2 text-xl text-orange-500' />
                            <p className='text-sm text-gray-700'>
                                Shareable certificate of completion
                            </p>
                        </div>
                        <div className='flex justify-center items-center my-2'>
                            <IoTvOutline className='mr-2 text-xl text-orange-500' />
                            <p className='text-sm text-gray-700'>
                                Access on mobile , tablet and TV
                            </p>
                        </div>
                        <div className='flex justify-center items-center my-2'>
                            <SlNotebook className='mr-2 text-xl text-orange-500' />
                            <p className='text-sm text-gray-700'>
                                English subtitles
                            </p>
                        </div>
                        <div className='flex justify-center items-center my-2'>
                            <GoStack className='mr-2 text-xl text-orange-500' />
                            <p className='text-sm text-gray-700'>
                                100% online course
                            </p>
                        </div>
                    </div>
                </div>
                <hr className='w-full h-1' />
                <div className='flex flex-col justify-center items-start w-full my-3'>
                    <p className='text-black font-bold'>
                        Share this course:
                    </p>
                    <div className='flex justify-center items-center mt-2 mx-2'>
                        <button className='flex justify-center items-center text-sm bg-gray-200 px-4 py-3 mr-2'>
                            <MdOutlineContentCopy className='mr-2' />
                            Link
                        </button>
                        <button className='flex justify-center items-center text-sm bg-gray-200 px-4 py-4 mr-2'>
                            <FaFacebookF />
                        </button>
                        <button className='flex justify-center items-center text-sm bg-gray-200 px-4 py-4 mr-2'>
                            <FaTwitter />
                        </button>
                        <button className='flex justify-center items-center text-sm bg-gray-200 px-4 py-4 mr-2'>
                            <VscMail />
                        </button>
                        <button className='flex justify-center items-center text-sm bg-gray-200 px-4 py-4 mr-2'>
                            <FaWhatsapp />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseView