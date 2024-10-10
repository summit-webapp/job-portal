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

const SignupValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  name: Yup.string().required("Name is required"),
  phone_number: Yup.string().required("Mobile Number is required"),
  city: Yup.string().required("City is required"),
  resume: Yup.mixed().required("Resume attachment is required"),
});

const Register: React.FC = () => {
  const router = useRouter();
  const [uploadResponse, setUploadResponse] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [errForFileSizeExceedingLength, setErrForFileSizeExceedingLength] =
    useState<boolean>(false);
  const [errorInUploadingFile, setErrorInUploadingFile] =
    useState<boolean>(false);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSelectedFile: any = e.target.files?.[0];
    const fileSizeInBytes = newSelectedFile?.size;
    // 1048576 = since we are converting into mb i.e 1024*1024=1048576, if it would have been in kb then divide by 1024
    const fileSizeInMegabytes = fileSizeInBytes / 1048576;
    console.log("size in direct mb", fileSizeInMegabytes);
    if (fileSizeInMegabytes > 1) {
      setErrForFileSizeExceedingLength(true);
    } else {
      setErrForFileSizeExceedingLength(false);
      setErrorInUploadingFile(false);
      try {
        const response = await UploadFileApi({ file: newSelectedFile });
        if (response?.status === 200) {
          setUploadResponse(response?.data?.message?.file_url);
          setSelectedFile(newSelectedFile);
        } else {
          setErrorInUploadingFile(true);
        }
      } catch (error) {
        console.error("Upload Error:", error);
      } finally {
      }
    }
  };

  const clearSelectedFile = () => {
    setSelectedFile(null);
    setUploadResponse("");
  };

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="bg-white overflow-hidden register-wrapper shadow-lg">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="bg-white-2 h-100 p-5">
              <div className="pb-7 text-center">
                <h5>Sign Up</h5>
              </div>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  name: "",
                  phone_number: "",
                  city: "",
                  resume: uploadResponse || "",
                }}
                validationSchema={SignupValidationSchema}
                onSubmit={async (values) => {
                  console.log(values);
                  try {
                    const response = await RegisterPost(values);
                    console.log("sign up api res", response);
                    if (response.msg === "success") {
                      toast.success("Registration successful", {
                        autoClose: 3000,
                        className: "custom-toast",
                      });
                      router.push("/login");
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
                            htmlFor="password"
                            className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                          >
                            Password
                          </label>
                          <TextField
                            type={showPassword ? "text" : "password"}
                            className="w-100"
                            name="password"
                            value={values.password}
                            onChange={(e) =>
                              setFieldValue("password", e.target.value)
                            }
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    onClick={togglePasswordVisibility}
                                  >
                                    {showPassword ? (
                                      <VisibilityIcon />
                                    ) : (
                                      <VisibilityOffIcon />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                            error={touched.password && Boolean(errors.password)}
                            helperText={touched.password ? errors.password : ""}
                          />
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="password"
                            className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                          >
                            Name
                          </label>
                          <TextField
                            type="text"
                            className="w-100"
                            name="name"
                            value={values.name}
                            onChange={(e) =>
                              setFieldValue("name", e.target.value)
                            }
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name ? errors.name : ""}
                          />
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="phone_number"
                            className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                          >
                            Phone Number
                          </label>
                          <TextField
                            type="text"
                            className="w-100"
                            name="phone_number"
                            value={values.phone_number}
                            onChange={(e) =>
                              setFieldValue("phone_number", e.target.value)
                            }
                            error={
                              touched.phone_number &&
                              Boolean(errors.phone_number)
                            }
                            helperText={
                              touched.phone_number ? errors.phone_number : ""
                            }
                          />
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="city"
                            className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                          >
                            City
                          </label>
                          <TextField
                            type="text"
                            className="w-100"
                            label="Enter City"
                            name="city"
                            value={values.city}
                            onChange={(e) =>
                              setFieldValue("city", e.target.value)
                            }
                            error={touched.city && Boolean(errors.city)}
                            helperText={touched.city ? errors.city : ""}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="attachResume" className="mb-3">
                            Attach Resume
                          </label>
                          {selectedFile ? (
                            <div className="selected-file">
                              <span>{selectedFile.name}</span>
                              <span
                                className="delete-file"
                                onClick={clearSelectedFile}
                                style={{ cursor: "pointer", marginLeft: "5px" }}
                              >
                                <i className="fas fa-times-circle text-red"></i>
                              </span>
                            </div>
                          ) : (
                            <div className="file file--upload">
                              <label htmlFor="input-file">
                                <i className="fas fa-upload"></i>Upload
                              </label>
                              <input
                                id="input-file"
                                type="file"
                                ref={fileInputRef}
                                onChange={(e) => {
                                  handleFileSelect(e);
                                  const fileName = e.target.files?.[0]?.name;
                                  const filePath = `/files/${fileName}`;
                                  setFieldValue("resume", filePath);
                                }}
                              />
                            </div>
                          )}
                          <ErrorMessage
                            name="resume"
                            component="div"
                            className="error_message"
                          />
                          {errForFileSizeExceedingLength && (
                            <p
                              className="text-danger"
                              style={{ fontSize: "14px" }}
                            >
                              Please upload file less than 1 MB.
                            </p>
                          )}
                          {errorInUploadingFile && (
                            <p
                              className="text-danger"
                              style={{ fontSize: "14px" }}
                            >
                              There seems to be an issue with uploading the
                              file. Please check and upload it again.
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <div className="form-group mb-8">
                          <Button
                            type="submit"
                            variant="primary"
                            className="w-50 rounded-5 text-uppercase"
                            disabled={uploadResponse === "" ? true : false}
                          >
                            Sign Up
                          </Button>
                        </div>
                        <p className="font-size-4 text-center heading-default-color">
                          Already have an account?{" "}
                          <Link href="/login" className="text-primary">
                            Log in
                          </Link>
                        </p>
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

export default Register;
