import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import LANDINGPAGE from './landingpage/LANDINGPAGE'
import Navbar from './landingpage/navbar/NAVBAR';
import Footer from './landingpage/footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
      <LANDINGPAGE></LANDINGPAGE>
      <Footer></Footer>
    </>
  )
}

export default App
