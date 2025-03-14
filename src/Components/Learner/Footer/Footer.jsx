import React from 'react'
import image from '../../../assets/images/logo.png';
import FooterBtn from '../FooterBtn/FooterBtn';

function Footer() {
  return (
    <>
        <div className='flex flex-col xl:flex-row px-4 py-4 bg-gray-800 justify-center items-center xl:items-start xl:p-16'>
            <div className='flex flex-col justify-center items-center md:my-4 md:mx-16'>
                <div className='flex flex-row xl:flex-col justify-center items-center'>
                    <a href='/'>
                        <img className='w-12 h-12 object-cover md:m-1 md:mx-2 md:w-14 md:h-14' src={image} alt='logo' />
                    </a>
                    <a href='/'>
                        <h2 className='text-orange-500 font-bold text-md md:text-4xl'>E-Mentor</h2>
                    </a>
                </div>
                <div className='mx-1 text-xs text-gray-400 text-center font-inter'>
                    Learners Best Choice and Teachers Best Choice. <br /> Best Experience in Education
                </div>
                <div className='flex m-2 justify-center mt-4'>
                    <a href='/'>
                        <img className='w-8 h-8 object-cover md:m-1 md:p-2 md:w-10 md:h-10 bg-gray-700 hover:bg-orange-500' src='https://img.icons8.com/ios-filled/50/FFFFFF/facebook-f.png' alt='facebook-logo' />
                    </a>
                    <a href='/'>
                        <img className='w-8 h-8 object-cover md:m-1 md:p-2 md:w-10 md:h-10 bg-gray-700 hover:bg-orange-500' src='https://img.icons8.com/ios-filled/50/FFFFFF/instagram.png' alt='instagram-logo' />
                    </a>
                    <a href='/'>
                        <img className='w-8 h-8 object-cover md:m-1 md:p-2 md:w-10 md:h-10 bg-gray-700 hover:bg-orange-500' src='https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png' alt='linkedin-logo' />
                    </a>
                    <a href='/'>
                        <img className='w-8 h-8 object-cover md:m-1 md:p-2 md:w-10 md:h-10 bg-gray-700 hover:bg-orange-500' src='https://img.icons8.com/ios-filled/50/FFFFFF/twitter.png' alt='twitter-logo' />
                    </a>
                    <a href='/'>
                        <img className='w-8 h-8 object-cover md:m-1 md:p-2 md:w-10 md:h-10 bg-gray-700 hover:bg-orange-500' src='https://img.icons8.com/ios-filled/50/FFFFFF/youtube-play.png' alt='youtube-logo' />
                    </a>
                </div>
            </div>
            
            <div className='flex flex-col mx-6 my-4 md:my-4 md:mx-16'>
                <h3 className='text-white font-inter text-sm mb-2 md:mb-4'>TOP 4 CATEGORY</h3>
                <div className='flex flex-col md:mt-4'>
                    <FooterBtn name='Development' link='' />
                    <FooterBtn name='Finance & Accounting' link='' />
                    <FooterBtn name='Design' link='' />
                    <FooterBtn name='Business' link='' />
                </div>
            </div>

            <div className='flex flex-col mx-6 my-4 md:my-4 md:mx-16'>
                <h3 className='text-white font-inter text-sm mb-2 md:mb-4'>QUICK LINKS</h3>
                <div className='flex flex-col md:mt-4'>
                    <FooterBtn name='About' link='' />
                    <FooterBtn name='Finance & Accounting' link='' />
                    <FooterBtn name='Contact' link='' />
                    <FooterBtn name='Career' link='' />
                </div>
            </div>

            <div className='flex flex-col mx-6 my-4 md:my-4 md:mx-16'>
                <h3 className='text-white font-inter text-sm mb-2 md:mb-4'>SUPPORT</h3>
                <div className='flex flex-col md:mt-4'>
                    <FooterBtn name='Help Center' link='' />
                    <FooterBtn name='FAQs' link='' />
                    <FooterBtn name='Terms & Condition' link='' />
                    <FooterBtn name='Privacy Policy' link='' />
                </div>
            </div>

            <div className='flex flex-col mx-4 my-4 md:my-4 md:mx-16'>
                <h3 className='text-white font-inter text-sm mb-2'>Download our app</h3>
                <div className='flex m-2 bg-gray-700 p-4 hover:bg-orange-500 w-48'>
                    <img className='w-12 h-12' src="https://img.icons8.com/ios-filled/50/FFFFFF/mac-os.png" alt="mac-os" />
                    <div className='flex flex-col mx-3 justify-center items-center'>
                        <p className='text-gray-300 text-xs '>Download now</p>
                        <p className='text-white font-inter text-sm'>App Store</p>
                    </div>
                </div>
                <div className='flex m-2 bg-gray-700 p-4 hover:bg-orange-500 w-48'>
                    <img className='w-12 h-12' src="https://img.icons8.com/ios-filled/50/FFFFFF/google-play.png" alt="google-play" />
                    <div className='flex flex-col mx-3 justify-center items-center'>
                        <p className='text-gray-300 text-xs'>Download now</p>
                        <p className='text-white font-inter text-sm'>Play Store</p>
                    </div>
                </div>
            </div>
            <hr />
        </div>
        <div className='flex flex-col lg:flex-row justify-between items-center bg-gray-800 w-full border-t-2 border-white'>
            <p className='text-white md:mx-64 p-4 text-center'>© 2021 Strom Product . All rights reserved</p>
            <div className='flex flex-col 2xl:flex-row justify-center items-center md:mx-64'>
                <a href=''>
                    <img className='w-12 h-12 object-cover md:m-1 md:mx-4 md:w-14 md:h-14' src={image} alt='logo' />
                </a>
                <a href=''>
                    <h2 className='text-orange-500 text-bold font-bold text-md md:text-xl'>E-Mentor</h2>
                </a>
            </div>
        </div>
    </>

  )
}

export default Footer