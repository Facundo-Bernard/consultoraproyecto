import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BannerSVG.css";

export default function Banner() {
  return (
    <section className="banner rounded mr-1 ml-1 mt-1" aria-label="Banner hero">
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
        rel="stylesheet"
      />
      <link href="https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@600;700&display=swap" rel="stylesheet"></link>

      <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&display=swap" rel="stylesheet"></link>


      <div className="banner-overlay"></div>

      <div className="banner-content">
        <h2
          style={{
            fontFamily: "'Saira Condensed', sans-serif",
            fontSize: "4rem",
            textTransform: "uppercase",
            letterSpacing: "1px",
            color: "#fff",
          }}
        >
          Platoon Digital
        </h2>

        <p className="banner-subtitle">
          Consultora digital enfocada en ejecución y resultados.
        </p>
        <p className="banner-subtitle">
          Todo en un mismo equipo
        </p>

        <a href="#contacto" className="banner-cta">Contáctanos</a>
      </div>
    </section>
  );
}
