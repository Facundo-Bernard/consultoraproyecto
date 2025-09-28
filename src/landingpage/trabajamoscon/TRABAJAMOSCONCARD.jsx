import 'bootstrap/dist/css/bootstrap.min.css';
import Producto from './Producto';

function TRABAJAMOSCON() {
  const empresas = [
    { empresa: "Empresa 1", titulo: "Title", descripcion: "Description", link: "#" },
    { empresa: "Empresa 2", titulo: "Title", descripcion: "Description", link: "#" },
    { empresa: "Empresa 3", titulo: "Title", descripcion: "Description", link: "#" },
    { empresa: "Empresa 4", titulo: "Title", descripcion: "Description", link: "#" },
    { empresa: "Empresa 5", titulo: "Title", descripcion: "Description", link: "#" },
    { empresa: "Empresa 6", titulo: "Title", descripcion: "Description", link: "#" },
  ];

  return (
    <section className="container py-5 text-center">
      <h2 className="fw-bold mb-2">¿Con quiénes trabajamos?</h2>
      <p className="text-muted mb-5">Solucionamos problemas a:</p>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {empresas.map((e, idx) => (
          <Producto
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
