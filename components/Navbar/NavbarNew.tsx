"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
    ClearToken,
    get_access_token,
} from "@/store/slices/auth_slice/login_slice";
import LogoutList from "@/services/api/auth_api/logout_api";
// import "@/styles/NavbarNew.css";
import Image from "next/image";
import { ListIcon, UserIcon } from "@phosphor-icons/react";

const NavbarNew = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const login = useSelector(get_access_token);
    const loginCheck = login.user;

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        setIsLoggedIn(loginCheck === "LoggedIn");
    }, [loginCheck]);

    const handleLogOut = () => {
        LogoutList();
        dispatch(ClearToken());
        localStorage.removeItem("LoggedIn");
        toast.success("Logout successful", {
            autoClose: 3000,
            className: "custom-toast",
        });
        setTimeout(() => {
            router.push("/");
        }, 1000);
    };

    return (
        <nav className="job-portal-navbar">
            <div className="job-portal-navbar-inner">
                <div className="job-portal-navbar-left">
                    {/* <ListIcon size={24} /> */}
                    <div className="job-portal-navbar-logo">
                        <Link href="/">
                            <Image src="/8848_Logo.png" alt="8848 Digital" width={55} height={24} />
                        </Link>
                    </div>
                </div>

                <div className="job-portal-navbar-right">
                    <Link href="/jobs" className="job-portal-navbar-btn-explore">
                        Explore Jobs
                    </Link>

                    <div className="job-portal-navbar-icons">

                        {isLoggedIn ? (
                            <div className="dropdown">
                                <a
                                    className="job-portal-navbar-icon-link"
                                    href="#"
                                    role="button"
                                    id="profileDropdown"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <UserIcon size={20} />
                                </a>
                                <div
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="profileDropdown"
                                >
                                    <Link href="/profile" className="dropdown-item">
                                        View Profile
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <button
                                        onClick={handleLogOut}
                                        className="dropdown-item text-danger"
                                    >
                                        Log Out
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="d-flex">
                                <Link href="/login" className="job-portal-login">
                                    Login
                                </Link>
                                <span className="mx-2">|</span>
                                <Link href="/register" className="job-portal-signup">
                                    Sign Up
                                </Link>
                            </div>

                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavbarNew;
