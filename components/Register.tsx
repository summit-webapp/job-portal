'use client'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Form as BootstrapForm, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import RegisterPost from '@/services/api/auth_api/register_api';
import { toast } from 'react-toastify';
const SignupValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  name: Yup.string().required('Name is required'),
  phone_number: Yup.string().required('Mobile Number is required'),
  city: Yup.string().required('City is required'),
  resume: Yup.mixed().required('Resume attachment is required'),
});

const Register: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const queryClient = useQueryClient(); // Create a query client instance
  const mutation = useMutation((values: any) => RegisterPost(values), {
    // onSuccess: (response:any) => {
    //   // On success, refetch data if needed
    //   queryClient.invalidateQueries('accessToken'); // Replace 'accessToken' with your query key
    // },
  });

  const handleSubmit = async (values: any) => {
    console.log("register value", values)
    try {
      const response = await mutation.mutateAsync(values);
      // Assuming your API returns a success message
      if (response.msg === 'success') {
        // Show a success notification
        toast.success('Registration successful', {
          autoClose: 3000,
          className: 'custom-toast',// Close the notification after 3 seconds
        });
        router.push('/login');
      } else if (response.msg === 'error') {
        toast.error(response.error, {
          autoClose: 5000,
          className: 'custom-toast',// Close the notification after 3 seconds
        });
        // router.push('/login');
      }

    } catch (error) {
      // toast.error(response.msg, { position: toast.POSITION.TOP_CENTER });
    }
  };
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
                  email: '',
                  password: '',
                  name: '',
                  phone_number: '',
                  city: '',
                  resume: 'https://unsplash.com/photos/a-black-mercedes-suv-driving-down-a-country-road-MyidPsXdKUU',

                }}
                validationSchema={SignupValidationSchema}
                onSubmit={(values) => {
                  handleSubmit(values);
                }}
              >
                {({ setFieldValue }) => (
                  <Form>
                    <div className="row">
                      <div className="col-12">

                        <div className="form-group">
                          {/* <label htmlFor="fullName">Full Name</label> */}
                          <Field type="email" className="form-control" name="email" placeholder='Enter Email' />
                          <ErrorMessage name="email" component="div" className="error_message" />
                        </div>
                        <div className="form-group">
                          {/* <label htmlFor="address">Address</label> */}
                          <Field type="password" className="form-control" name="password" placeholder='Enter Password' />
                          <ErrorMessage name="password" component="div" className="error_message" />
                        </div>
                        <div className="form-group">
                          {/* <label htmlFor="qualification">Qualification</label> */}
                          <Field type="text" className="form-control" name="name" placeholder='Enter Name' />
                          <ErrorMessage name="name" component="div" className="error_message" />
                        </div>
                        <div className="form-group">
                          {/* <label htmlFor="technicalSkills">Technical Skills</label> */}
                          <Field type="text" className="form-control" name="phone_number" placeholder='Enter Contact Number' />
                          <ErrorMessage name="phone_number" component="div" className="error_message" />
                        </div>
                        <div className="form-group">
                          {/* <label htmlFor="experience">Experience</label> */}
                          <Field type="text" className="form-control" name="city" placeholder='Enter City' />
                          <ErrorMessage name="city" component="div" className="error_message" />
                        </div>

                        <div className="form-group">
                          <label htmlFor="attachResume" className='mb-3'>Attach Resume</label>
                          <div className='file file--upload'>
                            <label htmlFor='input-file'>
                              <i className="fas fa-upload"></i>Upload
                            </label>
                            <input id='input-file' type='file' />
                          </div>
                          <ErrorMessage name="resume" component="div" className="error_message" />
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
