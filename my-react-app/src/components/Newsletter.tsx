import React, { useState } from "react";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(
    null
  );

  const handleSubmit = async () => {
    if (!email) return setStatus({ ok: false, msg: "Digite um e-mail." });
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) setStatus({ ok: true, msg: data?.message || "Enviado." });
      else setStatus({ ok: false, msg: data?.error || "Erro ao enviar." });
    } catch (err) {
      setStatus({ ok: false, msg: "Erro de comunicação." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <aside className="bg-primary bg-gradient rounded-3 p-4 p-sm-5 mt-5 container">
      <div className="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
        <div className="mb-4 mb-xl-0">
          <div className="fs-3 fw-bold text-white">Receba novidades</div>
          <div className="text-white-50">
            Venha conhecer nossos serviços e agendar uma consulta.
          </div>
        </div>
        <div className="ms-xl-4 w-100" style={{ maxWidth: "400px" }}>
          <div className="input-group mb-2">
            <input
              className="form-control"
              type="email"
              placeholder="Digite seu e-mail"
              aria-label="Email address..."
              aria-describedby="button-newsletter"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="btn btn-outline-light"
              id="button-newsletter"
              type="button"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </div>
          {status && (
            <div
              className={`small ${status.ok ? "text-success" : "text-danger"}`}
            >
              {status.msg}
            </div>
          )}
          <div className="small text-white-50 mt-2">
            Nos preocupamos com sua privacidade. Nunca compartilharemos seus
            dados.
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Newsletter;
