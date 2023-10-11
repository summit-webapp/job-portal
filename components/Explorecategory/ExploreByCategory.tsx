import useCategories from "@/hooks/home-page/categories-hook";
import { APIDataTypes } from "@/interfaces/api-data-types";
import loading from "../../styles/jobs-list-loading.module.css";
import React from "react";
import Link from "next/link";

const ExploreByCategory = () => {
  const { isLoading, data, error }: APIDataTypes = useCategories();

  if (isLoading) {
    return (
      <div
        className="pt-11 pt-lg-26 pb-lg-16"
        data-aos="fade-left"
        data-aos-duration="800"
        data-aos-delay="400"
        data-aos-once="true"
      >
        <div className="container">
          <div className="row align-items-center pb-14">
            <div className="col-12 col-lg-6">
              <div className="text-center text-lg-left mb-13 mb-lg-0">
                <h2 className="font-size-9 font-weight-bold">
                  Explore by category
                </h2>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="text-center text-lg-right">
                <a className="btn btn-outline-green text-uppercase" href="#">
                  Explore All
                </a>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {[...Array(8)].map(() => {
              return (
                <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
                  <Link
                    href="/jobs"
                    className="icon-color bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100"
                  >
                    <div className=" bg-blue-opacity-1 square-70 rounded-4 mb-7 font-size-7"></div>

                    <div
                      className={`${loading.category_skeleton_heading} bg-blue-opacity-1`}
                    ></div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else if (error) {
    return <></>;
  } else {
    return (
      <div
        className="pt-8 pt-lg-18 pb-lg-8"
        data-aos="fade-left"
        data-aos-duration="800"
        data-aos-delay="400"
        data-aos-once="true"
      >
        <div className="container">
          <div className="row align-items-center pb-14">
            <div className="col-12 col-lg-6 text-center">
              <div className="text-center text-lg-left mb-13 mb-lg-0">
                <h2 className="font-size-9 font-weight-bold">
                  Explore by category
                </h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {data?.message?.data?.length > 0 &&
              data?.message?.data?.map((category: any, index: number) => {
                return (
                  <div
                    className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8"
                    key={index}
                  >
                    <Link
                      href="/jobs"
                      className="icon-color bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100"
                    >
                      <div className="d-flex flex-column just-content-center align-items-center">
                        <div className=" bg-blue-opacity-1 square-70 rounded-4 mb-7 font-size-7">
                          <i className={`${category?.icon}`}></i>
                        </div>

                        <div className="">
                          <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">
                            {category?.title}
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
};

export default ExploreByCategory;
