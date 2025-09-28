import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="nav-wrap rounded" aria-label="Sitio principal">
      <nav className="navbar navbar-expand-lg navbar-dark nav rounded-bottom">
        <div className="container-fluid">
          {/* Logo */}
          <a href="/" className="navbar-brand d-flex align-items-center" aria-label="Inicio">
            <img src="/logo.svg" alt="Logo" className="nav-logo" />
          </a>

          {/* Botón toggler */}
          <button
            className="navbar-toggler shadow-none"
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
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto gap-3 text-end">
              <li className="nav-item">
                <a href="#servicios" className="nav-link">Servicios</a>
              </li>
              <li className="nav-item">
                <a href="#proyectos" className="nav-link">Proyectos</a>
              </li>
              <li className="nav-item">
                <a href="#equipo" className="nav-link">Equipo</a>
              </li>
              <li className="nav-item">
                <a href="#contacto" className="nav-link">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
