import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import Specials from './components/Specials'
import CustomersSay from './components/CustomersSay'
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
      {/*<CallToAction /> */}
      
      <Footer />
    </>
  )
}

export default App
