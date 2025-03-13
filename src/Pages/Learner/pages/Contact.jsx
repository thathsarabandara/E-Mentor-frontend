import React, { useState } from 'react'
import contact from '../../../assets/images/contact/contact.png'
import branchImage1 from '../../../assets/images/contact/Branches1.png'
import branchImage2 from '../../../assets/images/contact/Branches2.png'
import branchImage3 from '../../../assets/images/contact/Branches3.png'
import branchImage4 from '../../../assets/images/contact/Branches4.png'
import { AiOutlineMail } from 'react-icons/ai'
import LocationCard from '../../../Components/Learner/LocationCard/LocationCard'
import Input from '../../../Components/Learner/auth-input/Input'
import { IoSend } from 'react-icons/io5'
import { ImSpinner } from 'react-icons/im'

function Contact() {
  const [firstName , setFirstName] = useState("");
  const [firstNameError , setFirstNameError] = useState("");
  const [lastName , setLastName] = useState("");
  const [lastNameError , setLastNameError] = useState("");
  const [email , setEmail] = useState("");
  const [emailError , setEmailError] = useState("");
  const [subject , setSubject] = useState("");
  const [subjectError , setSubjectError] = useState("");
  const [Message , setMessage] = useState("");
  const [MessageError , setMessageError] = useState("");
  const [error , setError] = useState("");
  const [sending , setSending] = useState(false);

  const handleFirstName = () =>{

  }

  const handleLastName = () =>{
    
  }

  const handleEmail = () =>{
    
  }

  const handleSubject = () =>{
    
  }

  const handleMessage = () =>{
    
  }

  const handleFormError = () =>{
    
  }
  const handleSubmit = () =>{
    setSending(true);
  }

  const branchLocations = [
    {
      branchImage: `${branchImage1}`, 
      type: 'Head Office',
      city: 'Los Angeles, California',
      address: '1702 Olympic Boulevard Santa Monica, CA 90404',
    },
    {
      branchImage: `${branchImage2}`, 
      type: 'Sales Office',
      city: 'Tokyo, Japan',
      address: '901 N Pitt Str., Suite 170 Tokyo, VA 22314, Japan',
    },
    {
      branchImage: `${branchImage3}`,
      type: 'Support Center',
      city: 'Moscow, Russia',
      address: 'Anjeliersstraat 470H, 1015 NL Moscow, Russia',
    },
    {
      branchImage: `${branchImage4}`,
      type: 'Customer Service',
      city: 'Mumbai, India',
      address: '36 East 20th St, 6th Floor Mumbai, India',
    },
  ];
  return (
    <>
      <div className='flex flex-col justify-center items-center bg-gray-200 py-3'>
        <div className='py-4'>
          <p className='font-inter font-bold text-xl'>
            Contact
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <a className='font-inter text-xs text-gray-600 hover:text-black mx-2' href='/' >
            Home
          </a>
          <p className='font-inter font-bold mx-2'>
            /
          </p>
          <a className='font-inter text-xs text-gray-600 hover:text-black mx-2' href='/contact'>
            contact
          </a>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col md:flex-row justify-center items-center w-8/12 mt-6'>
          <div className='flex flex-col justify-center items-center md:items-start md:w-6/12'>
            <p className='font-inter md:text-xl lg:text-2xl xl:text-3xl font-bold mb-4'>
              Connect with us
            </p>
            <p className='font-inter text-sm w-full text-center md:text-left md:w-11/12 lg:w-9/12 xl:w-7/12 text-gray-700 mb-4'>
              Want to chat? We’d love to hear from you! Get in 
              touch with our Customer Success Team to inquire 
              about speaking events, advertising rates, or just say hello.
            </p>
            <a href='/' className='flex justify-center items-center bg-orange-500 text-white px-6 py-2 lg:py-3 hover:border-2 border-orange-500 hover:bg-white hover:text-orange-500'>
              <AiOutlineMail className='mr-2'/>
              Copy Email
            </a>
          </div>
          <div className='w-9/12 md:w-4/12'>
            <img src={contact} alt='' className='' />
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center my-16'>
        <div className='flex flex-col justify-center items-center w-8/12'>
          <div className='flex flex-col justify-center items-center'>
            <p className='font-inter font-bold text-4xl text-center mb-3'>
              Our branches all over the world.
            </p>
            <p className='font-inter text-sm text-center text-gray-700 md:w-7/12'>
               Phasellus sed quam eu eros faucibus cursus. 
               Quisque mauris urna, imperdiet id leo quis, luctus auctor nisi. 
            </p>
          </div>
          <div className='grid lg:grid-cols-2 xl:grid-cols-4 gap-6 my-2 mt-7'>
            {branchLocations.map((location, index) => (
              <LocationCard key={index} location={location} />
            ))}
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center bg-gray-50 py-12'>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-center items-center md:w-11/12'>
            <p className='font-inter font-bold text-center text-3xl mb-5'>
              Contact Us
            </p>
            <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start w-11/12 md:w-11/12 px-10 lg:mr-8'>
              <div className='flex flex-col justify-center items-center md:items-start md:w-6/12 md:mr-12'>
                <p className='font-inter text-sm lg:text-lg w-11/12 mb-6'>
                  Will you be in Los Angeles or any other branches any time soon? 
                  Stop by the office! We'd love to meet.
                </p>
                <div className='flex flex-col justify-center items-center md:items-start'>
                  <div className='flex flex-col lg:flex-row justify-start items-center md:items-start py-6'>
                    <p className='font-inter text-sm text-orange-500 mr-32'>
                      Address
                    </p>
                    <p className='font-inter text-sm w-6/12'>
                      1702 Olympic Boulevard
                      Santa Monica, CA 90404
                    </p>
                  </div>
                  <hr className='h-2 w-64 md:w-96'/>
                  <div className='flex flex-col lg:flex-row justify-start items-start py-6'>
                    <p className='font-inter text-sm text-orange-500 mr-20'>
                      Phone Number
                    </p>
                    <div className='flex flex-col justify-start items-start'>
                        <p className='font-inter text-sm mb-1'>
                          (480) 555-0103
                        </p>
                        <p className='font-inter text-sm'>
                          (219) 555-0114
                        </p>
                    </div>
                  </div>
                  <hr className='h-2 w-64 md:w-96'/>
                  <div className='flex flex-col lg:flex-row justify-start items-start py-6'>
                    <p className='font-inter text-sm text-orange-500 mr-20'>
                      Email address
                    </p>
                    <div className='flex flex-col justify-start items-start'>
                      <p className='font-inter text-sm mb-1'>
                        help.eduguard@gmail.com
                      </p>
                      <p className='font-inter text-sm mb-1'>
                        career.eduguard@gamil.com
                      </p>
                    </div>
                  </div>
                  <hr className='h-2 w-64 md:w-96'/>
                </div>
              </div>
              <div className='flex flex-col justify-center items-center bg-white rounded-xl md:w-6/12'>
                <div className='flex flex-col justify-start items-center xl:items-start py-8 '>
                  <p className='font-inter text-lg mb-1'>
                    Get In touch
                  </p>
                  <p className='font-inter text-sm text-gray-700 mb-1 px-4'>
                    Feel free contact with us, we love to make new partners & friends
                  </p>
                  <from className='flex flex-col justify-center items-center py-2 mt-4' onSubmit={handleSubmit}>
                    <Input
                        label="First Name"
                        type="text"
                        value={firstName}
                        error={firstNameError}
                        onChange={handleFirstName}
                        placeholder="First Name...."
                    />
                    <Input
                        label="Last Name"
                        type="text"
                        value={lastName}
                        error={lastNameError}
                        onChange={handleLastName}
                        placeholder="Last Name...."
                    />
                    <Input
                        label="Email"
                        type="text"
                        value={email}
                        error={emailError}
                        onChange={handleEmail}
                        placeholder="Email...."
                    /> 
                    <Input
                        label="Subject"
                        type="text"
                        value={subject}
                        error={subjectError}
                        onChange={handleSubject}
                        placeholder="Subject ...."
                    />
                    <Input
                        label="Message"
                        type="text"
                        value={Message}
                        error={MessageError}
                        onChange={handleMessage}
                        placeholder="Message...."
                    /> 
                    <button 
                      type='submit' 
                      className='bg-orange-500 text-white font-inter text-sm py-3 px-5 hover:bg-white hover:text-orange-500 hover:border-2 border-orange-500' 
                      disabled={sending}
                    >
                        {sending? (
                          <p className='flex justify-center items-center'>
                            Sending Message
                            <ImSpinner className='ml-2'/>
                          </p>
                        ):(
                          <p className='flex justify-center items-center'>
                            Send Message 
                            <IoSend className='ml-2'/>
                          </p>
                        )}
                    </button>
                  </from>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact