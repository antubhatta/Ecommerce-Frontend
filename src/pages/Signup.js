import React, { useEffect } from "react";
import BreadCrum from "../component/BreadCrum";
import Meta from "../component/Meta";
import Container from "../component/Container";
import CustomInput from "../component/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { regesterUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import Dropzone from "react-dropzone";
import { delImg, uploadImg } from "../features/upload/uploadSlice";

const signupSchema = yup.object({
  firstname: yup.string().required("First Name is Required"),
  lastname: yup.string().required("Last Name is Required"),
  email: yup
    .string()
    .nullable()
    .email("Email Should Be Valid")
    .required("Email is Required"),
  mobile: yup.string().required("Mobile Number is Required"),
  password: yup.string().required("Password is Required"),
});

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((state) => state?.auth);
  // const imgState = useSelector((state) => state?.upload?.images);
  const formik = useFormik({
    initialValues: {
      // images: "",
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: signupSchema,

    onSubmit: (values) => {
      dispatch(regesterUser(values));
      navigate("/login");
    },
  });

  // const img = [];
  // imgState?.forEach((i) => {
  //   img.push({
  //     public_id: i.public_id,
  //     url: i?.url,
  //   });
  // });

  // useEffect(() => {
  //   formik.values.images = img;
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [img]);

  return (
    <>
      <Meta title={"Account"} />
      <BreadCrum title="Account" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="login-cart">
              <h3 className="login-title mb-4 text-center">Create Account</h3>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-20"
              >
                {/* <div className="bg-grey border-1 p-5 text-center ">
                  <Dropzone
                    onDrop={(acceptedFiles) =>
                      dispatch(uploadImg(acceptedFiles))
                    }
                  >
                    {({ getRootProps, getInputProps }) => (
                      <section>
                        <div {...getRootProps()}>
                          <input {...getInputProps()} />
                          <h5 className="fw-9 fs-6">
                            Click Hare For Upload Your Profile Image
                          </h5>
                        </div>
                      </section>
                    )}
                  </Dropzone>
                </div>
                <div className="showimages d-flex flex-wrap gap-3">
                  {imgState &&
                    imgState?.map((i, j) => {
                      return (
                        <div className=" position-relative" key={j}>
                          <button
                            type="button"
                            onClick={() => dispatch(delImg(i.public_id))}
                            className="btn-close position-absolute"
                            style={{ top: "10px", right: "10px" }}
                          ></button>
                          <img src={i.url} alt="" width={200} height={200} />
                        </div>
                      );
                    })}
                </div> */}
                <CustomInput
                  name="firstname"
                  type="text"
                  className="form-control"
                  placeholder="Enter Your First Name"
                  value={formik.values.firstname}
                  onChange={formik.handleChange("firstname")}
                  onBlur={formik.handleBlur("firstname")}
                />
                <div className="error">
                  {formik.touched.firstname && formik.errors.firstname}
                </div>
                <CustomInput
                  name="lastname"
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Last Name"
                  value={formik.values.lastname}
                  onChange={formik.handleChange("lastname")}
                  onBlur={formik.handleBlur("lastname")}
                />
                <div className="error">
                  {formik.touched.lastname && formik.errors.lastname}
                </div>
                <CustomInput
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter Your email"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>

                <CustomInput
                  name="mobile"
                  type="tel"
                  className="form-control"
                  placeholder="Enter Your Mobile Number"
                  value={formik.values.mobile}
                  onChange={formik.handleChange("mobile")}
                  onBlur={formik.handleBlur("mobile")}
                />
                <div className="error">
                  {formik.touched.mobile && formik.errors.mobile}
                </div>

                <CustomInput
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Enter Your Password"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                />
                <div className="error">
                  {formik.touched.password && formik.errors.password}
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
      </Container>
    </>
  );
};

export default Signup;
