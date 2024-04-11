import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import Axios from 'axios';
import RegForm from './RegForm';

function LoginFrom() {

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        mobile: '',
        password: '',
        repeatpassword: ''
      });

    const handleChange = (e) => { 
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    let conn = new XMLHttpRequest();
    conn.open("POST", "http://localhost:8000/api/register", true);
    conn.setRequestHeader("Content-Type", "application/json");
    conn.send(JSON.stringify(formData));
    conn.onreadystatechange = function() {
      if (this.readystate === 4 && this.status === 200) {
        let data = JSON.parse(this.responseText);
        console.log(data);
      }
    };
    }

    const handleLogout = () => {
    }

  return (
    <div className="wrapper w-25">
        <form className="form-right" onSubmit={handleSubmit}>
            <h2 className="text-uppercase">Login</h2>
            <div className="row">
            <div className="col-sm-12 mb-3">
                <label>email</label>
                <input type="email" className="input-field" value={formData.email} onChange={handleChange} name="email"  />
            </div>
            </div>  
            <div className="row">
                <div className="col-sm-12 mb-3">
                    <label>password</label>
                    <input type="password" name="password" id="pwd" value={formData.password} onChange={handleChange} className="input-field" />
                </div>
            </div>
            <div className="mb-3">
                <label className="option">Kepp me logged in
                    <input type="checkbox" checked />
                    <span className="checkmark"></span>
                </label>
            </div>
            <div className="form-field">
                {handleLogout}
            </div>
            <div className="form-field">
                <p>Don't have an account <Link to="/register">Register</Link></p>
            </div>
        </form>
    </div>
  );
}

export default LoginFrom;