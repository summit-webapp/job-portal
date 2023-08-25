'use client'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Form as BootstrapForm, Button } from 'react-bootstrap';
import Link from 'next/link';

const SignupValidationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  address: Yup.string().required('Address is required'),
  qualification: Yup.string().required('Qualification is required'),
  technicalSkills: Yup.string().required('Technical skills are required'),
  experience: Yup.string().required('Experience is required'),
  currentCTC: Yup.number().required('Current CTC is required'),
  expectedCTC: Yup.number().required('Expected CTC is required'),
  mobileNo: Yup.string().required('Mobile number is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
  attachResume: Yup.mixed().required('Resume attachment is required'),
});

const Register: React.FC = () => {
  return (
    <>
      <div className="bg-white overflow-hidden register-wrapper shadow-lg">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="bg-white-2 h-100 p-5">
              <div className='pb-7 text-center'>
                <h5>Sign Up</h5>
              </div>
              <Formik
                initialValues={{
                  fullName: '',
                  address: '',
                  qualification: '',
                  technicalSkills: '',
                  experience: '',
                  currentCTC: '',
                  expectedCTC: '',
                  mobileNo: '',
                  email: '',
                  password: '',
                  confirmPassword: '',
                  attachResume: null,
                }}
                validationSchema={SignupValidationSchema}
                onSubmit={(values) => {
                  // Handle signup logic here
                  console.log(values);
                }}
              >
                {({ setFieldValue }) => (
                  <Form>
                    <div className="row">
                      <div className="col-6">

                        <div className="form-group">
                          {/* <label htmlFor="fullName">Full Name</label> */}
                          <Field type="text" className="form-control" name="fullName"  placeholder='Enter Full Name'/>
                          <ErrorMessage name="fullName" component="div" className="error_message" />
                        </div>
                        <div className="form-group">
                          {/* <label htmlFor="address">Address</label> */}
                          <Field type="text" className="form-control" name="address" placeholder='Enter Full Address'/>
                          <ErrorMessage name="address" component="div" className="error_message" />
                        </div>
                        <div className="form-group">
                          {/* <label htmlFor="qualification">Qualification</label> */}
                          <Field type="text" className="form-control" name="qualification" placeholder='Enter Qualification'/>
                          <ErrorMessage name="qualification" component="div" className="error_message" />
                        </div>
                        <div className="form-group">
                          {/* <label htmlFor="technicalSkills">Technical Skills</label> */}
                          <Field type="text" className="form-control" name="technicalSkills" placeholder='Enter Technical Skills'/>
                          <ErrorMessage name="technicalSkills" component="div" className="error_message" />
                        </div>
                        <div className="form-group">
                          {/* <label htmlFor="experience">Experience</label> */}
                          <Field type="text" className="form-control" name="experience" placeholder='Enter Experience'/>
                          <ErrorMessage name="experience" component="div" className="error_message" />
                        </div>
                        <div className="form-group">
                          {/* <label htmlFor="currentCTC">Current CTC</label> */}
                          <Field type="number" className="form-control" name="currentCTC" placeholder='Enter Current CTC'/>
                          <ErrorMessage name="currentCTC" component="div" className="error_message" />
                        </div>
                      </div>
                      <div className="col-6">

                        <div className="form-group">
                          {/* <label htmlFor="expectedCTC">Expected CTC</label> */}
                          <Field type="number" className="form-control" name="expectedCTC" placeholder='Enter Expected CTC' />
                          <ErrorMessage name="expectedCTC" component="div" className="error_message" />
                        </div>
                        <div className="form-group">
                          {/* <label htmlFor="mobileNo">Mobile Number</label> */}
                          <Field type="text" className="form-control" name="mobileNo" placeholder='Enter valid Mobile Number'/>
                          <ErrorMessage name="mobileNo" component="div" className="error_message" />
                        </div>
                        <div className="form-group">
                          {/* <label htmlFor="email">Email</label> */}
                          <Field type="email" className="form-control" name="email" placeholder='Enter Email'/>
                          <ErrorMessage name="email" component="div" className="error_message" />
                        </div>
                        <div className="form-group">
                          {/* <label htmlFor="password">Password</label> */}
                          <Field type="password" className="form-control" name="password" placeholder='Enter Password'/>
                          <ErrorMessage name="password" component="div" className="error_message" />
                        </div>
                        <div className="form-group">
                          {/* <label htmlFor="confirmPassword">Confirm Password</label> */}
                          <Field type="password" className="form-control" name="confirmPassword" placeholder='Confirm Password'/>
                          <ErrorMessage name="confirmPassword" component="div" className="error_message" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="attachResume" className='mb-0'>Attach Resume</label>
                          <input
                            type="file"
                            className="form-control-file"
                            name="attachResume"
                            onChange={(event) => {
                              setFieldValue('attachResume', event.currentTarget.files?.[0]);
                            }}
                          />
                          <ErrorMessage name="attachResume" component="div" className="error_message" />
                        </div>
                       
                      </div>
                      <div className="col-12 text-center">
                      <div className="form-group mb-8">
                          <Button type="submit" variant="primary" className="w-50 rounded-5 text-uppercase">Sign Up</Button>
                        </div>
                        <p className="font-size-4 text-center heading-default-color">
                          Already have an account? <Link href="/login" className="text-primary" legacyBehavior>Log in</Link>
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
