import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function soluciones() {
  const reduce = useReducedMotion();

  const data = [
    {
      title: "Soluciones en Software e IA",
      items: ["Desarrollo de programas empresariales", "Desarrollo web", "Entrenamiento e implementacion IA"],
      variant: "light",
      cta: "Ver más"
    },
    {
      title: "Soluciones en Graphics y Marketing ",
      items: ["Enfoque de marketing multicanal", "Consultoria SEO", "Motion Graphics", "Diseño grafico integral"],
      variant: "primary",
      highlighted: true,
      cta: "Pedir presupuesto"
    },
    {
      title: "Soluciones en Gaming",
      items: ["Diseño y desarollo integral", "Produccion in house", "Desarrollo y modelado 3D"],
      variant: "light",
      cta: "Ver más"
    },
  ];

  return (
    <section className="container py-5">
      <h5 className="text-center text-muted mb-4 fw-light">Ofrecemos soluciones en:</h5>

      <div className="row g-4">
        {data.map((card, i) => {
          const bgClass =
            card.variant === "primary"
              ? "bg-primary text-white"
              : card.variant === "dark"
              ? "bg-dark text-white"
              : "bg-white";
          const border = card.highlighted ? "border-0" : "border";

          return (
            <div className="col-12 col-md-4" key={i}>
              <motion.div
                className={`card h-100 ${bgClass} ${border} rounded-4 shadow-sm`}
                style={{
                  borderRadius: "16px",
                  backdropFilter: "blur(6px) saturate(1.05)",
                  backgroundClip: "padding-box"
                }}
                initial={reduce ? undefined : { y: 20, opacity: 0, scale: 0.98 }}
                whileInView={reduce ? undefined : { y: 0, opacity: 1, scale: 1 }}
                whileHover={reduce ? {} : { translateY: -6, boxShadow: "0 18px 40px rgba(3,30,25,0.12)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="card-body p-4 d-flex flex-column">
                  <h5 className="card-title fw-semibold mb-3">{card.title}</h5>

                  <ul className="list-unstyled flex-grow-1 mb-4 text-start small">
                    {card.items.map((item, idx) => (
                      <li key={idx} className="py-1">• {item}</li>
                    ))}
                  </ul>

                  <a
                    href="#"
                    className={`btn ${
                      card.variant === "primary"
                        ? "btn-light text-primary fw-bold"
                        : card.variant === "dark"
                        ? "btn-light text-dark"
                        : "btn-primary"
                    } w-100 rounded-pill`}
                  >
                    {card.cta}
                  </a>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
