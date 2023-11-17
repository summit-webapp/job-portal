import { ProfileInterface } from "@/interfaces/profile-interface";
import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";

const ProfileInfoCard = ({ isLoading, data, error }: ProfileInterface) => {
  console.log("profile@@ data", data);
  return (
    <>
      <div className="bg-white shadow-9 rounded-4">
        <div className="px-5 pt-8 text-center border-bottom border-mercury">
          <a className="mb-4" href="#">
            <i className="fas fa-user-circle icon-size"></i>
          </a>
          <h4 className="mb-0">{data?.name1}</h4>
          {/* <p className="mb-8">
                      <a className="text-gray font-size-4" href="#">
                        Product Designer
                      </a>
                    </p> */}
        </div>
        {/* Top End */}
        {/* Bottom Start */}
        <div className="px-9 pt-5 pt-xl-6 pb-5">
          <h5 className="text-black-2 mb-8 font-size-5">Contact Info</h5>

          <div className="mb-7">
            <p className="font-size-4 mb-0">Location</p>
            <h5 className="font-size-4 font-weight-semibold mb-0 text-black-2 text-break">
              {data?.city}
            </h5>
          </div>

          <div className="mb-7">
            <p className="font-size-4 mb-0">E-mail</p>
            <h5 className="font-size-4 font-weight-semibold mb-0">
              {data?.email}
            </h5>
          </div>

          <div className="mb-7">
            <p className="font-size-4 mb-0">Phone</p>
            <h5 className="font-size-4 font-weight-semibold mb-0">
              <a className="text-black-2 text-break" href="">
                {data?.phone_number}
              </a>
            </h5>
          </div>
          <div>
            <Link href="change-password">
              <Button className=" rounded-5 text-uppercase">
                Change Password
              </Button>
            </Link>
          </div>
        </div>
        {/* Bottom End */}
      </div>
    </>
  );
};

export default ProfileInfoCard;
