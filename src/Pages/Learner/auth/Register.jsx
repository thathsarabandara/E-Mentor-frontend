import React, { useState } from 'react'
import Input from '../../../Components/Learner/auth-input/Input'
import image from '../../../assets/images/logo.png';
import register from '../../../assets/images/register.png';
import OAuthBtn from '../../../Components/Learner/O-Auth-Btn/OAuthBtn';

function Register() {
    const[username , setUserName] = useState('');
    const[email , setEmail] = useState('');
    const[password , setPassword] = useState('');
    const[confirmPassword , setConfirmPassword] = useState('');
    const[error , setError] = useState('');
    const[usernameError, setUsernameError] = useState('');
    const[emailError , setEmailError] = useState('');
    const[passwordError , setPasswordError] = useState('');
    const[confirmPasswordError , setConfirmPasswordError] = useState('');
    const[isChecked, setIsChecked] = useState(false);
    const[checkedError, setCheckedError] = useState(false);

    const handleUsernameChange = (e) => {
        const value = e.target.value;
        setUserName(value);
    
        if(!value){
            setUsernameError('Field is required');
        } else if (!validateUserName(value)) {
            setUsernameError('Username must contain at least 8 characters!');
        } else {
            setUsernameError('');
        }
    };
    
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
    
    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
    
        if (!value) {
            setConfirmPasswordError('Confirm password is required');
        } else if (password !== value) {
            setConfirmPasswordError('Confirmed Password Not matching');
        } else {
            setConfirmPasswordError('');
        }
        
    };
    
    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
        if (e.target.checked) {
            setCheckedError("");
        } else {
            setCheckedError("You must agree to the terms and conditions");
        }
    };

    const validateUserName = (username) => {
        const usernameRegex = /^[A-Za-z\d]{8,}$/;
        return usernameRegex.test(username);
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
        setUsernameError('');
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');
    
        if(!username || !password || !email){
            setError('All Fields are Required!');
        }else if(!validateUserName(username)) {
            setUsernameError('Username must contain at least 8 characters!');
        }else if(!validateEmail(email)) {
            setEmailError('Please enter a valid email address');
        }else if(!validatePassword(password)) {
            setPasswordError('Password must be at least 8 characters, contain at least one uppercase letter, one symbol, and one number');
        }else if(password !== confirmPassword){
            setConfirmPasswordError('Confirmed Password Not matching');
        }else if (!isChecked) {
            setCheckedError("You must agree to the terms and conditions");
        }else {
            setError('');
            setUsernameError('');
            setEmailError('');
            setPasswordError('');
            setConfirmPasswordError('');
            setCheckedError('');
            setUserName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');

            alert('submitted');
        }
    };
    

  return (
    <div className='flex justify-center items-center min-h-screen'>
        <div className='flex flex-col xl:flex-row justify-center items-center border-2'>
            <img className='hidden md:block w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px] rounded-lg ' src={register} alt='login' />
            <div className='flex flex-col justify-center items-center mx-8'>
                <div className='flex flex-col justify-center items-center'>
                  <div className='flex justify-center items-center drop-shadow-lg'>
                        <a href=''>
                            <img className='w-12 h-12 object-cover md:m-1 md:mx-4 md:w-20 md:h-20' src={image} alt='logo' />
                        </a>
                        <a href=''>
                            <h2 className='text-orange-500 text-bold font-bold text-md md:text-xl'>E-Mentor</h2>
                        </a>
                    </div>
                    <h1 className='text-inter font-bold text-lg md:text-2xl text-center mb-4' >Create Your E-Mentor<br /> Learning Account</h1>
                </div>
                {error && <p className='text-red-500  text-xs text-center mb-4'>{error}</p>}
                <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
                    <Input
                        label="Username"
                        type="text"
                        value={username}
                        error={usernameError}
                        onChange={handleUsernameChange}
                        placeholder="Enter your Username....."
                    />
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
                    <Input
                        label="Confirm Password"
                        type="Password"
                        value={confirmPassword}
                        error={confirmPasswordError}
                        onChange={handleConfirmPasswordChange}
                        placeholder="Enter your Confirm Password...."
                    />
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                        />
                        <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
                            I agree to the <a href="/" className="text-orange-500 hover:underline">Terms & Conditions</a>
                        </label>
                    </div>
                    {checkedError && <p className="text-red-500 text-xs mb-4">{checkedError}</p>}
                    <button
                        type='submit'
                        className='lg:w-96 bg-orange-500 text-white rounded-sm p-2 text-sm md:text-lg font-bold hover:bg-white hover:text-orange-500 hover:border border-orange-500 transition ease-in-out'
                    >
                        Register ➜
                    </button>
                </form>
                <div className='flex flex-col justify-center item-center' >
                  <div className='flex justify-center items-center m-2' >
                    <div className='h-0.5 w-24 bg-gray-300' ></div>
                    <p className='font-bold mx-3 text-gray-500 text-center text-sx md:text-sm'>SIGN IN WITH</p>
                    <div className='h-0.5 w-24 bg-gray-300' ></div>
                  </div>
                  <div className='flex flex-col md:flex-row justify-center items-center gap-y-3 md:gap-x-2 my-4' >
                      <OAuthBtn src='https://img.icons8.com/ios-filled/50/google-logo.png' label=' Google ' onclick={handleGoogleAuth} />
                      <OAuthBtn src='https://img.icons8.com/ios-filled/50/facebook-f.png' label='Facebook' onclick={handleFacebookAuth} />
                      <OAuthBtn src='https://img.icons8.com/ios-filled/50/mac-os.png' label=' Apple' onclick={handleAppleAuth} />
                  </div>
                  <p className='text-gray-500 text-sm mb-4'>Already Registerd ? <a href='/login' className='text-blue-500 underline hover:text-orange-500'>Login</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register