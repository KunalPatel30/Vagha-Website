import React from 'react';
import PageHeader from '../Component/PageHeader';

function About() {
  return (
    <>
        {/* Start Hero Section */}
        <PageHeader heading="About Us" image="./src/assets/images/about-bg-1.png"/>
        {/* End Hero Section */}

        <div className="why-choose-section">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <h2 className="title">Why Choose Us</h2>
                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                <div className="row my-5">
                  <div className="col-6 col-md-6">
                    <div className="feature">
                      <div className="icon">
                        <img src="./src/assets/images/truck.svg" alt="Image" className="imf-fluid" />
                      </div>
                      <h3>Fast &amp; Free Shipping</h3>
                      <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-6">
                    <div className="feature">
                      <div className="icon">
                        <img src="./src/assets/images/bag.svg" alt="Image" className="imf-fluid" />
                      </div>
                      <h3>Easy to Shop</h3>
                      <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-6">
                    <div className="feature">
                      <div className="icon">
                        <img src="./src/assets/images/support.svg" alt="Image" className="imf-fluid" />
                      </div>
                      <h3>24/7 Support</h3>
                      <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-6">
                    <div className="feature">
                      <div className="icon">
                        <img src="./src/assets/images/return.svg" alt="Image" className="imf-fluid" />
                      </div>
                      <h3>Hassle Free Returns</h3>
                      <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="img-wrap">
                  <img src="./src/assets/images/why-choose.png" alt="Image" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default About