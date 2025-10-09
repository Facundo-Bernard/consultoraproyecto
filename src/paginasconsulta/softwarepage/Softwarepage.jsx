// Softwarepage.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SplitContent from "../SplitContent/SplitContent"; // ajustá ruta si tu SplitContent está en otra carpeta
import "./Softwarepage.css"; // usa tus estilos existentes

export default function Softwarepage() {
  const sections = [
    {
      id: "sec-1",
      left: {
        type: "image",
        content: "https://picsum.photos/seed/ai1/1200/800",
        width: "48%",
      },
      right: {
        type: "text",
        content:
          "Solución AI Empresarial — automatizamos procesos críticos con modelos a medida para mejorar productividad.",
        width: "48%",
      },
    },
    {
      id: "sec-2",
      left: {
        type: "text",
        content:
          "UX & Diseño — identidad visual, experiencia de usuario y prototipos de alta fidelidad que enamoran.",
        width: "45%",
      },
      right: {
        type: "image",
        content: "https://picsum.photos/seed/design/900/600",
        width: "50%",
      },
    },
    {
      id: "sec-3",
      left: {
        type: "image",
        content: "https://picsum.photos/seed/infra/900/700",
        width: "40%",
      },
      right: {
        type: "text",
        content:
          "Integraciones & Cloud — conectamos tu stack legacy con servicios cloud para escalar sin riesgos.",
        width: "55%",
      },
    },
    {
      id: "sec-4",
      left: {
        type: "text",
        title: "Consultoría",
        content:
          "Evaluación técnica y roadmap con entregables claros. POC rápidos y métricas de impacto.",
        width: "60%",
      },
      right: {
        type: "image",
        content: "https://picsum.photos/seed/consult/800/500",
        width: "35%",
      },
    },
  ];

  return (
    <main className="py-5">
      <div className="container">
        <header className="mb-5">
          <h2 className="fw-bold" style={{ color: "#0b1b4a" }}>
            Nuestras soluciones
          </h2>
          <p className="text-dark">
          </p>
        </header>

        {sections.map((s) => (
          <section className="mb-5" key={s.id}>
            <SplitContent left={s.left} right={s.right} />
          </section>
        ))}
      </div>
    </main>
  );
}
