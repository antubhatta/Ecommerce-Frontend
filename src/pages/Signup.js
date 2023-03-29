import React from "react";
import BreadCrum from "../component/BreadCrum";
import Meta from "../component/Meta";
const Signup = () => {
  return (
    <>
      <Meta title={"Account"} />
      <BreadCrum title="Account" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="login-cart">
                <h3 className="login-title mb-4 text-center">Create Account</h3>
                <form action="" className="d-flex flex-column gap-20">
                  <div>
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div>
                    <input
                      name="mobile"
                      type="tel"
                      className="form-control"
                      placeholder="Enter Your Mobile Number"
                    />
                  </div>
                  <div>
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder="Enter Your Password"
                    />
                  </div>

                  <div className="d-flex justify-content-center gap-15 align-items-center mt-2">
                    <button className="button border-0" type="submit">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
