import App from '../App';
import React, { useState } from 'react';
import RegForm  from '../components/RegForm';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LoginFrom from '../components/LoginForm';
import BlogList from '../components/BlogList';
import AboutUs from '../components/AboutUs';
import Home from '../components/Home';
import Careers from '../components/Careers';
import Dash from '../components/Dashboard';
//import { isLoggedIn } from '../components/LoginForm';

function Nav() {
  debugger;
   
  const [isLoggedIn,setLoggedin] = useState(localStorage.getItem("token") != null ? true : false);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setLoggedin(false);
  }

    return (
      <Router>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid mx-2">
    <Link to="/" className="navbar-brand"><img src={'/Images/logo.png'} style={{width:'250px'}}/></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item
           mx-2">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item
           mx-2">
            <Link to="/blogs" className="nav-link">Blogs</Link>
          </li>
          <li className="nav-item
           mx-2">
            <Link to="/careers" className="nav-link">Careers</Link>
          </li>
          <li className="nav-item
           mx-2">
            <Link to="/aboutus" className="nav-link">About us</Link>
          </li>
          <li className="nav-item
           mx-2">
            <Link to="/dash" className="nav-link">DashBoard</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div>
        { isLoggedIn ? (<button className="btn btn-outline-primary mx-1" onClick={handleLogout}>Logout</button>) : (<Link to="/login" className="btn btn-outline-primary mx-1">login</Link>)}
        </div>
      </div>
    </div>
  </nav>
  <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/aboutus" Component={AboutUs}></Route>
          <Route path="/careers" Component={Careers}></Route>
          <Route path="/blogs" Component={BlogList}></Route>
          <Route path="/login" Component={LoginFrom}></Route>
          <Route path="/register" Component={RegForm}></Route>
          <Route path="/dash" Component={Dash}></Route>
        </Routes>
  </Router>
    );
  }
  
  export default Nav;
  