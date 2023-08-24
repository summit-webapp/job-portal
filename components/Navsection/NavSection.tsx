'use client';
import React, { useState, useEffect } from 'react';
import heroImg from "../../public/image/patterns/hero-pattern.png"
import Link from 'next/link';
const NavSection = () => {
  console.log("img",heroImg);
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

        <div className="bg-gradient-1 pt-26 pt-md-32 pt-lg-33 pt-xl-35 position-relative z-index-1 overflow-hidden">

          <div className="pos-abs-tr w-50 z-index-n2">
            <img src={heroImg.src} alt="" className="gr-opacity-1" />
          </div>

          <div className="container">
            <div className="row position-relative align-items-center">
              <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-12 pt-lg-13 pb-lg-33 pb-xl-34 pb-md-33 pb-10" data-aos="fade-right" data-aos-duration="800" data-aos-once="true">
                <h1 className="font-size-11 mb-12 pr-md-30 pr-lg-0">Find the perfect job
                  that you deserve.</h1>
                <div className="">

                  <form action="/" className="search-form shadow-6">
                    <div className="filter-search-form-1 bg-white rounded-sm shadow-4">
                      <div className="filter-inputs">
                        <div className="form-group position-relative">
                          <input className="form-control focus-reset pl-13" type="text" id="keyword" placeholder="Job title" />
                          <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"><i className="icon icon-zoom-2 text-primary font-weight-bold"></i></span>
                        </div>

                        <div className="form-group position-relative">
                          <select name="country" id="country" className="nice-select pl-13 h-100 arrow-3 font-size-4">
                            <option value="" data-display="Location" className="text-uppercase">Location</option>
                            <option value="">United States of America</option>
                            <option value="">United Arab Emirates</option>
                            <option value="">Bangladesh</option>
                            <option value="">Pakistan</option>
                          </select>
                          <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"><i className="icon icon-pin-3 text-primary font-weight-bold"></i></span>
                        </div>

                      </div>

                      <div className="button-block">
                        <button className="btn btn-primary line-height-reset h-100 btn-submit w-100 text-uppercase">Search</button>
                      </div>

                    </div>
                  </form>

                  <p className="heading-default-color font-size-3 pt-7"><span className="text-smoke">Search keywords e.g.</span> Product Designer</p>
                </div>
              </div>

              <div className="col-lg-6 col-md-4 col-sm-6 col-xs-6 col-8 pos-abs-br z-index-n1 position-static position-md-absolute mx-auto ml-md-auto" data-aos="fade-left" data-aos-duration="800" data-aos-once="true">
                <div className=" ml-xxl-23 ml-xl-12 ml-md-7">
                  <img src="./image/l1/png/hero-image-man.png" alt="" className="w-100" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default NavSection