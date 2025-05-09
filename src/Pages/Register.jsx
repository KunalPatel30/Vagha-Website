import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Register() {

    const [formData, setFormData] = useState({
        userid: "",
        username: "",
        email: "",
        password: "",
        phone: "",
        status: ""
    });

    const redirect = useNavigate();

    const onchange = (e) => {
        setFormData({...formData, userid: new Date().getTime().toString(), status:"Unblock", [e.target.name]:e.target.value});
    }

    function validate() {
        var result = true;
        if(formData.username == "" || formData.username == null){
            result = false;
            toast.error('Username Field Required');
        }
        if(formData.email == "" || formData.email == null){
            result = false;
            toast.error('Email Field Required');
        }
        if(formData.password == "" || formData.password == null){
            result = false;
            toast.error('Password Field Required');
        }
        if(formData.phone == "" || formData.phone == null){
            result = false;
            toast.error('Phone Field Required');
        }
        return result;
    }

    const onsubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            // Check if email already exists
            const checkEmail = await axios.get(`http://localhost:3000/user?email=${formData.email}`);
            
            if (checkEmail.data.length > 0) {
                toast.error("This email is already registered.");
                return;
            }

            // Proceed to register the user
            const res = await axios.post(`http://localhost:3000/user`, formData);
            if (res.status === 201) {
                toast.success('Register Successful');
                setFormData({ ...formData, username: "", email: "", password: "", phone: "" });
                redirect('/login');
            }
        }
    };
    

  return (
    <>
        <div className="lr-main">
            <div className="lr-container">
            <div className="image-panel">
                <div className="logo">ShreeHari Vagha Collection</div>
                <img src="./src/assets/images/register.png" alt="Lovebird illustration" className="illustration" />
                <h2>Jay Swaminarayan</h2>
                <p>To keep connected with us please login with your personal info.</p>
            </div>
            <div className="form-panel">
                <h3 className="title">Create Account</h3>
                <form className="login-form">
                <input type="text" name='username' value={formData.username} onChange={onchange} placeholder="Enter Your Username" />
                <input type="text" name='email' value={formData.email} onChange={onchange} placeholder="Enter Your Email" />
                <input type="password" name='password' value={formData.password} onChange={onchange} placeholder="Enter Your Password" />
                <input type="number" name='phone' value={formData.phone} onChange={onchange} placeholder="Enter Your Number" />
                <a href="#" className="forgot">Forgot password?</a>
                <button className="lr-btn" type="submit" onClick={onsubmit}>SIGN UP</button>
                <p className="signup">Already have an account? <Link to="/login">Sign In</Link></p>
                </form>
            </div>
            </div>
        </div>
    </>
  )
}

export default Register