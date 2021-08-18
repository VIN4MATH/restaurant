import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faHome, faList, faFolderPlus, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/Home';
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetails from './components/RestaurantDetails';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantsList from './components/RestaurantsList';
import RestaurantUpdate from './components/RestaurantUpdate';
import Login from './components/login';
import Logout from './components/Logout';
// import NavBar from './components/NavBar';
import ProtectRoute from './components/ProtectRoute';


function App() {
  return (
    <div className="App">

      <Router>
        {/* <NavBar/> */}
        
        {/* 
        {<ul>
         
          <li>    <Link to="/details">Details</Link>  </li>
        

        </ul> */}

        <ProtectRoute path="/list" component={RestaurantsList} />
        <ProtectRoute path="/create" component={RestaurantCreate} />
        <ProtectRoute path="/search" component={RestaurantSearch} />
        <ProtectRoute path="/details" component={RestaurantDetails} />
        <Route path="/logout" component={Logout} />
        <ProtectRoute path="/update/:id" render={props => (
          <RestaurantUpdate {...props} />
        )}
        />

        <Route path="/login" render={props => (
          <Login {...props} />
        )}
        />

        < ProtectRoute exact path = "/" component={Home} />


      </Router>


    </div>
  );
}

export default App;
