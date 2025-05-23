import React, { useState } from 'react'
import PageHeader from '../Component/PageHeader'
import { toast } from 'react-toastify';
import axios from 'axios';

function Contact() {

    const [formData, setFormData] = useState({
        id:"",
        fname: "",
        lname: "",
        email: "",
        message: "",
    });

    const onchange = (e) => {
        setFormData({...formData, id: new Date().getTime().toString(), [e.target.name]:e.target.value});
    }

    function validate () {
        var result =  true;
        if(formData.fname == "" || formData.fname == null){
            result = false;
            toast.error('First Name field required');
        }
        if(formData.lname == "" || formData.lname == null){
            result = false;
            toast.error('Last Name field required');
        }
        if(formData.email == "" || formData.email == null){
            result = false;
            toast.error('Email field required');
        }
        if(formData.message == "" || formData.message == null){
            result = false;
            toast.error('Message field required');
        }
        return result
    }

    const onsubmit = async (e) => {
        e.preventDefault();
        if(validate()){
            const res = await axios.post(`http://localhost:3000/contact`, formData);
            if(res.status == 201){
                toast.success('Contact Succesfull');
                setFormData({...formData, fname:"", lname:"", email:"", message:""});
            }
        }
    }

  return (
    <>
        {/* Start Hero Section */}
        <PageHeader heading="Contact Us" 
                    image="./src/assets/images/contact-bg.png"
                    button1Text="Shop Now"
                    button1Link="/product"
                    button2Text="Explore"
                    button2Link="/about" />
        {/* End Hero Section */}

        {/* Start Contact Form */}
        <div className="contact-section">
            <div className="container">
                <div className="block">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-8 pb-4">
                            <div className="row mb-5">
                                <div className="col-lg-4">
                                    <div className="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay={0}>
                                        <div className="service-icon color-1 mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                            </svg>
                                        </div> 
                                        <div className="service-contents">
                                            <p>43 Raymouth Rd. Baltemoer, London 3910</p>
                                        </div> 
                                    </div> 
                                </div>
                                <div className="col-lg-4">
                                    <div className="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay={0}>
                                        <div className="service-icon color-1 mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                                            </svg>
                                        </div> 
                                        <div className="service-contents">
                                            <p>shreehari@gmail.com</p>
                                        </div> 
                                    </div> 
                                </div>
                                <div className="col-lg-4">
                                    <div className="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay={0}>
                                        <div className="service-icon color-1 mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                            </svg>
                                        </div> 
                                        <div className="service-contents">
                                            <p>+91 7041805700</p>
                                        </div> 
                                    </div> 
                                </div>
                            </div>
                            <form>
                                <div className="row">
                                    <div className="col-6 pb-3">
                                        <div className="form-group">
                                            <label className="text-black" htmlFor="fname">First name</label>
                                            <input type="text" className="form-control" id="fname" name="fname" value={formData.fname} onChange={onchange} />
                                        </div>
                                    </div>
                                    <div className="col-6 pb-3">
                                        <div className="form-group">
                                            <label className="text-black" htmlFor="lname">Last name</label>
                                            <input type="text" className="form-control" id="lname" name="lname" value={formData.lname} onChange={onchange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group pb-3">
                                    <label className="text-black" htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={onchange} />
                                </div>
                                <div className="form-group mb-5">
                                    <label className="text-black" htmlFor="message">Message</label>
                                    <textarea className="form-control" id="message" name="message" value={formData.message} onChange={onchange} cols={30} rows={5} />
                                </div>
                                <button type="submit" className="btn btn-primary-hover-outline" onClick={onsubmit}>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Contact Form */}
    </>
  )
}

export default Contact