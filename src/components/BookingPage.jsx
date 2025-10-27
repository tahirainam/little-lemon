// (the component for the table reservations page
import { useState } from "react";

function BookingPage() {
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        guests: 1,
        occasion: "Birthday"
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            date: "",
            time: "",
            guests: 1,
            occasion: "Birthday"
        });
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    return (


        <div>
            <h2>Table Reservation</h2>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div>
                    <label htmlFor="Date">Date</label>
                    <input type="date" id="Date" name="Date" required onChange={(e) => setFormData({...formData, date: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="Time">Time</label>
                    <input type="time" id="Time" name="Time" required onChange={(e) => setFormData({...formData, time: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="Guests">Number of guests</label>
                    <input type="number" id="Guests" name="Guests" required onChange={(e) => setFormData({...formData, guests: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="Occasion">Occasion</label>
                    <select id="Occasion" name="Occasion">
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                    </div>
                    <button disabled={!formData.date || !formData.time || !formData.guests} type="submit">Submit Reservation</button>
            </fieldset>
        </form>
        </div>
    );
}
export default BookingPage;
