"use client";
import React, { useState, useEffect } from "react";
import heroImg from "../../public/image/patterns/hero-pattern.png";
import Link from "next/link";
import { useRouter } from "next/router";
import LogoutList from "@/services/api/auth_api/logout_api";
import {
  ClearToken,
  get_access_token,
} from "@/store/slices/auth_slice/login_slice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import partnerImg from '../../public/image/frappe-partner.png'
import iso1 from '../../public/image/iso1.png'
import iso2 from '../../public/image/iso2.png'
import Navbar from "../Navbar/Navbar";

const NavSection = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [LoggedIn, setLoggedIn] = useState<any>(false);
  const login = useSelector(get_access_token);
  const loginCheck = login.user;
  console.log("token login check", loginCheck);
  let isLoggedIn: any;
  useEffect(() => {
    if (typeof window !== "undefined") {
      // isLoggedIn = localStorage.getItem("LoggedIn");
      setLoggedIn(loginCheck);
    }
  }, [login]);
  const handleLogOut = () => {
    LogoutList();
    dispatch(ClearToken());
    localStorage.removeItem("LoggedIn");
    console.log("Logged out");
    toast.success("Logout successful", {
      autoClose: 3000,
      className: "custom-toast", // Close the notification after 3 seconds
    });
    setTimeout(() => {
      router.push("/");
    }, 1000);
    console.log("logout called");
  };
  return (
    <>
      <div
        // className={`site-wrapper overflow-hidden ${isSticky ? "sticky" : ""}`}
        className="site-wrapper overflow-hidden"
      >
        {/* <header
          className={`site-header site-header--menu-right ${
            isSticky ? "sticky" : ""
          } py-7 py-lg-0 site-header--absolute site-header--sticky`}
        >
          <div className="container">
            <nav className="navbar site-navbar offcanvas-active navbar-expand-lg  px-0 py-0">
              <div className="brand-logo">
                <Link href="/">
                  <img
                    src="/image/l1/png/logo.png"
                    alt=""
                    width={120}
                    height={100}
                  />
                </Link>
              </div>
              <div className="collapse navbar-collapse" id="mobile-menu">
                <div className="navbar-nav-wrapper">
                  <ul className="navbar-nav main-menu">
                    <li className="nav-item dropdown">
                      <Link className="nav-link" href="/jobs">
                        Explore Jobs
                      </Link>
                    </li>
                  </ul>
                </div>
                <button
                  className="d-block d-lg-none offcanvas-btn-close focus-reset"
                  type="button"
                  data-toggle="collapse"
                  data-target="#mobile-menu"
                  aria-controls="mobile-menu"
                  aria-expanded="true"
                  aria-label="Toggle navigation"
                >
                  <i className="gr-cross-icon"></i>
                </button>
              </div>
              <div className="header-btns header-btn-devider ml-auto pr-2 ml-lg-6">
                {LoggedIn === "LoggedIn" ? (
                  ""
                ) : (
                
                  <Link href="/login" legacyBehavior>
                    <a className="btn btn-transparent text-uppercase font-size-3 heading-default-color focus-reset">
                      Log in
                    </a>
                  </Link>
                )}
                {LoggedIn === "LoggedIn" ? (
                  <div>
                    <div className="dropdown show-gr-dropdown py-5">
                      <a
                        className="proile media ml-7 flex-y-center"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <div className="circle-40">
                          <i className="fas fa-user-circle icon-size"></i>
                        </div>
                        <i className="fas fa-chevron-down heading-default-color ml-6"></i>
                      </a>
                      <div
                        className="dropdown-menu gr-menu-dropdown dropdown-right border-0 border-width-2 py-2 w-auto bg-default"
                        aria-labelledby="dropdownMenuLink"
                      >
                      
                        <Link href="/profile" legacyBehavior>
                          <a
                            className="dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase"
                            href="dashboard-main.html"
                          >
                            View Profile
                          </a>
                        </Link>
                        <Link href="" legacyBehavior>
                          <a
                            onClick={handleLogOut}
                            className="dropdown-item py-2 text-red font-size-3 font-weight-semibold line-height-1p2 text-uppercase"
                            href="#"
                          >
                            Log Out
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link href="/register" legacyBehavior>
                    <a className="btn btn-primary text-uppercase font-size-3">
                      Sign up
                    </a>
                  </Link>
                )}
              </div>

              <button
                className="navbar-toggler btn-close-off-canvas  hamburger-icon border-0"
                type="button"
                data-toggle="collapse"
                data-target="#mobile-menu"
                aria-controls="mobile-menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="hamburger hamburger--squeeze js-hamburger">
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </span>
              </button>
            </nav>
          </div>
        </header> */}
          <Navbar/>
        <div className="bg-gradient-1 pt-26 pt-md-32 pt-lg-33 pt-xl-35 position-relative z-index-1 overflow-hidden">
          <div className="pos-abs-tr w-50 z-index-n2">
            <img src={heroImg.src} alt="" className="gr-opacity-1" />
          </div>
          {/* homepage-content class added */}
          <div className="container homepage-content">
            <div className="row position-relative align-items-center">
              <div
                className="col-xxl-6 col-xl-7 col-lg-8 col-md-12 pt-lg-13 pb-lg-33 pb-xl-34 pb-md-33 pb-10"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <h1 className="font-size-11 mb-12 pr-md-30 pr-lg-0">
                Elevate Your Career to New Heights
                </h1>
                <div className="">
                 <div>
                  <img src={partnerImg.src}  width='155px' alt="" style={{marginRight:'20px'}}/>
                  <img src={iso1.src}   width='100px' alt=""  style={{marginRight:'20px'}}/>
                  <img src={iso2.src}  width='100px' alt=""  style={{marginRight:'20px'}}/>
                 </div>
                 
                </div>
              </div>

              <div
                className="col-lg-6 col-md-4 col-sm-6 col-xs-6 col-8 pos-abs-br z-index-n1 position-static position-md-absolute mx-auto ml-md-auto"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className=" ml-xxl-23 ml-xl-12 ml-md-7">
                  <img
                    src="./image/l1/png/hero-image-man.png"
                    alt=""
                    className="w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavSection;
