import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactoForm from './CONTACTANOS/CONTACTANOS'
import LANDINGPAGE from './landingpage/LANDINGPAGE'
import Softwarepage from './paginasconsulta/softwarepage/Softwarepage'
function ROUTES() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LANDINGPAGE></LANDINGPAGE>}></Route>
        <Route path="/contactos" element={<ContactoForm />}></Route>
        <Route path="/softwarepage" element={<Softwarepage></Softwarepage>}></Route>
      </Routes>
    </>
  )
}

export default ROUTES