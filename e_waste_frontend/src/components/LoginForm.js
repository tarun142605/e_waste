import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Axios from 'axios';
import RegForm from './RegForm';

function LoginFrom() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleChange = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        try{
            const response = await Axios.post('http://localhost:3000/customer/loginCustomer', {
                email, 
                password,
        });

        if(response.status === 200){
            localStorage.setItem('token', response.data.token);
            window.location.href = '/';
        }else{
            alert('Login failed.....Please try again');
        }
        }catch(error){
            console.log(error);
        }
    };

    const handleLogout = () => {
        if(localStorage.getItem('token')){
            return(<button type="submit" value="Login" className="register" name="login">Logout</button>);
        }else{
            return(<button type="submit" value="Logout" className="register" name="logout">Login</button>);
        }
    }

  return (
    <div className="wrapper w-25">
        <form className="form-right" onSubmit={handleChange}>
            <h2 className="text-uppercase">Login</h2>
            <div className="row">
            <div className="col-sm-12 mb-3">
                <label>email</label>
                <input type="email" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} name="email"  />
            </div>
            </div>  
            <div className="row">
                <div className="col-sm-12 mb-3">
                    <label>password</label>
                    <input type="password" name="password" id="pwd" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" />
                </div>
            </div>
            <div className="mb-3">
                <label className="option">Kepp me logged in
                    <input type="checkbox" checked />
                    <span className="checkmark"></span>
                </label>
            </div>
            <div className="form-field">
                {handleLogout()}
            </div>
            <div className="form-field">
                <p>Don't have an account <Link to="/register">Register</Link></p>
            </div>
        </form>
    </div>
  );
}

export default LoginFrom;