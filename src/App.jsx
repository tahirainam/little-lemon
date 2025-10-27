import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import Specials from './components/Specials'
import CustomersSay from './components/CustomersSay'
import Chicago from './components/Chicago'
import BookingPage from './components/BookingPage'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
// import { Routes, Route } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <>
      {/*<Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>*/}
      <NavBar />
      <HomePage />
      <Specials />
      <CustomersSay />
      <Chicago />
      <BookingPage />
      <CallToAction />
      <Footer />
    </>
  )
}

export default App
