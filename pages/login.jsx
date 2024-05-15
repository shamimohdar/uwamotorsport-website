import Head from 'next/head'
import React, { useState } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const PasswordPage = () => {
  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [count, setCount] = useState(0);

  const handlePasswordSubmit = () => {
    if (password === 'uwamrat2023') {
        setIsPasswordCorrect(true);
    } if (count >= 2) {
        alert('Too many incorrect attempts. Please try again later.')
    } else {
        alert('Incorrect password. Please try again.');
        setCount(count + 1);
    }
  };

  return (
    <>
        <Head>
        <title>UWAM | Wiki</title>
        </Head>
        <div id='content' className='pt-24 h-screen mx-auto flex justify-center items-center'>
        {isPasswordCorrect ? (
            <div>
            <h1>Welcome!</h1>
            <p>This page will navigate you to the UWA Motorsport Wiki, featuring information about the 2024 car.</p>
            {/* Add your remaining website content here */}
            </div>
        ) : (
            <div>
            <h1>Password Protected Page</h1>
            <p>Please enter the password to access the website:</p>
            <GoogleReCaptchaProvider reCaptchaKey="6LffDT4pAAAAAEG9HkVgwwHwTa83pCfZrN8qqOwo"> 
            <input
                className='text-black'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className='ml-4 bg-motorsports-yellow font-semibold text-black px-2' style={{"borderRadius": "4px"}} onClick={handlePasswordSubmit}>Submit</button>
            </GoogleReCaptchaProvider>
            </div>
        )}
        </div>
    </>
  );
};

export default PasswordPage;