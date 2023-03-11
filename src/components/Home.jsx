import InputComponent from './input-component';
import DatePickerComponent from './date-picker';
import { PrimaryButton } from '@fluentui/react';
import { useNavigate } from 'react-router-dom';

function Home() {
    let navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/book');
    }
    return (
        <div className="content">
            <InputComponent label="From" />
            <InputComponent label="To" />
            <DatePickerComponent label="Select Date" />
            <PrimaryButton text="Submit" onClick={handleSubmit} />
        </div>
    );
}

export default Home;
