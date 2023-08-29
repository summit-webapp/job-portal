"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ClearToken, get_access_token } from '@/store/slices/auth_slice/login_slice';
import LogoutList from '@/services/api/auth_api/logout_api';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isSticky, setIsSticky] = useState(false);
  const login = useSelector(get_access_token);
  const loginCheck = login.user
  console.log('token login', login)
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
  const [LoggedIn, setLoggedIn] = useState<any>(false)

  let isLoggedIn: any;
  useEffect(() => {
    if (typeof window !== "undefined") {
      // isLoggedIn = localStorage.getItem("LoggedIn");
      setLoggedIn(loginCheck);
    }
  }, [login])
  const handleLogOut = () => {
      LogoutList()
      dispatch(ClearToken());
      localStorage.removeItem('LoggedIn');
      console.log('Logged out');
      setTimeout(() => {
          router.push('/')
      }, 1000)
      console.log('logout called')

  };

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
                    <li className="nav-item dropdown">
                      <Link className="nav-link" href='/jobs'>Explore Jobs</Link>
                    </li>
                   
                  </ul>
                </div>
                <button className="d-block d-lg-none offcanvas-btn-close focus-reset" type="button" data-toggle="collapse" data-target="#mobile-menu" aria-controls="mobile-menu" aria-expanded="true" aria-label="Toggle navigation">
                  <i className="gr-cross-icon"></i>
                </button>
              </div>
              <div className="header-btns header-btn-devider ml-auto pr-2 ml-lg-6">
              {
                  LoggedIn === "LoggedIn" ? <Link href='' legacyBehavior>
                  <a  onClick={handleLogOut} className="btn btn-transparent text-uppercase font-size-3 heading-default-color focus-reset">
                    Log out
                  </a>
                  </Link>
                  :

                <Link href='/login' legacyBehavior>
                <a className="btn btn-transparent text-uppercase font-size-3 heading-default-color focus-reset">
                  Log in
                </a>
                </Link>
                }
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
