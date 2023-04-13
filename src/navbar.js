import { Link } from "react-router-dom";
const NavBar = () => {
    return (  
        <div className="navbar">
            <h1> Football Blogs</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to ="/add">Create A New Blog</Link>
            </div>
        </div>
    );
}
 
export default NavBar;