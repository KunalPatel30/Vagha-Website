import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Header({cartCount}) {

    const location = useLocation();
    const [activePath, setActivePath] = useState(location.pathname);

    const redirect = useNavigate();
    
    useEffect(() => {
        setActivePath(location.pathname);
    }, [location.pathname]);

    const logout = () => {
        localStorage.removeItem('userid');
        localStorage.removeItem('username');
        toast.success('Logout Successful'); 
        return redirect('/login');
    }

    const handleNavClick = (path) => {
        setActivePath(path);
    };

  return (
    <>
        <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">
            <div className="container">
                {/* <a className="navbar-brand" href="/">ShreeHari<span>Vagha Collection</span></a> */}
                <img src="./src/assets/images/Logo/logo-1.png" alt="Logo" style={{ height: "90px", marginRight: "10px" }} />
                <a className="navbar-brand" href="/">
                    ShreeHari<span>Vagha Collection</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarsFurni">
                    <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0 text-center">
                        <li className={`nav-item ${activePath === '/' ? 'active' : ''}`}>
                            <NavLink className="nav-link" to="/" onClick={() => handleNavClick('/')}>Home</NavLink>
                        </li>
                        <li className={`nav-item ${activePath === '/product' ? 'active' : ''}`}>
                            <NavLink className="nav-link" to="/product" onClick={() => handleNavClick('/product')}>Shop</NavLink>
                        </li>
                        <li className={`nav-item ${activePath === '/about' ? 'active' : ''}`}>
                            <NavLink className="nav-link" to="/about" onClick={() => handleNavClick('/about')}>About us</NavLink>
                        </li>
                        <li className={`nav-item ${activePath === '/contact' ? 'active' : ''}`}>
                            <NavLink className="nav-link" to="/contact" onClick={() => handleNavClick('/contact')}>Contact us</NavLink>
                        </li>
                        {(() => {   
                            if(localStorage.getItem('userid')) {
                                return ( 
                                    <>
                                        <li className="nav-item dropdown ms-md-5">
                                            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src="./src/assets/images/user.svg" alt="User" />
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-start" aria-labelledby="userDropdown"> 
                                                <li><span className=""><i className="fa-solid fa-user me-2"></i>{localStorage.getItem('username')}</span></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><button onClick={logout}>Logout</button></li>
                                            </ul>
                                        </li>
                                    </> 
                                )
                            }
                            else{
                                return(
                                    <li className={`nav-item ${activePath === '/login' ? 'active' : ''}`}>
                                        <Link className="nav-link ms-md-5" to="/login" onClick={() => handleNavClick('/login')}><img src="./src/assets/images/user.svg" /></Link>
                                    </li>
                                )
                            }
                        })()}
                        <li className={`nav-item ${activePath === '/cart' ? 'active' : ''}`} style={{ position: 'relative' }}>
                            <Link className="nav-link" to="/cart" onClick={() => handleNavClick('/cart')}>
                                <img src="./src/assets/images/cart.svg" />
                                <span style={{ position: 'absolute', top: '3px', right: '-5px', background: '#fff', color: '#3b5d50', borderRadius: '50%', width: '20px', height: '20px', fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
                                    {cartCount}
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header