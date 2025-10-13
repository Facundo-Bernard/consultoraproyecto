import { motion } from 'framer-motion';

function TRABAJAMOSCONCARD({ empresa, titulo, descripcion, link }) {
  return (
    <div className="col">
      <motion.div
        className="card h-100 rounded-4 shadow-sm border"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        whileHover={{ y: -6, scale: 1.02 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="card-body d-flex flex-column">
          <h5 className="fw-bold mb-3">“{empresa}”</h5>
          <div className="d-flex align-items-center mb-3">
            <img
              src="https://via.placeholder.com/48"
              alt={empresa}
              className="rounded-circle me-3"
            />
            <div>
              <h6 className="mb-0 fw-semibold">{titulo}</h6>
              <small className="text-muted">{descripcion}</small>
            </div>
          </div>
          <div className="mt-auto d-flex justify-content-between">
            <a href={link} className="link-primary text-decoration-none">
              Ver más
            </a>
            <button
              onClick={() => window.open(link, "_blank")}
              className="btn btn-sm btn-outline-primary rounded-pill px-3"
            >
              Visitar
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default TRABAJAMOSCONCARD;
