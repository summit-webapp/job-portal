"use client";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Form as BootstrapForm, FormCheck } from "react-bootstrap";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { fetchAccessToken } from "@/store/slices/auth_slice/login_slice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import getAccessTokenApi from "@/services/api/auth_api/login_api";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const LoginValidationSchema = Yup.object().shape({
  usr: Yup.string().email("Invalid email").required("Email is required"),
  pwd: Yup.string().required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="bg-white overflow-hidden login-wrapper shadow-lg">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="bg-white-2 h-100 p-5">
              <div className="mt-2 mb-2 text-center">
                <h5>Log In</h5>
              </div>
              <Formik
                initialValues={{
                  usr: "",
                  pwd: "",
                }}
                validationSchema={LoginValidationSchema}
                onSubmit={async (values) => {
                  console.log(values);
                  try {
                    const response = await getAccessTokenApi(
                      values.usr,
                      values.pwd
                    );
                    if (response.msg === "success") {
                      toast.success("Login successful", {
                        autoClose: 3000,
                        className: "custom-toast",
                      });
                      dispatch(fetchAccessToken(values) as any);
                      router.push("/");
                    } else if (response.msg === "error") {
                      toast.error(response.error, {
                        autoClose: 5000,
                        className: "custom-toast",
                      });
                    }
                  } catch (error) {
                    console.error("Registration Error:", error);
                  }
                }}
              >
                {({ setFieldValue, values, errors, touched }) => (
                  <Form>
                    <div className="form-group">
                      <label
                        htmlFor="email"
                        className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                      >
                        E-mail
                      </label>
                      <TextField
                        type="email"
                        className="w-100"
                        name="usr"
                        value={values.usr}
                        onChange={(e) => setFieldValue("usr", e.target.value)}
                        error={touched.usr && Boolean(errors.usr)}
                        helperText={touched.usr ? errors.usr : ""}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="password"
                        className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                      >
                        Password
                      </label>
                      <div className="position-relative">
                        <TextField
                          type={showPassword ? "text" : "password"}
                          className="w-100"
                          name="pwd"
                          value={values.pwd}
                          onChange={(e) => setFieldValue("pwd", e.target.value)}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton onClick={togglePasswordVisibility}>
                                  {showPassword ? (
                                    <VisibilityIcon />
                                  ) : (
                                    <VisibilityOffIcon />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          error={touched.pwd && Boolean(errors.pwd)}
                          helperText={touched.pwd ? errors.pwd : ""}
                        />
                      </div>
                    </div>
                    <div className="form-group d-flex flex-wrap justify-content-end align-items-center"></div>
                    <div className="form-group mb-8 text-center">
                      <button
                        type="submit"
                        className="btn btn-primary btn-medium w-50 rounded-5 text-uppercase"
                      >
                        Log in
                      </button>
                    </div>
                    <p className="font-size-4 text-center heading-default-color">
                      Don't have an account?{" "}
                      <Link className="text-primary" href="/register">
                        {" "}
                        Create a free account
                      </Link>
                    </p>
                    <p className="font-size-4 text-center heading-default-color">
                      Forgot Password?{" "}
                      <Link className="text-primary" href="/forgot-password">
                        {" "}
                        Click here
                      </Link>
                    </p>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
