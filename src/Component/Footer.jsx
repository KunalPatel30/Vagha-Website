import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Footer() {

    const [formData, setFormData] = useState({
        name: "",
        email: ""
    })
     
    const onchange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value});
    }

    const onsubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post(`http://localhost:3000/subscription`, formData);
        if (res.status == 201){
            toast.success('Subscription Successful!');
            setFormData({...formData, name: "", email:""});
        }
    }

  return (
    <>
        <footer className="footer-section">
            <div className="container relative">
                <div className="sofa-img">
                    <img src="./src/assets/images/footer-bg.png" alt="Image" className="img-fluid" />
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="subscription-form">
                            <h3 className="d-flex align-items-center">
                                <span className="me-1">
                                    <img src="../src/assets/images/envelope-outline.svg" alt="Image" className="img-fluid" />
                                </span>
                                <span>Subscribe to Newsletter</span>
                            </h3>
                            <form action="#" className="row g-3">
                                <div className="col-auto">
                                    <input type="text" name='name' onChange={onchange} value={formData.name} className="form-control" placeholder="Enter your name" />
                                </div>
                                <div className="col-auto">
                                    <input type="email" name='email' onChange={onchange} value={formData.email} className="form-control" placeholder="Enter your email" />
                                </div>
                                <div className="col-auto">
                                    <button className="btn btn-primary" onClick={onsubmit}>
                                        <span className="fa fa-paper-plane" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mb-5">
                    <div className="col-lg-4">
                        <div className="mb-4 footer-logo-wrap d-flex align-items-center">
                            <img src="./src/assets/images/Logo/footer-logo-1.png" alt="Logo" style={{ height: "80px" }} />
                            <a href="#" className="footer-logo mt-3">ShreeHari<span style={{ marginLeft: "28px" }}>Vagha Collection</span></a>
                        </div>
                        <p className="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>
                        <ul className="list-unstyled custom-social">
                            <li><a href="#"><span className="fa fa-brands fa-facebook-f" /></a></li>
                            <li><a href="#"><span className="fa fa-brands fa-twitter" /></a></li>
                            <li><a href="#"><span className="fa fa-brands fa-instagram" /></a></li>
                            <li><a href="#"><span className="fa fa-brands fa-linkedin" /></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-8">
                        <div className="row links-wrap">
                            <div className="col-6 col-sm-6 col-md-4">
                                <ul className="list-unstyled text-center">
                                    <li><Link to="/about">About us</Link></li>
                                    <li><Link to="/contact">Contact us</Link></li>
                                    <li><Link to="/product">Shop</Link></li>
                                    <li><Link to="/cart">Cart</Link></li>
                                </ul>
                            </div>
                            <div className="col-6 col-sm-6 col-md-4">
                                <ul className="list-unstyled text-center">
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">Knowledge base</a></li>
                                    <li><a href="#">Live chat</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-sm-6 col-md-4">
                                <ul className="list-unstyled text-center">
                                    <li><a href="#">Jobs</a></li>
                                    <li><a href="#">Our team</a></li>
                                    <li><a href="#">Leadership</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                            {/* <div className="col-6 col-sm-6 col-md-3">
                                <ul className="list-unstyled">
                                    <li><a href="#">Nordic Chair</a></li>
                                    <li><a href="#">Kruzo Aero</a></li>
                                    <li><a href="#">Ergonomic Chair</a></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="border-top copyright">
                    <div className="row pt-4">
                        <div className="col-lg-6">
                            <p className="mb-2 text-center text-lg-start">Copyright ©. All Rights Reserved. — Designed with love by <a href="https://untree.co">Untree.co</a> Distributed By <a hreff="https://themewagon.com">ThemeWagon</a>  
                            </p>
                        </div>
                        <div className="col-lg-6 text-center text-lg-end">
                            <ul className="list-unstyled d-inline-flex ms-auto">
                                <li className="me-4"><a href="#">Terms &amp; Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer