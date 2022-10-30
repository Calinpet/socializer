import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { topics } from '../utils/constants'

const Discover = () => {

  const router = useRouter();
  // extract the topic from the router by using object destructuring
  const { topic } = router.query;

  // create active topic style
  const activeTopicStyle = 'xl:border-2 hover:bg-primary xl:border-[#F51997] px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-[#F51997]';

  // create topic style
  const topicStyle = 'xl:border-2 hover:bg-primary xl:border-gray-300 px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-black';

  return (
    <div className='xl:border-b-2 xl:border-gray-200 pb-6'>
      <p className='text-gray-500 font-semibold m-3 mt-4 hidden xl:block'>
       Popular Topics
      </p>
      <div className='flex gap-3 flex-wrap'>
        {/* creating a dynamic block of code to point to  all topics */}
        {topics?.map((item) => (
          <Link href={`/?topic=${item.name}`} key={item.name}>
            {/* if topic is equal to item.nmae than render */}
            <div className={topic === item.name ? activeTopicStyle : topicStyle}>
              {/* render the icons */}
              <span className='font-bold text-2xl xl:text-md '>
                {item.icon}
              </span>
              {/* render topics name */}
              <span className={`font-medium text-md hidden xl:block capitalize`}>
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
    
  )
}

export default Discover