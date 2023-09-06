import React, { useRef, useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Form as BootstrapForm, Button } from 'react-bootstrap';
import Link from 'next/link';
import { toast } from 'react-toastify';

import RegisterPost from '@/services/api/auth_api/register_api';
import { useRouter } from 'next/router';
import UploadFileApi from '@/services/api/auth_api/upload_file_api';

const SignupValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  name: Yup.string().required('Name is required'),
  phone_number: Yup.string().required('Mobile Number is required'),
  city: Yup.string().required('City is required'),
  resume: Yup.mixed().required('Resume attachment is required'),
});

const Register: React.FC = () => {
  const router = useRouter();
  const [uploadResponse, setUploadResponse] = useState<{ file_url: string } | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSelectedFile = e.target.files?.[0];
    if (newSelectedFile) {
      try {
        const response = await UploadFileApi({ file: newSelectedFile });
        // Handle the uploadResponse as needed
        console.log('Upload Response:', response.file_url);

        // Set the upload response and selected file to the state
        setUploadResponse(response);
        setSelectedFile(newSelectedFile);

        // Continue with any other logic you need
      } catch (error) {
        console.error('Upload Error:', error);
      }
    }
  };

  const clearSelectedFile = () => {
    // Clear the selected file and upload response
    setSelectedFile(null);
    setUploadResponse(null);
  };

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  console.log('upload', uploadResponse?.file_url)
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
                  email: '',
                  password: '',
                  name: '',
                  phone_number: '',
                  city: '',
                  resume: uploadResponse?.file_url,
                }}
                validationSchema={SignupValidationSchema}

                onSubmit={async (values) => {
                  console.log('value', values)
                  try {
                    const response = await RegisterPost(values);
                    if (response.msg === 'success') {
                      toast.success('Registration successful', {
                        autoClose: 3000,
                        className: 'custom-toast',
                      });
                      // Redirect to the login page after successful registration
                      router.push('/login');
                    } else if (response.msg === 'error') {
                      toast.error(response.error, {
                        autoClose: 5000,
                        className: 'custom-toast',
                      });
                    }
                  } catch (error) {
                    console.error('Registration Error:', error);
                  }
                }}
              >
                {({ setFieldValue }) => (
                  <Form>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <Field type="email" className="form-control" name="email" placeholder="Enter Email" />
                          <ErrorMessage name="email" component="div" className="error_message" />
                        </div>
                        <div className="form-group">
                          <Field type="password" className="form-control" name="password" placeholder="Enter Password" />
                          <ErrorMessage name="password" component="div" className="error_message" />
                        </div>
                        <div className="form-group">
                          <Field type="text" className="form-control" name="name" placeholder="Enter Name" />
                          <ErrorMessage name="name" component="div" className="error_message" />
                        </div>
                        <div className="form-group">
                          <Field type="text" className="form-control" name="phone_number" placeholder="Enter Contact Number" />
                          <ErrorMessage name="phone_number" component="div" className="error_message" />
                        </div>
                        <div className="form-group">
                          <Field type="text" className="form-control" name="city" placeholder="Enter City" />
                          <ErrorMessage name="city" component="div" className="error_message" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="attachResume" className="mb-3">
                            Attach Resume
                          </label>
                          {selectedFile ? (
                            <div className="selected-file">
                              <span>{selectedFile.name}</span>
                              <span className="delete-file" onClick={clearSelectedFile} style={{ cursor: 'pointer' }}>
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
                                  setFieldValue('resume', filePath); // Set the file path as value
                                }}
                              />
                            </div>
                          )}
                          <ErrorMessage name="resume" component="div" className="error_message" />
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <div className="form-group mb-8">
                          <Button type="submit" variant="primary" className="w-50 rounded-5 text-uppercase">
                            Sign Up
                          </Button>
                        </div>
                        <p className="font-size-4 text-center heading-default-color">
                          Already have an account? <Link href="/login" className="text-primary">Log in</Link>
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
