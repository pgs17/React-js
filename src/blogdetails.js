import { useHistory, useParams } from "react-router-dom";
import useFetch from "./usefetch";
const BlogDetails = () => {
    // wrapped the parameter we want 
    const {id} = useParams()
    // data : blogs is a variable  created while destructuring
    const {data:blogs,error,isloading}= useFetch('http://localhost:8000/Blogs/'+id);
    const history=useHistory()

    const Handleclick = () => {
fetch('http://localhost:8000/Blogs/'+id, {
    method:"Delete"
}).then(()=>{
    history.push("/")
})
    }
    return ( 
        <div className="blogdetails">
            {isloading && <div>loading....</div>}
            {error && <div>{error}</div>}
            {blogs &&(
                <article>
                    <h2>{blogs.id}</h2>
                    <p>written by {blogs.author}</p>
                    <div>{blogs.body}</div>
                    <button onClick={Handleclick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;
