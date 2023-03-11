import * as React from 'react';
import {
    DatePicker,
    DayOfWeek,
    mergeStyles,
} from '@fluentui/react';

const rootClass = mergeStyles({ maxWidth: 300, selectors: { '> *': { marginBottom: 15 } } });

const DatePickerComponent = (props) => {
    const [firstDayOfWeek, setFirstDayOfWeek] = React.useState(DayOfWeek.Sunday);

    const [value, setValue] = React.useState(props.value || '');

    const changeHandler = (e, newVal) => {
        setValue(newVal);

        props.onChange && props.onChange(newVal);
    };

    return (
        <div className={rootClass}>
            <DatePicker
                label={props.label || ''}
                firstDayOfWeek={firstDayOfWeek}
                placeholder="Select a date..."
                ariaLabel="Select a date"
                value={value}
                onChange={changeHandler}
            />
        </div>
    );
};

export default DatePickerComponent;
