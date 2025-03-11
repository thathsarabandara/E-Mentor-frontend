import React, { useState } from 'react'
import Input from '../../../Components/Learner/auth-input/Input'
import image from '../../../assets/images/logo.png';
import login from '../../../assets/images/login.png';
import OAuthBtn from '../../../Components/Learner/O-Auth-Btn/OAuthBtn';

function Login() {
    const[email , setEmail] = useState('');
    const[password , setPassword] = useState('');
    const[error , setError] = useState('');
    const[emailError , setEmailError] = useState('');
    const[passwordError , setPasswordError] = useState('');
    
    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
    
        if(!value){
            setEmailError('Field is required');
        } else if (!validateEmail(value)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };
    
    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
    
        if (!value) {
            setPasswordError('Password is required');
        } else if (!validatePassword(value)) {
            setPasswordError('At least 8 charac., one upp. letter, one symbol,one number');
        } else {
            setPasswordError('');
        }
    };
    
    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };
    
    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleGoogleAuth = () => {
    };

    const handleFacebookAuth = () => {
    };

    const handleAppleAuth = () => {
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        setError('');
        setEmailError('');
        setPasswordError('');
    
        if(!password || !email){
            setError('All Fields are Required!');
        }else if(!validateEmail(email)) {
            setEmailError('Please enter a valid email address');
        }else if(!validatePassword(password)) {
            setPasswordError('Password must be at least 8 characters, contain at least one uppercase letter, one symbol, and one number');
        }else {
            setError('');
            setEmailError('');
            setPasswordError('');
            setEmail('');
            setPassword('');

            alert('submitted');
        }
    };
    

  return (
    <div className='flex justify-center items-center p-16 border-2'>
        <div className='flex flex-col lg:flex-row justify-center items-center border-2 lg:m-4 rounded-xl sm:w-96 lg:w-8/12'>
            <img className='hidden 2xl:block lg:w-[550px] lg:h-[550px] rounded-lg lg:mr-10 xl:mr-16' src={login} alt='login' />
            <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center drop-shadow-lg'>
                        <a href=''>
                            <img className='w-12 h-12 object-cover md:m-1 md:mx-4 md:w-20 md:h-20' src={image} alt='logo' />
                        </a>
                        <a href=''>
                            <h2 className='text-orange-500 text-bold font-bold text-md md:text-xl'>E-Mentor</h2>
                        </a>
                    </div>
                    <h1 className='text-inter font-bold text-lg md:text-2xl text-center mb-4' >Login to Your E-Mentor Account<br />Continue Your Learning</h1>
                </div>
                {error && <p className='text-red-500  text-xs text-center mb-4'>{error}</p>}
                <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
                    <Input
                        label="Email"
                        type="email"
                        value={email}
                        error={emailError}
                        onChange={handleEmailChange}
                        placeholder="Enter your email....."
                    />
                    <Input
                        label="Passwrd"
                        type="Password"
                        value={password}
                        error={passwordError}
                        onChange={handlePasswordChange}
                        placeholder="Enter your Password....."
                    />
                    <div className="flex justify-start items-start mb-4">
                        <input
                            type="checkbox"
                            id="terms"
                            className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                        />
                        <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                            Remember me
                        </label>
                    </div>
                    <button
                        type='submit'
                        className='w-48 lg:w-96 bg-orange-500 text-white rounded-sm p-2 text-sm md:text-lg font-bold hover:bg-white hover:text-orange-500 hover:border border-orange-500 transition ease-in-out'
                    >
                        Login ➜
                    </button>
                    <p className='text-gray-500 text-sm m-2'>Forgot Password ? <a href='/resetpassword' className='text-blue-500 underline hover:text-orange-500'>Reset Password</a></p>
                </form>
                <div className='flex flex-col justify-center item-center' >
                  <div className='flex justify-center items-center m-2' >
                    <div className='h-0.5 w-24 bg-gray-300' ></div>
                    <p className='font-bold mx-3 text-gray-500 text-center text-sx md:text-sm'>SIGN UP WITH</p>
                    <div className='h-0.5 w-24 bg-gray-300' ></div>
                  </div>
                  <div className='flex flex-col md:flex-row justify-center items-center gap-y-3 md:gap-x-2 my-4' >
                      <OAuthBtn src='https://img.icons8.com/ios-filled/50/google-logo.png' label=' Google ' onclick={handleGoogleAuth} />
                      <OAuthBtn src='https://img.icons8.com/ios-filled/50/facebook-f.png' label='Facebook' onclick={handleFacebookAuth} />
                      <OAuthBtn src='https://img.icons8.com/ios-filled/50/mac-os.png' label=' Apple' onclick={handleAppleAuth} />
                  </div>
                  <p className='text-gray-500 text-sm mb-4'>Not Registerd ? <a href='/register' className='text-blue-500 underline hover:text-orange-500'>Register</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login