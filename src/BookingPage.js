import {useState} from "react"; 
function BookingPage(props) {
    const [resDate, setResDate] = useState("");
    const [resTime, setResTime] = useState("17:00");
    const [guests, setGuests] = useState(""); 
    const [occasion, setOccasion] = useState("Birthday");

    const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        props.dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
    };
    
    return (
        <form onSubmit={props.submitForm}>
        <h4>Booking table</h4>
        <label htmlFor="res-date">Choose date</label>
        <input 
            type="date" 
            id="res-date"
            value={props.dispatch.payload} 
            onChange={handleDateChange} 
            required
        />
        <label htmlFor="res-time">Choose time</label>
        <select 
            id="res-time"
            value={resTime} 
            onChange={(e) => setResTime(e.target.value)}
            required
        >
           {props.availableTimes.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input 
            type="number" 
            placeholder="1" 
            min="1" 
            max="10" 
            id="guests" 
            value={guests} 
            onChange={(e) => setGuests(e.target.value)}
            required
        />
        <label htmlFor="occasion">Occasion</label>
        <select 
            id="occasion"
            value={occasion} 
            onChange={(e) => setOccasion(e.target.value)}
            required
        >
           <option value="Birthday">Birthday</option>
           <option value="Anniversary">Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" aria-label="On Click" />
     </form>
    )
}

export default BookingPage