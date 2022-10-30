import type { NextPage } from "next"
import axios from "axios";


const Home: NextPage = () => {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

// fetching data 
// used the docs https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
// If you export a function called getServerSideProps (Server-Side Rendering) from a page, Next.js will pre-render this page on each request using the data returned by getServerSideProps.
// only runs on server-side and never runs on the browser.
// You should use getServerSideProps only if you need to render a page whose data must be fetched at request time. 

export const getServerSideProps = async () => {
   // will be passed to the page component as props
  //  making a get request to our own backend
   const response = await axios.get();
  }

export default Home