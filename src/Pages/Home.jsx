import React from 'react';
import PageHeader from '../Component/PageHeader';
import ProductCard from '../Component/ProductCard';

function Home({ updateCartCount }) {
  return (
    <>
      {/* Start Hero Section */}
      <PageHeader heading="Holy Threads," 
                  heading2="Heavenly Elegance" 
                  image="./src/assets/images/hero-banner.png"
                  button1Text="Shop Now"
                  button1Link="/product"
                  button2Text="Explore"
                  button2Link="/about" />
      {/* End Hero Section */}

      {/* Start Product Section */}
      <div className="product-section">
          <div className="container">
              <h2 className="section-title text-center mb-5">Our Products</h2>
              <div className="row">
                  <ProductCard limit={4} updateCartCount={updateCartCount}/>
              </div>
          </div>
      </div>
      {/* End Product Section */}

      {/* Start Testimonial Slider */}
      <div className="testimonial-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto text-center">
              <h2 className="section-title">Testimonials</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="testimonial-slider-wrap text-center">
                <div id="testimonial-nav">
                  <span className="prev" data-controls="prev"><span className="fa fa-chevron-left" /></span>
                  <span className="next" data-controls="next"><span className="fa fa-chevron-right" /></span>
                </div>
                <div className="testimonial-slider">
                  <div className="item">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 mx-auto">
                        <div className="testimonial-block text-center">
                          <blockquote className="mb-5">
                            <p>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                          </blockquote>
                          <div className="author-info">
                            <div className="author-pic">
                              <img src="./src/assets/images/person-1.jpg" alt="Maria Jones" className="img-fluid" />
                            </div>
                            <h3 className="font-weight-bold">Maria Jones</h3>
                            <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                  {/* <div className="item">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 mx-auto">
                        <div className="testimonial-block text-center">
                          <blockquote className="mb-5">
                            <p>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                          </blockquote>
                          <div className="author-info">
                            <div className="author-pic">
                              <img src="./src/assets/images/person-1.jpg" alt="Maria Jones" className="img-fluid" />
                            </div>
                            <h3 className="font-weight-bold">Maria Jones</h3>
                            <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                  <div className="item">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 mx-auto">
                        <div className="testimonial-block text-center">
                          <blockquote className="mb-5">
                            <p>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                          </blockquote>
                          <div className="author-info">
                            <div className="author-pic">
                              <img src="./src/assets/images/person-1.jpg" alt="Maria Jones" className="img-fluid" />
                            </div>
                            <h3 className="font-weight-bold">Maria Jones</h3>
                            <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Testimonial Slider */}
      
    </>
  )
}

export default Home