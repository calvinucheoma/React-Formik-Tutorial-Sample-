import React from 'react';
import ChakraInput from './ChakraInput';
import CheckBoxGroup from './CheckBoxGroup';
import DatePicker from './DatePicker';
import Input from './Input';
import Radio from './Radio';
import Select from './Select';
import TextArea from './TextArea';



const FormikControl = (props) => {

    const {control, ...rest} = props;

    switch (control) {
        case 'input': 
            return <Input {...rest} />
        case 'textarea':
            return <TextArea {...rest} />
        case 'select':
            return <Select {...rest} />
        case 'radio':
            return <Radio {...rest} />
        case 'checkbox':
            return <CheckBoxGroup {...rest} />
        case 'date':
            return <DatePicker {...rest} />
        case 'chakrainput':
            return <ChakraInput {...rest} />
        default:
             return null
    }

};

export default FormikControl;