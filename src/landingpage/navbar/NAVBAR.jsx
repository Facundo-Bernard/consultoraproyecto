// src/components/Navbar/Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [hovered, setHovered] = useState(false);
  const collapseRef = useRef(null);
  const location = useLocation();

  // Solo en mobile: al cambiar de ruta cierro collapse y desplegable
  useEffect(() => {
    if (window.innerWidth < 992) {
      setHovered(false);
      const collapseEl = collapseRef.current;
      if (collapseEl && window.bootstrap) {
        const bsCollapse = window.bootstrap.Collapse.getOrCreateInstance(
          collapseEl,
          { toggle: false }
        );
        bsCollapse.hide();
      }
    }
  }, [location]);

  return (
    <header
      className="position-sticky top-0 w-100"
      style={{ zIndex: 1050, transition: "all 0.4s ease" }}
      aria-label="Barra principal"
    >
      <nav
        className="navbar navbar-expand-lg navbar-dark py-2"
        style={{
          background:
            "linear-gradient(90deg, rgb(31,42,112) 0%, rgba(26,26,80,0.93) 15%, rgba(20,20,48,0.93) 30%, rgba(13,13,32,0.93) 50%, rgba(10,10,10,0.84) 100%)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          transition: "background 0.4s ease",
        }}
      >
        <div className="container-fluid px-4">
          {/* Logo */}
          <a
            href="/"
            className="navbar-brand d-flex align-items-center"
            aria-label="Inicio"
          >
            <img
              src="/logo.svg"
              alt="Logo"
              height="26"
              className="me-2"
              style={{ width: "auto" }}
            />
          </a>

          {/* Botón hamburguesa */}
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Alternar navegación"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div
            ref={collapseRef}
            className="collapse navbar-collapse justify-content-end"
            id="mainNav"
          >
            <ul className="navbar-nav gap-4 align-items-center">
              <li
                className="nav-item position-relative"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <span
                  className="nav-link fw-medium text-white position-relative px-0"
                  style={{
                    transition: "color 0.3s ease, transform 0.3s ease",
                  }}
                >
                  Nuestras Soluciones
                </span>
              </li>

              <li className="nav-item">
                <a
                  href="#equipo"
                  className="nav-link text-white fw-medium px-0"
                >
                  Equipo
                </a>
              </li>

              <li className="nav-item">
                <Link
                  to="/contactos"
                  className="nav-link text-white fw-medium px-0"
                >
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Panel estilo Apple que baja todo */}
      <div
        className={`position-absolute start-0 w-100 soluciones-panel ${
          hovered ? "show" : ""
        }`}
        style={{
          top: "calc(100%)",
          background: "rgba(10,10,30,0.92)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
          opacity: hovered ? 1 : 0,
          visibility: hovered ? "visible" : "hidden",
          transform: hovered ? "translateY(0)" : "translateY(-15px)",
          transition: "all 0.35s ease",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="container py-4">
          <div className="row text-center text-white">
            <div className="col-12 col-md-4 mb-3">
              <Link
                to="/softwarepage"
                className="nav-link text-white fw-medium px-0"
              >
                Software e IA
              </Link>
              <p className="text-white-50 small mb-0">
                Desarrollo a medida y sistemas web, entrenamiento de ia
              </p>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <Link to="/marketingpage" className="fw-semibold nav-link mb-2">
                Graphics y Marketing
              </Link>
              <p className="text-white-50 small mb-0">
                Campañas digitales, Animaciones / Diseño y posicionamiento
              </p>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <h6 className="fw-semibold mb-2">Gaming</h6>
              <p className="text-white-50 small mb-0">
                Experiencia en gaming y desarrollo de videojuegos
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}