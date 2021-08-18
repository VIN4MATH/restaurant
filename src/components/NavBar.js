import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faHome, faList, faFolderPlus, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./Css components/navbar.css";

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <div className="nav-separation">
                <nav >
                {/* <Navbar bg="light" expand="lg"> */}


                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                    {/* <Navbar.Collapse id="basic-navbar-nav"> */}


                        <div className="nav-bar">
                            
                            <Navbar.Brand  className="logo-name" href="#home">Resto</Navbar.Brand>
                        

                            <div className="menus">

                            <Nav.Link href="#home"><Link to=""> <FontAwesomeIcon icon={faHome} /> Home </Link>   </Nav.Link>
                            <Nav.Link href="#link"><Link to="/list"><FontAwesomeIcon icon={faList} /> List </Link></Nav.Link>
                            <Nav.Link href="#link"><Link to="/create"><FontAwesomeIcon icon={faFolderPlus} /> Create </Link></Nav.Link>
                            <Nav.Link href="#link"><Link to="/search"> <FontAwesomeIcon icon={faSearch} /> Search </Link></Nav.Link>

                            {
                                localStorage.getItem('login') ?
                                    <Nav.Link href="#link"><Link to="/logout"> <FontAwesomeIcon icon={faUser} /> LogOut </Link></Nav.Link>
                                    :
                                    <Nav.Link href="#link"><Link to="/login"> <FontAwesomeIcon icon={faUser} /> LogIn </Link></Nav.Link>
                            }

                            {/* <Nav.Link href="#link"><Link to="/Update">Update</Link>  </Nav.Link> */}
                            </div>
                            

                        </div>
                    {/* </Navbar.Collapse> */}

                </nav>
            </div>
        )
    }
}
