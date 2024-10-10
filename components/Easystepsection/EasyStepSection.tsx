import React from "react";

const EasyStepSection = () => {
  return (
    <>
      <div className="pt-8 pt-lg-16 pb-2 pb-lg-12">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 ">
              <div className="text-center mb-8 mb-lg-18 px-xl-9 px-xxl-7">
                <h2 className="font-size-9 mb-6">
                Our Recruitment Process
                  <br className="d-none d-sm-block" /> Simple, Streamlined, and Focused on You
                </h2>
                <p className="font-size-4 text-default-color px-xs-9 px-md-0">
                At 8848 Digital, we’ve streamlined our recruitment process to make it as straightforward and stress-free as possible. In just three easy steps, you could be on your way to scaling new heights in your career.
                </p>
              </div>
            </div>
          </div>

          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <div className="col-12 col-lg-4 col-md-6 col-sm-8 col-xs-8">
              <div className="px-xl-7 px-xxl-12 pt-5 pb-3 pb-lg-9 text-center">
                <div className="square-92 rounded-4 bg-dodger text-white font-size-8 mx-auto shadow-dodger mb-11">
                  <img src="./image/svg/shoot.svg" alt="" />
                </div>
                <div className="services-content">
                  <h3 className="font-size-6 mb-7">Step 1: Register Your Account</h3>
                  <p className="font-size-4 text-default-color">
                  To kickstart your journey with 8848 Digital, the first step is to create an account. It’s quick, easy, and secure.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4 col-md-6 col-sm-8 col-xs-8">
              <div className="px-xl-7 px-xxl-12 pt-5 pb-3 pb-lg-9 text-center">
                <div className="square-92 rounded-4 bg-green text-white font-size-8 mx-auto shadow-green mb-11">
                  <img src="./image/svg/user.svg" alt="" />
                </div>
                <div className="services-content">
                  <h3 className="font-size-6 mb-7">Step 2: Apply for an Opening</h3>
                  <p className="font-size-4 text-default-color">
                  Found a role that excites you? It's time to apply!
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4 col-md-6 col-sm-8 col-xs-8">
              <div className="px-xl-7 px-xxl-12 pt-5 pb-3 pb-lg-9 text-center">
                <div className="square-92 rounded-4 bg-casablanca text-white font-size-8 mx-auto shadow-casablanca mb-11">
                  <img src="./image/svg/heart.svg" alt="" />
                </div>
                <div className="services-content">
                  <h3 className="font-size-6 mb-7">Get Hired</h3>
                  <p className="font-size-4 text-default-color">
                  Congratulations, you’ve made it to the final stage!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EasyStepSection;
