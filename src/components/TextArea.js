import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';



const TextArea = (props) => {

    const {label, name, ...rest} = props;

  return (

    <div className='formControl'>
        <label htmlFor={name}> {label} </label>
        <Field id={name} name={name} {...rest} as='textarea' />
        <ErrorMessage name={name} component={TextError} />
    </div>

  )

};

export default TextArea;