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
      <div className="bg-white rounded-8 overflow-hidden register-wrapper">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="bg-white-2 h-100 px-11 pt-11 pb-7">
              <div className='mt-2 mb-2 text-center'>
                <h5>Register</h5>
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
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name</label>
                      <Field type="text" className="form-control" name="fullName" />
                      <ErrorMessage name="fullName" component="div" className="error_message" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">Address</label>
                      <Field type="text" className="form-control" name="address" />
                      <ErrorMessage name="address" component="div" className="error_message" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="qualification">Qualification</label>
                      <Field type="text" className="form-control" name="qualification" />
                      <ErrorMessage name="qualification" component="div" className="error_message" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="technicalSkills">Technical Skills</label>
                      <Field type="text" className="form-control" name="technicalSkills" />
                      <ErrorMessage name="technicalSkills" component="div" className="error_message" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="experience">Experience</label>
                      <Field type="text" className="form-control" name="experience" />
                      <ErrorMessage name="experience" component="div" className="error_message" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="currentCTC">Current CTC</label>
                      <Field type="number" className="form-control" name="currentCTC" />
                      <ErrorMessage name="currentCTC" component="div" className="error_message" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="expectedCTC">Expected CTC</label>
                      <Field type="number" className="form-control" name="expectedCTC" />
                      <ErrorMessage name="expectedCTC" component="div" className="error_message" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="mobileNo">Mobile Number</label>
                      <Field type="text" className="form-control" name="mobileNo" />
                      <ErrorMessage name="mobileNo" component="div" className="error_message" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <Field type="email" className="form-control" name="email" />
                      <ErrorMessage name="email" component="div" className="error_message" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <Field type="password" className="form-control" name="password" />
                      <ErrorMessage name="password" component="div" className="error_message" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      <Field type="password" className="form-control" name="confirmPassword" />
                      <ErrorMessage name="confirmPassword" component="div" className="error_message" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="attachResume">Attach Resume</label>
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
                    <div className="form-group mb-8">
                      <Button type="submit" variant="primary" className="w-100 rounded-5 text-uppercase">Sign Up</Button>
                    </div>
                    <p className="font-size-4 text-center heading-default-color">
                      Already have an account? <Link href="/login" className="text-primary" legacyBehavior>Log in</Link> 
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

export default Register;
