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
// import ResetPassword from "./ForgotPassword";

const SignupValidationSchema = Yup.object().shape({
  old_password: Yup.string().required("Old Password is required"),
  new_password: Yup.string().required("New Password is required"),
  confirm_password: Yup.string()
  .required("Confirm Password is required")
  .oneOf([Yup.ref("new_password")], "Passwords must match"),
});

const ChangePassword: React.FC = () => {
  const router = useRouter();

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const login = useSelector(get_access_token);
  console.log(login);
  const togglePasswordVisibility = (field: string) => {
    switch (field) {
      case "old_password":
        setShowOldPassword((prev) => !prev);
        break;
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
                <h5>Change Password</h5>
              </div>
              <Formik
                initialValues={{
                  old_password: "",
                  new_password: "",
                  confirm_password: "",
                }}
                validationSchema={SignupValidationSchema}
                onSubmit={async (values) => {
                  console.log(values);
                  try {
                    const response = await ChangePasswordAPI(
                      values.old_password,
                      values.new_password,
                      login?.token
                    );
                    console.log(response);
                    if (response === "success") {
                      toast.success("password Change successful", {
                        autoClose: 3000,
                        className: "custom-toast",
                      });
                      router.push("/");
                    } else if (response === "error") {
                      toast.error("Wrong password", {
                        autoClose: 5000,
                        className: "custom-toast",
                      });
                    }
                  } catch (error) {
                    console.error("password Change Error:", error);
                  }
                }}
              >
                {({ setFieldValue, values, errors, touched }) => (
                  <Form>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <label
                            htmlFor="old_password"
                            className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                          >
                            Old Password
                          </label>
                          <TextField
                            type={showOldPassword ? "text" : "password"}
                            className="w-100"
                            name="old_password"
                            value={values.old_password}
                            onChange={(e) =>
                              setFieldValue("old_password", e.target.value)
                            }
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    onClick={() =>
                                      togglePasswordVisibility("old_password")
                                    }
                                  >
                                    {showOldPassword ? (
                                      <VisibilityIcon />
                                    ) : (
                                      <VisibilityOffIcon />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                            error={
                              touched.old_password &&
                              Boolean(errors.old_password)
                            }
                            helperText={
                              touched.old_password ? errors.old_password : ""
                            }
                          />
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="name"
                            className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                          >
                            New Password
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
                            Change Password
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

export default ChangePassword;
