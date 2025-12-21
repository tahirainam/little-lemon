import '../css/Login.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="login-container">
            <div className="login-card">
                {/* Logo / Branding */}
                <h1 className="login-logo">Little Lemon</h1>
                <p className="login-tagline">Fresh flavors await you</p>

                {/* Login Form */}
                <form className="login-form">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" required />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" required />

                    <div className="login-options">
                        <label>
                            <input type="checkbox" /> Remember Me
                        </label>
                        <a href="#">Forgot Password?</a>
                    </div>

                    <button type="submit">Login</button>
                </form>

                {/* Sign Up Link */}
                <p className="signup-link">
    New here? <Link to="/signup">Sign Up</Link>
</p>
            </div>
        </div>
    );
}

export default Login;
