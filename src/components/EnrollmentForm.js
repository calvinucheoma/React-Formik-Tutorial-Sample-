import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';


const EnrollmentForm = () => {

  const skills = [
    {key: 'HTML', value: 'html'},
    {key: 'CSS', value: 'css'},
    {key: 'JavaScript', value: 'javascript'}
  ];

    const courseOptions = [
    {key: 'Select your course', value: ''},
    {key: 'React', value: 'react'},
    {key: 'Angular', value: 'angular'},
    {key: 'Vue', value: 'vue'}
  ];
  
  const initialValues = {
    email: '',
    bio: '',
    course: '',
    skillset: [],
    date: null
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    bio: Yup.string().required('Required'),
    course: Yup.string().required('Required'),
    //skillset: Yup.array().min(1, 'Please select at least one course').required('Please select at least one course'),
    date: Yup.date().required('Required').nullable()
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
  };


  return (

    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >

        {
            (formik) => {
                return (

                    <Form>

                        <FormikControl
                            control='input'
                            type='email'
                            label='Email'
                            name='email'
                        />

                        <FormikControl
                            control='textarea'
                            label='Bio'
                            name='bio'
                        />

                        <FormikControl
                            control='select'
                            label='Course'
                            name='course'
                            options={courseOptions}
                        />

                        <FormikControl
                            control='checkbox'
                            label='Your Skillset'
                            name='skillset'
                            options={skills}
                        />

                        <FormikControl
                            control='date'
                            label='Course Date'
                            name='date'
                        />

                        <button type='submit' disabled={!formik.isValid}>
                            Submit
                        </button>

                    </Form>
                )
            }
        }

    </Formik>
  )
}

export default EnrollmentForm