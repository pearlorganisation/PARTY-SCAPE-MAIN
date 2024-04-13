import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/Layout/Header.jsx'
import Footer from './components/Layout/Footer.jsx'

import './assets/js/scripts.js'

function App() {
  

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
