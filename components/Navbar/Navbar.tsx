"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
       <div className={`site-wrapper overflow-hidden ${isSticky ? 'sticky' : ''}`}>
        <header className={`site-header site-header--menu-right ${isSticky ? 'sticky' : ''} py-7 py-lg-0 site-header--absolute site-header--sticky`}>
          <div className="container">
            <nav className="navbar site-navbar offcanvas-active navbar-expand-lg  px-0 py-0">

              <div className="brand-logo">
                <Link href="/">
                  <h3>Logo</h3>
                </Link>
              </div>
              <div className="collapse navbar-collapse" id="mobile-menu">
                <div className="navbar-nav-wrapper">
                  <ul className="navbar-nav main-menu">
                    <li className="nav-item dropdown active">
                      <Link className="nav-link" href='/jobs'>Explore Jobs</Link>
                    </li>
                   
                  </ul>
                </div>
                <button className="d-block d-lg-none offcanvas-btn-close focus-reset" type="button" data-toggle="collapse" data-target="#mobile-menu" aria-controls="mobile-menu" aria-expanded="true" aria-label="Toggle navigation">
                  <i className="gr-cross-icon"></i>
                </button>
              </div>
              <div className="header-btns header-btn-devider ml-auto pr-2 ml-lg-6">
                <Link href='/login' legacyBehavior>
                <a className="btn btn-transparent text-uppercase font-size-3 heading-default-color focus-reset">
                  Log in
                </a>
                </Link>
               <Link href='/register' legacyBehavior> 
                <a className="btn btn-primary text-uppercase font-size-3">
                  Sign up
                </a>
               </Link>
              </div>

              <button className="navbar-toggler btn-close-off-canvas  hamburger-icon border-0" type="button" data-toggle="collapse" data-target="#mobile-menu" aria-controls="mobile-menu" aria-expanded="false" aria-label="Toggle navigation">

                <span className="hamburger hamburger--squeeze js-hamburger">
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </span>
              </button>

            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
