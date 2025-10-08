import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactoForm from './CONTACTANOS/CONTACTANOS'
import LANDINGPAGE from './landingpage/LANDINGPAGE'
import Softwarepage from './paginasconsulta/softwarepage/Softwarepage'
import MarketingPage from './paginasconsulta/marketingpage/MarketingPage'
function ROUTES() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LANDINGPAGE></LANDINGPAGE>}></Route>
        <Route path="/contactos" element={<ContactoForm />}></Route>
        <Route path="/softwarepage" element={<Softwarepage></Softwarepage>}></Route>
        <Route path = "/marketingpage" element={<MarketingPage></MarketingPage>}></Route>
      </Routes>
    </>
  )
}

export default ROUTES