import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import NavBar from './navbar'
import Home from './home';
import Create from './create'
import BlogDetails from './blogdetails';
import Urlnotexist from './urlnotexist';

function App() {
  
  return (
    <Router>
    <div className="App">
   <NavBar />
      <div className="content">
        <Switch>
          <Route exact path="/">
           <Home />
           </Route>
           
           <Route path="/add">
            <Create />  
          </Route>

          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
           <Route path="*">
            <Urlnotexist />
           </Route>
        </Switch>
       
      </div>
    </div>
    </Router>
  );
}

export default App;
