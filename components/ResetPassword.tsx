import React, { useRef, useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Form as BootstrapForm, Button } from "react-bootstrap";
import Link from "next/link";
import { toast } from "react-toastify";

import RegisterPost from "@/services/api/auth_api/register_api";
import { useRouter } from "next/router";
import UploadFileApi from "@/services/api/auth_api/upload_file_api";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ChangePasswordAPI from "@/services/api/auth_api/change-password_api";
import { get_access_token } from "@/store/slices/auth_slice/login_slice";
import { useSelector } from "react-redux";
import ResetPasswordAPI from "@/services/api/auth_api/reset_password_api";
// import ResetPassword from "./ForgotPassword";

const SignupValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  new_password: Yup.string().required("Name is required"),
  confirm_password: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("new_password")], "Passwords must match"),
});

const ResetPassword: React.FC = () => {
  const router = useRouter();

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const login = useSelector(get_access_token);
  console.log(login);
  const togglePasswordVisibility = (field: string) => {
    switch (field) {
      case "new_password":
        setShowNewPassword((prev) => !prev);
        break;
      case "confirm_password":
        setShowConfirmPassword((prev) => !prev);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="bg-white overflow-hidden register-wrapper shadow-lg">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="bg-white-2 h-100 p-5">
              <div className="pb-7 text-center">
                <h5>Reset Password</h5>
              </div>
              <Formik
                initialValues={{
                  email: "",
                  new_password: "",
                  confirm_password: "",
                }}
                validationSchema={SignupValidationSchema}
                onSubmit={async (values) => {
                  console.log(values);
                  try {
                    const response = await ResetPasswordAPI(
                      values.email,
                      values.new_password
                      //   login?.token
                    );
                    console.log(response);
                    if (response === "success") {
                      toast.success("Password Reset successful", {
                        autoClose: 3000,
                        className: "custom-toast",
                      });
                      router.push("/login");
                    } else if (response === "error") {
                      toast.error(response, {
                        autoClose: 5000,
                        className: "custom-toast",
                      });
                    }
                  } catch (error) {
                    console.error("password Reset Error:", error);
                  }
                }}
              >
                {({ setFieldValue, values, errors, touched }) => (
                  <Form>
                    <div className="row">
                      <div className="col-12">
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
                            name="email"
                            value={values.email}
                            onChange={(e) =>
                              setFieldValue("email", e.target.value)
                            }
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email ? errors.email : ""}
                          />
                        </div>

                        <div className="form-group">
                          <label
                            htmlFor="name"
                            className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                          >
                            Enter Password
                          </label>
                          <TextField
                            type={showNewPassword ? "text" : "password"}
                            className="w-100"
                            name="new_password"
                            value={values.new_password}
                            onChange={(e) =>
                              setFieldValue("new_password", e.target.value)
                            }
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    onClick={() =>
                                      togglePasswordVisibility("new_password")
                                    }
                                  >
                                    {showNewPassword ? (
                                      <VisibilityIcon />
                                    ) : (
                                      <VisibilityOffIcon />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                            error={
                              touched.new_password &&
                              Boolean(errors.new_password)
                            }
                            helperText={
                              touched.new_password ? errors.new_password : ""
                            }
                          />
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="confirm_password"
                            className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                          >
                            Confirm Password
                          </label>
                          <TextField
                            type={showConfirmPassword ? "text" : "password"}
                            className="w-100"
                            name="confirm_password"
                            value={values.confirm_password}
                            onChange={(e) =>
                              setFieldValue("confirm_password", e.target.value)
                            }
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    onClick={() =>
                                      togglePasswordVisibility(
                                        "confirm_password"
                                      )
                                    }
                                  >
                                    {showConfirmPassword ? (
                                      <VisibilityIcon />
                                    ) : (
                                      <VisibilityOffIcon />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                            error={
                              touched.confirm_password &&
                              Boolean(errors.confirm_password)
                            }
                            helperText={
                              touched.confirm_password
                                ? errors.confirm_password
                                : ""
                            }
                          />
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <div className="form-group mb-8">
                          <Button
                            type="submit"
                            variant="primary"
                            className="w-50 rounded-5 text-uppercase"
                          >
                            Reset Password
                          </Button>
                        </div>
                      </div>
                    </div>
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

export default ResetPassword;
