import React from 'react'

function PageHeader(props) {

    const { heading, heading2, image, button1Text, button1Link, button2Text, button2Link } = props;

  return (
    <>
        <div className="hero">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="intro-excerpt">
                            {/* <h5 style={{ lineHeight: 1.5 }}>Welcome to,<br/>ShreeHari Vagha Collection</h5> */}
                            <h1>{heading} <span className="d-block">{heading2}</span></h1>
                            <p className="mb-4">Get our designer vagha only in our online and offline stores!</p>
                            <p>
                                {button1Text && (
                                    <a href={button1Link} className="btn btn-secondary me-2">{button1Text}</a>
                                )}
                                {button2Text && (
                                    <a href={button2Link} className="btn btn-white-outline">{button2Text}</a>
                                )}
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="hero-img-wrap">
                            <img src={image} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PageHeader;