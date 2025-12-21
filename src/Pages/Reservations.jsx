import '../css/Reservations.css';


function Reservations() {
    return (
        <div className="reservations-container">
            <div className="reservations-card">
                {/* Page Title */}
                <h1 className="reservations-title">Reserve a Table</h1>
                <p className="reservations-tagline">Enjoy fresh flavors at Little Lemon—book your table today!</p>

                {/* Reservation Form */}
                <form className="reservations-form">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="Enter your full name" required />

                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="Enter your email" required />

                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" placeholder="Enter your phone number" required />

                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" required />

                    <label htmlFor="time">Time</label>
                    <input type="time" id="time" required />

                    <label htmlFor="guests">Number of Guests</label>
                    <input type="number" id="guests" min="1" max="20" defaultValue="2" required />

                    <label htmlFor="requests">Special Requests</label>
                    <textarea id="requests" placeholder="Any special requests?"></textarea>

                    <button type="submit">Reserve Now</button>
                </form>

                {/* Optional Note */}
                <p className="reservations-note">* Please provide at least 24 hours notice for reservations.</p>
            </div>
        </div>
    );
}

export default Reservations;
