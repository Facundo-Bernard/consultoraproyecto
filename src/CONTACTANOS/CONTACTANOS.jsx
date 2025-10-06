import { useState, useEffect, useMemo, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "./ContactoForm.css";

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const STORAGE_DRAFT_KEY = "contactoFormDraft_v2";
const STORAGE_LIMIT_KEY = "enviosRestantes";

const initialForm = { nombre: "", telefono: "", email: "", mensaje: "", sitio: "" };
const validators = {
  nombre: (v) => v.trim().length >= 3,
  telefono: (v) => /^[+\d][\d\s().\-]{6,}$/.test(v.trim()),
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
  mensaje: (v) => v.trim().length >= 10 && v.trim().length <= 1200,
  sitio: (v) => v.trim().length === 0,
};

export default function ContactoForm() {
  const [formData, setFormData] = useState(initialForm);
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState(null); // null | "success" | "error" | "limit"
  const [sending, setSending] = useState(false);
  const [enviosRestantes, setEnviosRestantes] = useState(3);
  const [charCount, setCharCount] = useState(0);
  const statusRef = useRef(null);

  useEffect(() => {
    const storedLimit = localStorage.getItem(STORAGE_LIMIT_KEY);
    if (storedLimit) setEnviosRestantes(parseInt(storedLimit, 10));
    const draftRaw = localStorage.getItem(STORAGE_DRAFT_KEY);
    if (draftRaw) {
      try {
        const draft = JSON.parse(draftRaw);
        setFormData({ ...initialForm, ...draft, sitio: "" });
        setCharCount((draft.mensaje || "").length);
      } catch {}
    }
  }, []);

  useEffect(() => {
    const { sitio, ...draft } = formData;
    localStorage.setItem(STORAGE_DRAFT_KEY, JSON.stringify(draft));
  }, [formData]);

  const errors = useMemo(() => {
    const e = {};
    for (const k of Object.keys(validators)) if (!validators[k](formData[k] || "")) e[k] = true;
    return e;
  }, [formData]);

  const isValid = useMemo(() => {
    return ["nombre", "telefono", "email", "mensaje"].every((k) => validators[k](formData[k] || ""));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "mensaje") setCharCount(value.length);
  };
  const handleBlur = (e) => setTouched((prev) => ({ ...prev, [e.target.name]: true }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    if (enviosRestantes <= 0) { setStatus("limit"); scrollToStatus(); return; }
    if (!isValid) { setTouched(Object.keys(initialForm).reduce((a,k)=>(a[k]=true,a),{})); return; }
    if (formData.sitio && formData.sitio.trim()) { setStatus("error"); scrollToStatus(); return; }

    try {
      setSending(true);
      const payload = { ...formData, submittedAt: new Date().toISOString(), userAgent: navigator.userAgent };
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        payload,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData(initialForm);
      setCharCount(0);
      localStorage.removeItem(STORAGE_DRAFT_KEY);
      const nuevo = enviosRestantes - 1;
      setEnviosRestantes(nuevo);
      localStorage.setItem(STORAGE_LIMIT_KEY, String(nuevo));
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    } finally {
      setSending(false);
      scrollToStatus();
    }
  };

  const scrollToStatus = () => {
    requestAnimationFrame(() => { if (statusRef.current) statusRef.current.scrollIntoView({ behavior: "smooth", block: "center" }); });
  };

  return (
    <div className="contacto-hero">
      <div className="contacto-overlay" />

      <div className="container contacto-container">
        <motion.header variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-4">
          <h2 className="contacto-title">Contáctanos</h2>
          <p className="lead contacto-sub">Hablemos sobre tu proyecto — te asesoramos con soluciones a medida.</p>
        </motion.header>

        <div className="row justify-content-center">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="col-12 col-lg-8">
            <div className="contact-card">
              {/* left accent bar */}
              <div className="accent-bar" />

              <div className="contact-card-body">
                <div ref={statusRef} aria-live="polite" aria-atomic="true" className="status-area">
                  {status === "success" && (
                    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="alert alert-success rounded-pill contacto-alert">
                      Mensaje enviado con éxito. ¡Gracias!
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="alert alert-danger rounded-pill contacto-alert">
                      Ocurrió un error. Intentá nuevamente.
                    </motion.div>
                  )}
                  {status === "limit" && (
                    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="alert alert-warning rounded-pill contacto-alert">
                      Límite de envíos por sesión alcanzado.
                    </motion.div>
                  )}
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="row gx-3 gy-3">
                    <div className="col-md-6">
                      <label className="form-label small text-uppercase text-muted">Nombre *</label>
                      <input
                        type="text"
                        name="nombre"
                        className={`form-control input-modern ${touched.nombre && errors.nombre ? "is-invalid" : ""}`}
                        value={formData.nombre}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Tu nombre completo"
                        autoComplete="name"
                      />
                      {touched.nombre && errors.nombre && <div className="invalid-feedback">Ingresá al menos 3 caracteres.</div>}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label small text-uppercase text-muted">Teléfono *</label>
                      <input
                        type="tel"
                        name="telefono"
                        className={`form-control input-modern ${touched.telefono && errors.telefono ? "is-invalid" : ""}`}
                        value={formData.telefono}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="+54 11 1234-5678"
                        autoComplete="tel"
                      />
                      {touched.telefono && errors.telefono && <div className="invalid-feedback">Ingresá un teléfono válido.</div>}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label small text-uppercase text-muted">Email *</label>
                      <input
                        type="email"
                        name="email"
                        className={`form-control input-modern ${touched.email && errors.email ? "is-invalid" : ""}`}
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="nombre@empresa.com"
                        autoComplete="email"
                      />
                      {touched.email && errors.email && <div className="invalid-feedback">Ingresá un email válido.</div>}
                    </div>

                    <div className="col-12">
                      <label className="form-label small text-uppercase text-muted d-flex justify-content-between">
                        <span>Mensaje *</span>
                        <span className={`small ${charCount > 1200 ? "text-danger" : "text-muted"}`}>{charCount}/1200</span>
                      </label>
                      <textarea
                        name="mensaje"
                        rows={6}
                        className={`form-control input-modern textarea-modern ${touched.mensaje && errors.mensaje ? "is-invalid" : ""}`}
                        value={formData.mensaje}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Contanos tu consulta o contanos el proyecto en pocas líneas..."
                      />
                      {touched.mensaje && errors.mensaje && <div className="invalid-feedback">Escribí entre 10 y 1200 caracteres.</div>}
                    </div>

                    {/* honeypot */}
                    <div className="visually-hidden">
                      <input type="text" name="sitio" tabIndex={-1} autoComplete="off" value={formData.sitio} onChange={handleChange} />
                    </div>

                    <div className="col-12 d-flex flex-column flex-md-row align-items-center justify-content-between gap-2 mt-3">
                      <div className="d-flex align-items-center gap-3">
                        <button
                          type="submit"
                          className="btn contacto-submit"
                          disabled={enviosRestantes <= 0 || sending || !isValid}
                          aria-disabled={enviosRestantes <= 0 || sending || !isValid}
                        >
                          {sending ? <span className="spinner-border spinner-border-sm me-2" role="status" /> : null}
                          {sending ? "ENVIANDO..." : "ENVIAR MENSAJE"}
                        </button>

                        <div className="small text-muted ms-2 d-none d-md-block">
                          {enviosRestantes > 0 ? `Podés enviar ${enviosRestantes} mensaje${enviosRestantes===1?"":"s"} más.` : "Límite de envíos alcanzado."}
                        </div>
                      </div>

                      <div className="text-muted small text-center text-md-end">
                        <div>Tel: <strong className="text-white">+54 11 1234 5678</strong></div>
                        <div>Email: <strong className="text-white">contacto@vidrieriaflash.com</strong></div>
                      </div>
                    </div>

                    <div className="col-12 d-md-none text-center">
                      <small className="text-muted">
                        {enviosRestantes > 0 ? `Podés enviar ${enviosRestantes} mensaje${enviosRestantes===1?"":"s"} más.` : "Límite de envíos alcanzado."}
                      </small>
                    </div>
                  </div>
                </form>
              </div> {/* end card body */}
            </div> {/* end contact-card */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
