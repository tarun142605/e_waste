// import myimage from '../images/image1.jpg';
import React, { useState } from 'react';

function RegForm() {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        mobile: '',
        password: '',
        repeatPassword: '',
        address: ''
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
      if (this.readyState === 4 && this.status === 200) {
        let data = JSON.parse(this.responseText);
        console.log(data);
      }
    };
    }
    

  return (
    <>
    <div className="wrapper">
        <div className="form-left">
            <h2 className="text-uppercase">E-Waste Protal</h2>
            <img className="img-fluid" id='main-image' src={process.env.PUBLIC_URL + '/im1.jpg'} alt="" />
            <p className='mt-3'>
            Discover the sustainable solution to electronic waste with our platform, empowering individuals and businesses to responsibly recycle, repurpose, and rethink their electronic devices. Join us in safeguarding the environment and promoting a circular economy by properly managing e-waste.
            </p>
            <div className="form-field">
                <input type="submit" className="account" value="Have an Account?" />
            </div>
        </div>
        <form className="form-right" onSubmit={handleSubmit}>
            <h2 className="text-uppercase">Registration form</h2>
            <div className="row">
                <div className="col-sm-6 mb-3">
                    <label>First Name</label>
                    <input type="text" name="fname" id="first_name" value={formData.fname} onChange={handleChange} className="input-field" />
                </div>
                <div className="col-sm-6 mb-3">
                    <label>Last Name</label>
                    <input type="text" name="lname" id="last_name" value={formData.lname} onChange={handleChange} className="input-field" />
                </div>
            </div>
            <div className="mb-3">
                <label>Email</label>
                <input type="email" className="input-field" value={formData.email} onChange={handleChange} name="email"  />
            </div>
            <div className="mb-3">
                <label>Mobile</label>
                <input type="number" className="input-field" value={formData.mobile} onChange={handleChange} name="mobile"  />
            </div>
            <div className="mb-3">
                <label>Address</label>
                <input type="text" className="input-field" value={formData.address} onChange={handleChange} name="address"  />
            </div>

            <div className="row">
                <div className="col-sm-6 mb-3">
                    <label>City</label>
                    <input type="text" name="city" id="pwd" value={formData.city} onChange={handleChange} className="input-field" />
                </div>
                <div className="col-sm-6 mb-3">
                    <label>Pin Code</label>
                    <input type="number" name="pinCode" id="cpwd" value={formData.pinCode} onChange={handleChange} className="input-field" />
                </div>
            </div>
            
            <div className="row">
                <div className="col-sm-6 mb-3">
                    <label>Password</label>
                    <input type="password" name="password" id="pwd" value={formData.password} onChange={handleChange} className="input-field" />
                </div>
                <div className="col-sm-6 mb-3">
                    <label>Current Password</label>
                    <input type="password" name="repeatPassword" id="cpwd" value={formData.repeatPassword} onChange={handleChange} className="input-field" />
                </div>
            </div>
            <div className="mb-3">
                <label className="option">I agree to the <a href="/">Terms and Conditions</a>
                    <input type="checkbox" checked />
                    <span className="checkmark"></span>
                </label>
            </div>
            <div className="form-field">
                <input type="submit" value="Register" className="register" name="register" />
            </div>
        </form>
    </div></>
  );
}

export default RegForm;