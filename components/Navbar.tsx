import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { GoogleLogin, googleLogout } from '@react-oauth/google';

import useAuthStore from '../store/authStore';
import { IUser } from '../types';
import { createOrGetUser } from '../utils';
import Logo from '../utils/socializer-logo.png'



const Navbar = () => {
  const [user, setUser] = useState<IUser | null>();
  const { userProfile, addUser, removeUser } = useAuthStore();

  return (
    <div className='w-full flex justify-between items-center border-b-2 border-gray-400 py-2 px-4'>
      <Link href="/">
        <div className='w-[100px] md:w-[130px]'>
          <Image className='cursor-pointer'
            src={Logo}
            alt="Socializer"
            layout='responsive'
          />
        </div>
      </Link>

      <div>SEARCH</div>

      <div>
        {userProfile ? (
          <div className='flex gap-5 md:gap-10'>
            <Link href='/upload'>
              <button className='border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2'>
                {/* add a icon to the button */}
                <IoMdAdd className='text-xl' />{' '}
                <span className='hidden md:block'>Upload </span>
              </button>
            </Link>
            {userProfile.image && (
              <Link href="/">
                <>
                  <Image
                    width={40}
                    height={40}
                    className="rounded-full cursor-pointer"
                    src={userProfile.image}
                    alt="profile photo"
                  />
                </>
              </Link>
            )}
            <button
              type='button'
              className=' border-2 p-2 rounded-full cursor-pointer outline-none shadow-md'
              onClick={() => {
                googleLogout();
                removeUser();
              }}
            >
              <AiOutlineLogout color='red' fontSize={21} />
            </button>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => createOrGetUser(response, addUser)}
            onError={() => console.log('Error')}
          />
        )}
      </div>
    </div>
  )
}

export default Navbar