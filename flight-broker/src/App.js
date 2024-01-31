
import './App.css';
import { useState } from 'react';

// Build a component that books a one-way or return flight for specified dates.

// Requirements
// The user can choose from two flight options: "One-way flight" and "Return flight".
// Input date fields
// The date input fields represent the departure date and return dates.
// The return date input is displayed if the "Return flight" option is chosen, hidden otherwise.
// Form validation should be done upon submission for invalid fields:
// Dates are in the past.
// Return date is before the departure date.
// Upon successful submission, a message is displayed informing the user of the selection:
// One-way flight: "You have booked a one-way flight on YYYY-MM-DD"
// Return-flight "You have booked a return flight, departing on YYYY-MM-DD and returning on YYYY-MM-DD"
// Here's an example of the component, with both "One-way flight" and "Return flight" options.
const DAY_IN_SECOND = 24 * 60 * 60 * 1000;
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, 0);
  const day = (date.getDate()).toString().padStart(2, '0');
  return [year, month, day].join("-");
}
const TODAY = formatDate(new Date());

function App() {
  
  const [flightMode, setFlightMode] = useState('one-way');
  const [departure, setDeparture] = useState(formatDate(new Date(Date.now() + DAY_IN_SECOND)));
  const [returnDate, setReturnDate] = useState(departure);
  console.log(departure)

 const submitHandler = (e)=> {
     e.preventDefault();
     if (flightMode === 'one-way') {
      alert(
        `You have booked a one-way flight on ${departure}`,
      );
      return;
    }

    alert(
      `You have booked a return flight, departing on ${departure} and returning on ${returnDate}`,
    );
  }
  console.log("render")
  return (
   <form method='POST' onSubmit={submitHandler}>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: '400px', height: '200px', marginTop: '20px', marginRight: '20px'}}>
    <select onChange={ (e)=> { setFlightMode(e.target.value)}} value={flightMode}>
      <option value="one-way">one-way</option>
      <option value="return">return</option>
    </select>
    <input type="date"  name='departure'  value={departure} onChange={(e)=> { setDeparture(e.target.value); setReturnDate(e.target.value)}} min={TODAY}/>
    {flightMode === 'return' && (<input type='date' name='arrival' value={returnDate} onChange={(e)=> {setReturnDate(e.target.value)}} min={departure}/>)}
    <button type='submit'>Submit</button>
    </div>
  </form>
  );
}

export default App;
