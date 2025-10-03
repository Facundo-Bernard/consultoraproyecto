import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

function TRABAJAMOSCON() {
  const empresas = Array.from({ length: 6 }, (_, i) => `Empresa ${i + 1}`);

  return (
    <section className="container py-5 text-center">
      <h2 className="fw-bold mb-2">¿Con quiénes trabajamos?</h2>
      <p className="text-muted mb-5">Solucionamos problemas a:</p>

      <div className="row row-cols-1  rounded p-3 pb-4  row-cols-md-2 row-cols-lg-3 g-4">
        {empresas.map((nombre, idx) => (
          <div className="col" key={idx}>
            <motion.div
              className="card h-100 rounded-4 shadow-sm border"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.2, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="card-body d-flex flex-column">
                <h5 className="fw-bold mb-3">“{nombre}”</h5>
                <div className="d-flex align-items-center mb-3">
                  <img
                    src="https://via.placeholder.com/48"
                    alt="avatar"
                    className="rounded-circle me-3"
                  />
                  <div>
                    <h6 className="mb-0 fw-semibold">Title</h6>
                    <small className="text-muted">Description</small>
                  </div>
                </div>
                <div className="mt-auto d-flex justify-content-between">
                  <a href="#" className="link-primary text-decoration-none">Ver más</a>
                  <button className="btn btn-sm btn-outline-primary rounded-pill px-3">Visitar</button>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TRABAJAMOSCON;
