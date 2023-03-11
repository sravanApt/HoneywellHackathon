import { TextField } from '@fluentui/react/lib/TextField';
import { useState } from 'react';

const textFieldStyles = { fieldGroup: { width: 300 } };

const InputComponent = (props) => {
    const [value, setValue] = useState(props.value || '');

    const changeHandler = (e, newVal) => {
        setValue(newVal);

        props.onChange && props.onChange(newVal);
    };

    return (
        <div className='input-comp'>
            <TextField
                label={props.label || ''}
                value={value}
                onChange={changeHandler}
                styles={textFieldStyles}
            />
        </div>
    )
};

export default InputComponent;