import { Link } from "react-router-dom";

const BlogList = ({ blogs, title,}) => {
    // const blogs = props.blogs;
    // const title = props.title;
    // console.log(blogs);
  
    return (
      <div className="blog-list">
        <h2>{ title }</h2>
        {blogs.map(blog => (
          <div className="blogpreview" key={blog.id} >
            {/* link to js content used instead of hardcode  */}
            <Link to={`/blogs/${blog.id}`}>
             <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
            </Link>
            
          </div>
        ))}
      </div>
    );
  }
   
  export default BlogList;
//   handle delete is written neear the component and not here 