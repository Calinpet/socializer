import type { NextPage } from "next"
import React from 'react';
import axios from "axios";
import { Video } from '../types';
import VideoCard from "../components/VideoCard";
import NoResults from "../components/NoResults";

interface IProps {
  videos: Video[];
}

const Home = ({ videos }: IProps) => {
  console.log(videos);

  return (
    <div className="flex flec-col gap-10 videos h-full">
      {videos.length ? (
        videos?.map((video: Video) => (
          <VideoCard post={video} key={video._id} />
        ))
      ) : (
        <NoResults text={'No Videos'} />
      )}
    </div>
  )
}

export default Home;


// fetching data 
// used the docs https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
// If you export a function called getServerSideProps (Server-Side Rendering) from a page, Next.js will pre-render this page on each request using the data returned by getServerSideProps.
// only runs on server-side and never runs on the browser.
// You should use getServerSideProps only if you need to render a page whose data must be fetched at request time. 

export const getServerSideProps = async () => {
   // will be passed to the page component as props
  //  making a get request to our own backend
   const { data } = await axios.get(`http://localhost:3000/api/post`);

   return {
    props: {
      videos: data
    }
   }
  }
