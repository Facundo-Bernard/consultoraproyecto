import React from "react";
import { motion } from "framer-motion";
import "./QuienesSomos.css";

export default function QuienesSomos() {
  return (
    <section className="qs-section py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Lado Izquierdo */}
          <div className=" text-black col-lg-6">
            <motion.div
              className="qs-content"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="qs-title  display-4 fw-bold mb-4">
                ¿Quiénes <span className="highlight">somos?</span>
              </h2>
              <p className="qs-sub text-dark lead  mb-4">
                Somos una <strong>consultora estratégica</strong> que diseña y ejecuta
                soluciones digitales orientadas a resultados medibles.
                Nuestro enfoque combina innovación, análisis y creatividad
                para transformar los desafíos de nuestros clientes en oportunidades.
              </p>

            </motion.div>
          </div>

          {/* Lado Derecho */}
          <div className="col-lg-6 text-center">
            <motion.div
              className="qs-image-wrapper position-relative"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="qs-bg-circle"></div>
              <motion.img
                src="https://source.unsplash.com/500x500/?business,team"
                alt="Aca va a ir una foto nuestra"
                className="img-fluid rounded-4 shadow-lg qs-img"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
              />

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
