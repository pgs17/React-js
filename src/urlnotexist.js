import { Link } from "react-router-dom";

const error404 = () => {
    return ( 
        <div className="notfound">
            <h2>Sorry</h2>
            <p>The webpage you are looking for doesnt exist</p>
            <Link to='/'>Back To HOMEPAGE</Link>
        </div>
     );
}
 
export default error404;