'use client'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Form as BootstrapForm, FormCheck } from 'react-bootstrap';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { fetchAccessToken } from '@/store/slices/auth_slice/login_slice';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import getAccessTokenApi from '@/services/api/auth_api/login_api';
import { useRouter } from 'next/router';

const LoginValidationSchema = Yup.object().shape({
  usr: Yup.string().email('Invalid email').required('Email is required'),
  pwd: Yup.string().required('Password is required'),
});

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const queryClient = useQueryClient(); // Create a query client instance
  const mutation = useMutation((values:any) => getAccessTokenApi(values.usr, values.pwd), {
    // onSuccess: (response:any) => {
    //   // On success, refetch data if needed
    //   queryClient.invalidateQueries('accessToken'); // Replace 'accessToken' with your query key
    // },
  });

  const handleSubmit = (values:any) => {
    console.log("token handle submit",values)
    mutation.mutate(values); // Start the mutation
    dispatch(fetchAccessToken(values) as any)
    router.push('/')
  };

  return (
    <>
      <div className="bg-white overflow-hidden login-wrapper shadow-lg">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="bg-white-2 h-100 p-5">
              <div className='mt-2 mb-2 text-center'>
                <h5>Logo</h5>
              </div>
              <Formik
                initialValues={{
                  usr: '',
                  pwd: '',
                }}
                validationSchema={LoginValidationSchema}
                onSubmit={(values) => {
                  handleSubmit(values);
              }}
              >
                <Form>
                  <div className="form-group">
                    <label htmlFor="email" className="font-size-4 text-black-2 font-weight-semibold line-height-reset">E-mail</label>
                    <Field type="email" className="form-control" name="usr" placeholder="example@gmail.com" />
                    <ErrorMessage name="usr" component="div" className="error_message" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="font-size-4 text-black-2 font-weight-semibold line-height-reset">Password</label>
                    <div className="position-relative">
                      <Field type="password" className="form-control" name="pwd" placeholder="Enter password" />
                    </div>
                    <ErrorMessage name="pwd" component="div" className="error_message" />
                  </div>
                  <div className="form-group d-flex flex-wrap justify-content-end align-items-center">
                    {/* <FormCheck>
                      <Field type="checkbox" name="remember" id="terms-check" as={FormCheck.Input} />
                      <FormCheck.Label className="font-size-3 mb-0 line-height-reset mb-1 d-block">
                        Remember password
                      </FormCheck.Label>
                    </FormCheck> */}
                    <a href="" className="font-size-3 text-dodger line-height-reset" style={{textDecoration:'underline'}}>Forget Password</a>
                  </div>
                  <div className="form-group mb-8 text-center">
                    <button type="submit" className="btn btn-primary btn-medium w-50 rounded-5 text-uppercase">Log in</button>
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
