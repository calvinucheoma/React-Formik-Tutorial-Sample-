import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';



const Select = (props) => {

    const {label, name, options, ...rest} = props;

  return (

    <div className='formControl'>
        <label htmlFor={name}> {label} </label>
        <Field name={name} as='select' id={name} {...rest}>
            {
                options.map((option) => {
                    return (
                        <option key={option.value} value={option.value}>
                            {option.key}
                        </option>
                    )
                })
            }
        </Field>
        <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Select