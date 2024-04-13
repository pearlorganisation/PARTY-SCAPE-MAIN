import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/Layout/Header.jsx'
import Footer from './components/Layout/Footer.jsx'

import './assets/js/scripts.js'
import PrivateTheaters from './pages/PrivateTheaters/PrivateTheaters.jsx'
import Gallery from './pages/Gallery/Gallery.jsx'
import AboutUs from './pages/AboutUs/AboutUs.jsx'
import ContactUs from './pages/ContactUs/ContactUs.jsx'

import NotFound from './pages/NotFound/NotFound.jsx'

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/privatetheaters" element={<PrivateTheaters />}/>
      <Route path="/gallery" element={<Gallery />}/>
      <Route path="/aboutus" element={<AboutUs />}/>
      <Route path="/contactus" element={<ContactUs />}/>
      <Route path="*" element={<NotFound />}/>
      
    </Routes>
    <Footer />
    </>
  )
}

export default App
