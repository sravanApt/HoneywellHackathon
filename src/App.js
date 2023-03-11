import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import SeatBooking from './components/SeatBooking';
import PersonalDetails from "./components/PersonalDetails";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/book" element={<SeatBooking />} />
        <Route exact path="/details" element={<PersonalDetails />} />
      </Routes>
    </div>
  );
}

export default App;
