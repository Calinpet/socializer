import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import GoogleLogin from 'react-google-login';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import Discover from './Discover';
import SuggestedAccounts from './SuggestedAccounts';
import Footer from './Footer';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  
  const userProfile = false;

  const normalLink ='flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#3B94CB] rounded'

  return (
    <div>
      <div
        className='block xl:hidden m-2 ml-4 mt-3 text-xl'
        // create a callback functioan that contains the previous state
        onClick={() => setShowSidebar((prev) => !prev)}
      >
         {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu /> } 
      </div>
      {showSidebar && (
        <div className='xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3'>
          <div className='xl:border-b-2 border-gray-200 xl:pb-4'>
            <Link href="/">
              <div className={normalLink}>
                <p className='text-2xl'>
                <AiFillHome />
                </p>
                <span className='capitalize text-xl hidden xl:block'>
                  For You
                </span>
              </div>
            </Link>
          </div>
          {/* create a new state for the user not logging in  */}
          {!userProfile && (
            <div className='px-2 py-4 hidden xl:block'>
              <p className='text-gray-400'>Log in to like and comment on videos!</p>
              <div className='pr-4'>
                {/* used the docs https://www.npmjs.com/package/react-google-login  */}
                <GoogleLogin 
                  clientId=''
                  // used docs to render the button
                  render={(renderProps) => (
                    <button
                    className='cursor-pointer bg-white text-lg text-[#6CB9D8] border-[1px] border-[#6CB9D8] font-semibold px-6 py-3 rounded-md outline-none w-full mt-3 hover:text-white hover:bg-[#c26cd8]' 
                    onClick={renderProps.onClick} 
                    disabled={renderProps.disabled}
                    >
                      Log In
                    </button>
                  )}
                  buttonText="Login"
                  onSuccess={() => {}}
                  onFailure={() => {}}
                  cookiePolicy='single_host_origin'
                />
              </div>
            </div>
          )}

          <Discover />
          <SuggestedAccounts />
          <Footer />
        </div>
      )}
    </div>
  )
}

export default Sidebar