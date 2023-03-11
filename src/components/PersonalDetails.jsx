import InputComponent from './input-component';
import { PrimaryButton } from '@fluentui/react';
import { useNavigate } from 'react-router-dom';

function Personaldetails() {
    let navigate = useNavigate();
    const handleSubmit = () => {
    }
    return (
        <div className="content">
            <InputComponent label="First Name" />
            <InputComponent label="First Name" />
            <PrimaryButton text="Submit" onClick={handleSubmit} />
        </div>
    );
}

export default Personaldetails;
