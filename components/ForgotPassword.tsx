"use client";
import ForgetPasswordLinkAPI from "@/services/api/auth_api/forgot_password_api";
import getAccessTokenApi from "@/services/api/auth_api/login_api";
import { fetchAccessToken } from "@/store/slices/auth_slice/login_slice";
import { TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
const LoginValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const ForgotPassword = () => {
  const router = useRouter();

  return (
    <>
      <div className="bg-white overflow-hidden common-wrapper shadow-lg">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="bg-white-2 h-100 p-5">
              <div className="mt-2 mb-2 text-center">
                <h5 className="mb-5">Forgot Your Password</h5>
                <p className="font-size-4">
                  Please enter your email address associated with your account
                  and we will email you instructions to reset your password
                </p>
              </div>
              <Formik
                initialValues={{
                  email: "",
                }}
                validationSchema={LoginValidationSchema}
                onSubmit={async (values, action) => {
                  try {
                    const response = await ForgetPasswordLinkAPI(values.email);
                    console.log(response);
                    // On success
                    if (response === "success") {
                      console.log("success");
                      // Show a success notification
                      toast.success("Link Send Successfully", {
                        autoClose: 3000,
                        className: "custom-toast", // Close the notification after 3 seconds
                      });

                      // Perform any other actions you need after successful login
                      action.resetForm();
                      setTimeout(() => {
                        router.push("/");
                      }, 1000);
                    } else if (response === "error") {
                      toast.error("Enter Correct Email", {
                        autoClose: 5000,
                        className: "custom-toast", // Close the notification after 3 seconds
                      });
                    }
                  } catch (error) {
                    console.error("Login error:", error);
                  }
                }}
              >
                {({ setFieldValue, values, touched, errors }) => (
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
                        name="email"
                        value={values.email}
                        onChange={(e) => setFieldValue("email", e.target.value)}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email ? errors.email : ""}
                      />
                    </div>

                    <div className="form-group mb-8 text-center">
                      <button
                        type="submit"
                        className="btn btn-primary btn-medium w-50 rounded-5 text-uppercase"
                      >
                        Send Link
                      </button>
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

export default ForgotPassword;
