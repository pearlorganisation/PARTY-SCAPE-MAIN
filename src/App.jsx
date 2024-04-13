import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/Layout/Header.jsx'
import Footer from './components/Layout/Footer.jsx'

import './assets/js/scripts.js'
import Services from './pages/Services/Services.jsx'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
