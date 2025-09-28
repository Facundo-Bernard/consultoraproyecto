import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import LANDINGPAGE from './landingpage/LANDINGPAGE'
import Navbar from './landingpage/navbar/NAVBAR';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
      <LANDINGPAGE></LANDINGPAGE>
    </>
  )
}

export default App
