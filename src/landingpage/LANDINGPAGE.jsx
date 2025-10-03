
import ANNOUNCE from './announce/ANNOUNCE'
import TRABAJAMOSCON from './trabajamoscon/TRABAJAMOSCON'
import Soluciones from './soluciones/Soluciones'
import QuienesSomos from './quienessomos/QuienesSomos'
function LANDINGPAGE() {

  return (
    <>
        <ANNOUNCE></ANNOUNCE>
        <QuienesSomos></QuienesSomos>
        <TRABAJAMOSCON></TRABAJAMOSCON>
        <Soluciones></Soluciones>
    </>
  )
}

export default LANDINGPAGE
