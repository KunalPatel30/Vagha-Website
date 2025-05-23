import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  useEffect(()=>{
    if(localStorage.getItem('userid'))
    {
        toast.warning('User already login')
        redirect('/');
    }
  },[]);

  const redirect = useNavigate();

  const onchange = (e) => {
    setFormData({ ...formData, [e.target.name]:e.target.value })
  }

  function validate(){
    var result = true;
    if(!formData.email){
      result = false;
      toast.error('Email Field Required');
    }
    if(!formData.password){
      result = false;
      toast.error('Password Field Required');
    }
    return result;
  }

  const onsubmit = async (e) => {
    e.preventDefault();
    if(validate()) {
      const res = await axios.get(`http://localhost:3000/user?email=${formData.email}`);
      if(res.data.length > 0){
        if(res.data[0].password == formData.password){
          if(res.data[0].status == "Unblock"){
            localStorage.setItem('userid', res.data[0].userid);
            localStorage.setItem('username', res.data[0].username);
            toast.success('Login Successful!');
            setFormData({...formData, email:"", password:""});
            return redirect('/');
          }
          else{
            toast.error('Login Failed: User is blocked')
            setFormData({...formData, email:"", password:""});
          }
        }
        else{
          toast.error('Login Failed: Incorrect password')
          setFormData({...formData, email:"", password:""});
        }
      }
      else{
        toast.error('Login Failed: Incorrect email')
        setFormData({...formData, email:"", password:""});
      }
    }
  }

  return (
    <>
      <div className="lr-main">
        <div className="lr-container">
          <div className="form-panel">
            <h3 className="title">Login</h3>
            <form className="login-form">
              <input type="text" name='email' value={formData.email} onChange={onchange} placeholder="Enter Your Email" />
              <input type="password" name='password' value={formData.password} onChange={onchange} placeholder="Enter Your Password" />
              <a href="#" className="forgot">Forgot password?</a>
              <button className="lr-btn" type="submit" onClick={onsubmit}>SIGN IN</button>
              <p className="signup">Don't have an account? <Link to="/register">Create Account</Link></p>
            </form>
          </div>
          <div className="image-panel">
            <div className="logo">ShreeHari Vagha Collection</div>
            <img src="./src/assets/images/hero-banner.png" alt="Lovebird illustration" className="illustration" />
            <h2>Jay Swaminarayan</h2>
            <p>Enter your personal details and start your journey with us.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;