import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="mt-5 pt-5 pb-4"
      style={{
        background: "linear-gradient(90deg, #1f2a70 0%, #1a1a50 15%, #141430 30%, #0d0d20 50%, #0a0a0a 100%)",
        color: "#ffffff",
        borderTop: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 -4px 15px rgba(0,0,0,0.3)",
        borderRadius: "12px 12px 0 0",
        transition: "background 0.4s ease",
      }}
    >
      <div className="container">
        <div className="row text-center text-md-start">

          {/* Redes sociales */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h6 className="fw-light mb-3">Síguenos</h6>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover-opacity"
              >
                <FaFacebook size={22} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover-opacity"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="https://wa.me/123456789"
                target="_blank"
                rel="noreferrer"
                className="text-white hover-opacity"
              >
                <FaWhatsapp size={22} />
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h6 className="fw-light mb-3">Contacto</h6>
            <p className="mb-1 text-light-opacity">Tel: +54 11 1234 5678</p>
            <p className="mb-0 text-light-opacity">Email: contacto@vidrieriaflash.com</p>
          </div>

          {/* Ubicación */}
          <div className="col-12 col-md-4">
            <h6 className="fw-light mb-3">Ubicación</h6>
            <p className="mb-1 text-light-opacity">Av. Siempreviva 123</p>
            <p className="mb-0 text-light-opacity">Florida, Buenos Aires, Argentina</p>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="text-center mt-4">
          <small className="text-light-opacity">
            © {new Date().getFullYear()} VidrieríaFlash - Todos los derechos reservados
          </small>
        </div>
      </div>

      {/* Estilos extra para hover y opacidad */}
      <style jsx>{`
        .hover-opacity:hover {
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }
        .text-light-opacity {
          color: rgba(255, 255, 255, 0.7);
        }
      `}</style>
    </footer>
  );
}
