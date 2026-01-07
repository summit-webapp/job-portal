import { ProfileInterface } from "@/interfaces/profile-interface";
import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";

const ProfileContactDetails = ({ isLoading, data, error }: ProfileInterface) => {
    console.log("profile@@ data", data);
    return (
        <>
            <div className="bg-white rounded-8 pt-6 px-8 pb-8 profile-infocard-wrapper">

                <h3 className="profile-infocard-header font-size-4">Contact Details</h3>

                <div className="profile-infocard-details-wrap">
                    <div className="profile-infocard-detail">
                        <span>Name</span>
                        <h4 className="font-size-4 m-0">
                            {data?.name}
                        </h4>
                    </div>
                    <div className="profile-infocard-detail">
                        <span>Email</span>
                        <h4 className="font-size-4 m-0">
                            {data?.email}
                        </h4>
                    </div>
                    <div className="profile-infocard-detail">
                        <span>Phone Number</span>
                        <h4 className="font-size-4 m-0">
                            {data?.phone_number}
                        </h4>
                    </div>
                    <div className="profile-infocard-detail">
                        <span>Location</span>
                        <h4 className="font-size-4 m-0">
                            {data?.city}
                        </h4>
                    </div>
                </div>

                <div className="profile-infocard-buttonwrap">
                    <Link href="change-password" className="w-full">
                        <Button className="profile-btn btn-changepassword">
                            Change Password
                        </Button>
                    </Link>
                    <Link href="change-password" className="w-full">
                        <Button className="profile-btn btn-update-resume">
                            Update Resume
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ProfileContactDetails;
