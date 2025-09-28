import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BannerSVG.css";

export default function Banner() {
  return (
    <section className="banner rounded mr-1 ml-1 mt-1" aria-label="Banner hero">
      <div className="banner-overlay"></div>

      <div className="banner-content">
        <h2 className="banner-title">Consultora Estratégica</h2>
        <p className="banner-subtitle">
          Diseñamos y ejecutamos estrategias digitales
        </p>
        <p className="banner-subtitle">
          orientadas a resultados medibles.
        </p>

        <a href="#contacto" className="banner-cta">Contáctanos</a>
      </div>
    </section>
  );
}
