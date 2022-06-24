// import React from 'react';
// import {Formik, Form, Field, ErrorMessage, FieldArray, FastField} from 'formik';
// import * as Yup from 'yup';
// import TextError from './TextError';

// const initialValues = {
//     name: '',
//     email: '',
//     channel: '',
//     comments: '',
//     address: '',
//     social: {
//       facebook: '',
//       twitter: ''
//     },
//     phoneNumbers: ['', ''],
//     phNumbers: ['']
// };

// const onSubmit = (values) => {
//     console.log('Form data', values);
// };

// const validationSchema = Yup.object({
//     name: Yup.string().required('Required'),
//     email: Yup.string()
//         .email('Invalid email format')
//         .required('Required'),
//     channel: Yup.string().required('Required'),
//     address: Yup.string().required('Required'),
// });

// const validateComments = (value) => {
//   let error;
//   if(!value) {
//     error = 'Required';
//   }
//   return error;
// };



// const NewYouTubeForm = () => {

//   return (

//     <Formik 
//         initialValues={initialValues} 
//         validationSchema={validationSchema} 
//         onSubmit={onSubmit}
//         // validateOnChange={false}
//         // validateOnBlur={false}
//     >

//         <Form>

//           <div className='formControl'>
//             <label htmlFor='name'> Name</label>
//             <Field 
//                 type='text' 
//                 id='name' 
//                 name='name' 
//             />
//             <ErrorMessage name='name' component={TextError} />
//           </div>

//           <div className='formControl'>
//             <label htmlFor='email'> Email</label>
//             <Field 
//                 type='email' 
//                 id='email' 
//                 name='email' 
//             />
//             <ErrorMessage name='email' component={TextError} />
//           </div>

//           <div className='formControl'>
//             <label htmlFor='channel'> Channel</label>
//             <Field 
//                 type='text' 
//                 id='channel' 
//                 name='channel'
//             />
//             <ErrorMessage name='channel'>
//               {
//                 (errorMsg) => <div className='error'> {errorMsg} </div>
//               }
//             </ErrorMessage>
//           </div>

//           <div className='formControl'>
//             <label htmlFor='facebook'> Facebook Profile</label>
//             <Field 
//                 type='text' 
//                 id='facebook' 
//                 name='social.facebook'
//             />
//           </div>

//           <div className='formControl'>
//             <label htmlFor='twitter'> Twitter Profile</label>
//             <Field 
//                 type='text' 
//                 id='twitter' 
//                 name='social.twitter'
//             />
//           </div>

//           <div className='formControl'>
//             <label htmlFor='primaryPh'> Primary phone number</label>
//             <Field 
//                 type='text' 
//                 id='primaryPh' 
//                 name='phoneNumbers[0]'
//             />
//           </div>

//           <div className='formControl'>
//             <label htmlFor='secondaryPh'> Secondary phone number</label>
//             <Field 
//                 type='text' 
//                 id='secondaryPh' 
//                 name='phoneNumbers[1]'
//             />
//           </div>

//           <div className="formControl">
//             <label htmlFor="phNumbers"> List of phone numbers</label>
//             <FieldArray name='phNumbers'>
//               {
//                 (fieldArrayProps) => {
//                     const {push, remove, form} = fieldArrayProps;
//                     // console.log('form  errors', form.errors )
//                     const {values} = form;
//                     const {phNumbers} = values;

//                     return (
//                       <div>
//                         {
//                           phNumbers.map((phNumber,index) => (
//                              <div key={index}>
//                                <Field name={`phNumbers[${index}]`} />
//                                {
//                                  index > 0 && (
//                                   <button type='button' onClick={() => remove(index)}> {' '} - {' '} </button>
//                                   ) 
//                                }  
                               
//                                <button type='button' onClick={() => push(index)}>  {' '} + {' '} </button>
//                              </div>
//                           ))
//                         }

//                       </div>
//                     )
//                 }
//               }
//             </FieldArray>
//           </div>

//           <div className='formControl'>
//             <label htmlFor='address'> Address</label>
//             <FastField name='address'>
//               {
//                 (props) => {
//                    const {field, form, meta} = props
//                    return (
//                       <div>
//                          <input type='text' id='address' {...field} />
//                          {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null }
//                       </div>
//                    ) 
//                 }
//               }
//             </FastField>
//           </div>

//           <div className='formControl'>
//             <label htmlFor='comments'> Comments </label>
//             <Field id='comments' name='comments' as='textarea' validate={validateComments} />  
//             <ErrorMessage name='comments' component={TextError} />
//           </div>

//           <button type='submit'> Submit </button>

//         </Form>

//     </Formik>

//   )

// };

// export default NewYouTubeForm;



//Manually Triggering Validation

import React, {useState} from 'react';
import {Formik, Form, Field, ErrorMessage, FieldArray, FastField} from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
      facebook: '',
      twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: ['']
};

const savedValues = {
    name: 'Chukwuma',
    email: 'ucheomachukwuma@gmail.com',
    channel: 'Chuks clan',
    comments: 'Formiki',
    address: '21 Hannah Baker Street, Aba',
    social: {
      facebook: '',
      twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: ['']
};

const onSubmit = (values, onSubmitProps) => {
    console.log('Form data', values);
    // console.log('submit props', onSubmitProps)
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Required'),
    channel: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
});

const validateComments = (value) => {
  let error;
  if(!value) {
    error = 'Required';
  }
  return error;
};



const NewYouTubeForm = () => {

  const [formValues, setFormValues] = useState(null);

  return (

    <Formik 
        initialValues={formValues || initialValues} 
        validationSchema={validationSchema} 
        onSubmit={onSubmit}
        enableReinitialize
        // validateOnChange={false}
        // validateOnBlur={false}
        //validateOnMount
    >  
        {
          (formik) => {
            console.log('formik props', formik)
            return(
        <Form>

          <div className='formControl'>
            <label htmlFor='name'> Name</label>
            <Field 
                type='text' 
                id='name' 
                name='name' 
            />
            <ErrorMessage name='name' component={TextError} />
          </div>

          <div className='formControl'>
            <label htmlFor='email'> Email</label>
            <Field 
                type='email' 
                id='email' 
                name='email' 
            />
            <ErrorMessage name='email' component={TextError} />
          </div>

          <div className='formControl'>
            <label htmlFor='channel'> Channel</label>
            <Field 
                type='text' 
                id='channel' 
                name='channel'
            />
            <ErrorMessage name='channel'>
              {
                (errorMsg) => <div className='error'> {errorMsg} </div>
              }
            </ErrorMessage>
          </div>

          <div className='formControl'>
            <label htmlFor='facebook'> Facebook Profile</label>
            <Field 
                type='text' 
                id='facebook' 
                name='social.facebook'
            />
          </div>

          <div className='formControl'>
            <label htmlFor='twitter'> Twitter Profile</label>
            <Field 
                type='text' 
                id='twitter' 
                name='social.twitter'
            />
          </div>

          <div className='formControl'>
            <label htmlFor='primaryPh'> Primary phone number</label>
            <Field 
                type='text' 
                id='primaryPh' 
                name='phoneNumbers[0]'
            />
          </div>

          <div className='formControl'>
            <label htmlFor='secondaryPh'> Secondary phone number</label>
            <Field 
                type='text' 
                id='secondaryPh' 
                name='phoneNumbers[1]'
            />
          </div>

          <div className="formControl">
            <label htmlFor="phNumbers"> List of phone numbers</label>
            <FieldArray name='phNumbers'>
              {
                (fieldArrayProps) => {
                    const {push, remove, form} = fieldArrayProps;
                    // console.log('form  errors', form.errors )
                    const {values} = form;
                    const {phNumbers} = values;

                    return (
                      <div>
                        {
                          phNumbers.map((phNumber,index) => (
                             <div key={index}>
                               <Field name={`phNumbers[${index}]`} />
                               {
                                 index > 0 && (
                                  <button type='button' onClick={() => remove(index)}> {' '} - {' '} </button>
                                  ) 
                               }  
                               
                               <button type='button' onClick={() => push(index)}>  {' '} + {' '} </button>
                             </div>
                          ))
                        }

                      </div>
                    )
                }
              }
            </FieldArray>
          </div>

          <div className='formControl'>
            <label htmlFor='address'> Address</label>
            <FastField name='address'>
              {
                (props) => {
                   const {field, form, meta} = props
                   return (
                      <div>
                         <input type='text' id='address' {...field} />
                         {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null }
                      </div>
                   ) 
                }
              }
            </FastField>
          </div>

          <div className='formControl'>
            <label htmlFor='comments'> Comments </label>
            <Field id='comments' name='comments' as='textarea' validate={validateComments} />  
            <ErrorMessage name='comments' component={TextError} />
          </div>

          {/* <button type='button' onClick={() => formik.validateField('comments')}> Validate comments  </button>
          <button type='button' onClick={() => formik.validateForm()}> Validate all </button>
          <button type='button' onClick={() => formik.setFieldTouched('comments')}> Visited comments  </button>
          <button 
            type='button' 
            onClick={() => formik.setTouched({
                  name: true,
                  email: true,
                  channel: true,
                  comments: true
              })}
          >
             Visited all 
          </button> */}

          <button type='button' onClick={() => setFormValues(savedValues)}> Load saved data </button> 
          <button type='reset'> Reset </button>

          {/* <button type='submit' disabled={!(formik.dirty && formik.isValid)}> Submit </button> */}

          <button type='submit' disabled={!formik.isValid || formik.isSubmitting}> Submit </button>
        </Form>
            )
          }
        }



    </Formik>

  )

};

export default NewYouTubeForm;