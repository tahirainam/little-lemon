import NavBar from './components/NavBar'
import Footer from './components/Footer'

import HomePage from './components/HomePage'
import Specials from './components/Specials'
import CustomersSay from './components/CustomersSay'
import BookingPage from './components/BookingPage'

import About from "./Pages/About";
import Login from "./Pages/Login";
import Menu from "./Pages/Menu";
import OrderOnline from "./Pages/OrderOnline";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css'

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <Specials />
              <CustomersSay />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/order" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
