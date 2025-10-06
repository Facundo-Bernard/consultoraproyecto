import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactoForm from './CONTACTANOS/CONTACTANOS'
import LANDINGPAGE from './landingpage/LANDINGPAGE'


function ROUTES() {

  return (
    <>
    <Routes>
    <Route path="/" element={<LANDINGPAGE></LANDINGPAGE>}></Route>
      <Route path="/contactos" element={<ContactoForm/>}></Route>
    </Routes>     
    </>
  )
}

export default ROUTES