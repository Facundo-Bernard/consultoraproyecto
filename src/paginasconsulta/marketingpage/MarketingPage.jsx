// MarketingPage.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SplitContent from "../SplitContent/SplitContent.jsx";
import "../SplitContent/SplitContent.css";

export default function MarketingPage() {
  const logoSections = [
    {
      id: "logo-1",
      left: {
        type: "text",
        content: (
          <>
            <h5 className="fw-semibold text-dark mb-2">Identidad Visual Corporativa</h5>
            <p className="text-secondary mb-0">
              Creamos logos que comunican el ADN de tu marca con precisión y coherencia.
            </p>
          </>
        ),
        width: "55%",
      },
      right: {
        type: "image",
        content: "https://picsum.photos/seed/logodesign1/700/500",
        width: "40%",
      },
    },
    {
      id: "logo-2",
      left: {
        type: "text",
        content: (
          <>
            <h5 className="fw-semibold text-dark mb-2">Diseño Adaptable</h5>
            <p className="text-secondary mb-0">
              Diseños versátiles que funcionan en digital, impresión y redes sociales.
            </p>
          </>
        ),
        width: "55%",
      },
      right: {
        type: "image",
        content: "https://picsum.photos/seed/logodesign2/700/500",
        width: "40%",
      },
    },
    {
      id: "logo-3",
      left: {
        type: "text",
        content: (
          <>
            <h5 className="fw-semibold text-dark mb-2">Branding Emocional</h5>
            <p className="text-secondary mb-0">
              Transformamos la esencia de tu empresa en un símbolo memorable y emocional.
            </p>
          </>
        ),
        width: "55%",
      },
      right: {
        type: "image",
        content: "https://picsum.photos/seed/logodesign3/700/500",
        width: "40%",
      },
    },
  ];

  const marketingSections = [
    {
      id: "mkt-1",
      left: {
        type: "image",
        content: "https://picsum.photos/seed/marketing1/700/500",
        width: "40%",
      },
      right: {
        type: "text",
        content: (
          <>
            <h5 className="fw-semibold text-dark mb-2">Soluciones de Marketing Integral</h5>
            <p className="text-secondary mb-0">
              Unimos estrategia, creatividad y análisis para maximizar el impacto de tu marca.
            </p>
          </>
        ),
        width: "55%",
      },
    },
    {
      id: "mkt-2",
      left: {
        type: "image",
        content: "https://picsum.photos/seed/marketing2/700/500",
        width: "40%",
      },
      right: {
        type: "text",
        content: (
          <>
            <h5 className="fw-semibold text-dark mb-2">Estrategias Omnicanal</h5>
            <p className="text-secondary mb-0">
              Coordinamos todos tus canales para una comunicación coherente y efectiva.
            </p>
          </>
        ),
        width: "55%",
      },
    },
    {
      id: "mkt-3",
      left: {
        type: "image",
        content: "https://picsum.photos/seed/marketing3/700/500",
        width: "40%",
      },
      right: {
        type: "text",
        content: (
          <>
            <h5 className="fw-semibold text-dark mb-2">Análisis de Datos y Optimización</h5>
            <p className="text-secondary mb-0">
              Decisiones basadas en métricas reales para optimizar resultados y rendimiento.
            </p>
          </>
        ),
        width: "55%",
      },
    },
  ];

  return (
    <main
      className="py-5"
      style={{
        background:
          "linear-gradient(180deg, #f9fafc 0%, #ffffff 50%, #f6f8ff 100%)",
      }}
    >
      <div className="container">
        {/* Bloque de LOGOS */}
        <header className="mb-5 text-center text-lg-start">
          <h2 className="fw-bold text-primary mb-3">
            Diseño de Logos y Branding
          </h2>
          <p className="text-muted fs-5 mb-0">
            Desarrollamos identidades visuales únicas que reflejan la esencia de tu empresa.
          </p>
        </header>

        {logoSections.map((s) => (
          <section
            className="mb-5 p-4 bg-white rounded-4 shadow-sm hover-shadow-sm transition"
            key={s.id}
          >
            <SplitContent left={s.left} right={s.right} />
          </section>
        ))}

        {/* Bloque de MARKETING */}
        <header className="mt-5 mb-5 text-center text-lg-start">
          <h2 className="fw-bold text-primary mb-3">
            Soluciones Integrales de Marketing
          </h2>
          <p className="text-muted fs-5 mb-0">
            Conectamos creatividad, estrategia y tecnología para potenciar tu crecimiento.
          </p>
        </header>

        {marketingSections.map((s) => (
          <section
            className="mb-5 p-4 bg-white rounded-4 shadow-sm transition"
            key={s.id}
          >
            <SplitContent left={s.left} right={s.right} />
          </section>
        ))}
      </div>
    </main>
  );
}
