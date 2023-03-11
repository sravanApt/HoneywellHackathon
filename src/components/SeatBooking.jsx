import { PrimaryButton } from '@fluentui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SeatComponent = ({ id, isBooked, handleBooking }) => (
    <div role={"button"} className='seat' style={{ width: '40px', height: '40px', border: "1px solid #444", borderRadius: '4px', margin: '8px', borderColor: isBooked ? 'red' : '#444'}} onClick={() => handleBooking(id)}>{isBooked}</div>
)
function Booking() {
    const [bookedSeats, setBookedSeats] = useState([]);
    let navigate = useNavigate();
    const handleBooking = (i) => {
        const data = !bookedSeats.includes(i) ? [...bookedSeats, i] : bookedSeats.filter(j => j !== i);
        console.log(i, data);
        setBookedSeats(data);
    };

    const handleSubmit = () => {
        navigate('/details');
    };

    return (
        <>
        <div className="book-content" style={{ padding: '5px', display: 'flex', flexWrap: 'wrap' }}>
            <SeatComponent id={1} isBooked={bookedSeats.includes(1)} handleBooking={handleBooking} />
            <SeatComponent id={2} isBooked={bookedSeats.includes(2)} handleBooking={handleBooking} />
            <SeatComponent id={3} isBooked={bookedSeats.includes(3)} handleBooking={handleBooking} />
        </div>
        <PrimaryButton text="Submit" onClick={handleSubmit} />
        </>
    );
}

export default Booking;
