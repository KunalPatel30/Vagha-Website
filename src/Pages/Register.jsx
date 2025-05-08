import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Register() {

    const [formvalue, setFormvalue] = useState({
        userid: "",
        username: "",
        email: "",
        password: "",
        phone: "",
        status: ""
    });

    const redirect = useNavigate();

    const onchange = (e) => {
        setFormvalue({...formvalue, userid: new Date().getTime().toString(), status:"Unblock", [e.target.name]:e.target.value});
    }

    function validate() {
        var result = true;
        if(formvalue.username == "" || formvalue.username == null){
            result = false;
            toast.error('Username Field Required');
        }
        if(formvalue.email == "" || formvalue.email == null){
            result = false;
            toast.error('Email Field Required');
        }
        if(formvalue.password == "" || formvalue.password == null){
            result = false;
            toast.error('Password Field Required');
        }
        if(formvalue.phone == "" || formvalue.phone == null){
            result = false;
            toast.error('Phone Field Required');
        }
        return result;
    }

    const onsubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            // Check if email already exists
            const checkEmail = await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);
            
            if (checkEmail.data.length > 0) {
                toast.error("This email is already registered.");
                return;
            }

            // Proceed to register the user
            const res = await axios.post(`http://localhost:3000/user`, formvalue);
            if (res.status === 201) {
                toast.success('Register Successful');
                setFormvalue({ ...formvalue, username: "", email: "", password: "", phone: "" });
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
                <input type="text" name='username' value={formvalue.username} onChange={onchange} placeholder="Enter Your Username" />
                <input type="text" name='email' value={formvalue.email} onChange={onchange} placeholder="Enter Your Email" />
                <input type="password" name='password' value={formvalue.password} onChange={onchange} placeholder="Enter Your Password" />
                <input type="number" name='phone' value={formvalue.phone} onChange={onchange} placeholder="Enter Your Number" />
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