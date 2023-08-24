import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Form as BootstrapForm, FormCheck } from 'react-bootstrap';
import Link from 'next/link';

const LoginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const Login = () => {
  return (
    <>
      <div className="bg-white rounded-8 overflow-hidden login-wrapper">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="bg-white-2 h-100 px-11 pt-11 pb-7">
              <div className='mt-2 mb-2 text-center'>
                <h5>Logo</h5>
              </div>
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                  remember: false,
                }}
                validationSchema={LoginValidationSchema}
                onSubmit={(values) => {
                  // Handle login logic here
                  console.log(values);
                }}
              >
                <Form>
                  <div className="form-group">
                    <label htmlFor="email" className="font-size-4 text-black-2 font-weight-semibold line-height-reset">E-mail</label>
                    <Field type="email" className="form-control" name="email" placeholder="example@gmail.com" />
                    <ErrorMessage name="email" component="div" className="error_message" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="font-size-4 text-black-2 font-weight-semibold line-height-reset">Password</label>
                    <div className="position-relative">
                      <Field type="password" className="form-control" name="password" placeholder="Enter password" />
                    </div>
                    <ErrorMessage name="password" component="div" className="error_message" />
                  </div>
                  <div className="form-group d-flex flex-wrap justify-content-between align-items-center">
                    {/* <FormCheck>
                      <Field type="checkbox" name="remember" id="terms-check" as={FormCheck.Input} />
                      <FormCheck.Label className="font-size-3 mb-0 line-height-reset mb-1 d-block">
                        Remember password
                      </FormCheck.Label>
                    </FormCheck> */}
                    <a href="" className="font-size-3 text-dodger line-height-reset" style={{textDecoration:'underline'}}>Forget Password</a>
                  </div>
                  <div className="form-group mb-8">
                    <button type="submit" className="btn btn-primary btn-medium w-100 rounded-5 text-uppercase">Log in</button>
                  </div>
                  <p className="font-size-4 text-center heading-default-color">Don't have an account? <Link className="text-primary" href="/register"> Create a free account</Link></p>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
