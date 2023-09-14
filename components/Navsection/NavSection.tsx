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
import partnerImg from "../../public/image/frappe-partner-removebg-preview.png";
import iso1 from "../../public/image/iso1-removebg-preview.png";
import iso2 from "../../public/image/iso2-removebg-preview.png";
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
  // console.log("token login check", loginCheck);
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
        <Navbar />
        <div className="bg-gradient-1 pt-26 pt-md-32 pt-lg-33 pt-xl-35 position-relative z-index-1 overflow-hidden">
          <div className="pos-abs-tr w-50 z-index-n2">
            <img
              src={heroImg.src}
              alt="8848 Logo"
              className="hero-img-styles gr-opacity-1"
            />
          </div>

          <div className="container">
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
                    <img
                      src={partnerImg.src}
                      width="155px"
                      alt=""
                      style={{ marginRight: "20px" }}
                    />
                    <img
                      src={iso1.src}
                      width="100px"
                      alt=""
                      style={{ marginRight: "20px" }}
                    />
                    <img
                      src={iso2.src}
                      width="100px"
                      alt=""
                      style={{ marginRight: "20px" }}
                    />
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
