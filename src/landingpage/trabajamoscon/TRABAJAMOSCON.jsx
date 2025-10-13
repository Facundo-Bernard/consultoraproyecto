import 'bootstrap/dist/css/bootstrap.min.css';
import TRABAJAMOSCONCARD from './TRABAJAMOSCONCARD';

function TRABAJAMOSCON() {
  const empresas = [
    { empresa: "Clarín", titulo: "Estrategia Digital", descripcion: "Optimizamos su presencia online", link: "#" },
    { empresa: "TechNova", titulo: "Desarrollo Web", descripcion: "Creamos soluciones escalables", link: "#" },
    { empresa: "MediaHouse", titulo: "Campañas Performance", descripcion: "Resultados medibles y claros", link: "#" },
    { empresa: "FinHub", titulo: "Consultoría UX", descripcion: "Mejoramos la experiencia del usuario", link: "#" },
    { empresa: "NextPlay", titulo: "Producción de Videojuegos", descripcion: "Desarrollamos títulos propios y para terceros", link: "#" },
    { empresa: "StartupX", titulo: "Growth & Branding", descripcion: "Impulsamos marcas desde cero", link: "#" },
  ];

  return (
    <section className="container py-5 text-center">
      <h2 className="fw-bold mb-2">¿Con quiénes trabajamos?</h2>
      <p className="text-muted mb-5">Solucionamos problemas a:</p>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {empresas.map((e, idx) => (
          <TRABAJAMOSCONCARD
            key={idx}
            empresa={e.empresa}
            titulo={e.titulo}
            descripcion={e.descripcion}
            link={e.link}
          />
        ))}
      </div>
    </section>
  );
}

export default TRABAJAMOSCON;
