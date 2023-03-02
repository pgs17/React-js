import { useState,useEffect, } from "react";
import Bloglist from "./bloglist";
import useFetch from "./usefetch"
const Home = () => {
  const {data,isLoading,error} = useFetch('http://localhost:8000/Blogs')
  return (
    <div className="home">
      {/* javascript within return  */}
      {error && <div> couldnt fetch data </div>}
      {isLoading && <div> loading.....</div>}
      { data && <Bloglist blogs = {data} title="All Blogs" /> }
     </div> );
}
 
export default Home;

// use effect runs everytime data is refreshed to avoid it we use dependencies within array []