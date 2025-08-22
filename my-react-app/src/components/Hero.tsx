import React from "react";

const Hero: React.FC = () => {
  const sectionStyle =
    "d-flex flex-column justify-content-center align-items-center text-center py-5";

  return (
    <section
      id="inicio"
      className={`${sectionStyle} hero-section`}
      aria-label="Introdução"
      style={{ paddingTop: "calc(var(--navbar-height) + 12px)" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 text-start">
            <h1 className="display-4 fw-bold mb-3 brand-title hero-title">
              Cuidamos do desenvolvimento do seu filho com atendimento humano e
              plano personalizado.
              <br />
              Atendimento próximo à família e foco em resultados reais.
            </h1>

            <p
              className="lead text-muted mb-4 hero-subtitle"
              style={{ maxWidth: 680 }}
            >
              Atendimento multidisciplinar e humanizado para desenvolvimento
              infantil — avaliações práticas, planos personalizados e apoio à
              família em todas as etapas.
            </p>

            {/* buttons removed per request */}

            <div className="d-flex align-items-center gap-3 mt-2">
              <span className="badge brand-badge">Equipe Multidisciplinar</span>
              <small className="text-muted">
                Atendimento desde 2013 • Protocolos baseados em evidencias
              </small>
            </div>

            {/* benefit list removed by request */}
          </div>

          <div className="col-lg-5 mt-0 mt-lg-0 d-flex justify-content-center">
            <div
              className="card p-4 shadow-lg"
              style={{
                maxWidth: 360,
                width: "100%",
                transform: "translateY(-8px)",
              }}
            >
              <img
                src="/assets/fonotea_logo.png"
                alt="FonoTea logo"
                style={{ width: "100%", height: 120, objectFit: "contain" }}
              />

              <div className="mt-3">
                <p className="mb-1">
                  <strong>Contato rápido</strong>
                </p>

                <div>
                  <a
                    href="#contato"
                    className="btn cta-outline d-inline-flex align-items-center"
                    aria-label="Ir para contato"
                    style={{ gap: 8 }}
                  >
                    Fale Conosco
                  </a>

                  <div className="mt-2">
                    <a
                      href="https://wa.me/5511965730856"
                      target="_blank"
                      rel="noreferrer"
                      className="btn whatsapp-btn d-inline-flex align-items-center"
                      aria-label="Abrir WhatsApp da clínica"
                      style={{ gap: 8 }}
                    >
                      <img
                        src="/assets/icon_whatsapp.png"
                        alt="WhatsApp"
                        style={{ width: 18, height: 18, objectFit: "contain" }}
                      />
                      <span style={{ marginLeft: 8, fontWeight: 700 }}>
                        Abrir WhatsApp
                      </span>
                    </a>
                  </div>

                  <div className="card-benefits mt-3">
                    <strong style={{ display: "block", marginBottom: 8 }}>
                      Plano personalizado
                    </strong>
                    <ul className="list-unstyled mb-0">
                      <li className="d-flex align-items-start mb-2">
                        <span className="check-small me-2">✓</span>
                        <span>
                          Plano personalizado com foco no progresso real
                        </span>
                      </li>
                      <li className="d-flex align-items-start mb-2">
                        <span className="check-small me-2">✓</span>
                        <span>
                          Equipe experiente (fonoaudiologia, psicologia, terapia
                          ocupacional)
                        </span>
                      </li>
                      <li className="d-flex align-items-start">
                        <span className="check-small me-2">✓</span>
                        <span>
                          Ambiente acolhedor e suporte contínuo para a família
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="hero-testimonial mt-3 text-muted">
                <small>
                  “Equipe atenciosa, meu filho evoluiu muito — recomendo.” —
                  Família S.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section { background: linear-gradient(180deg, rgba(13,143,181,0.12), rgba(255,255,255,0)); padding-top: 3.5rem; padding-bottom: 5rem; }
        .hero-section .hero-title { font-size: 3.25rem; line-height: 1.05; }
        .benefit-list { display: grid; grid-template-columns: 1fr; gap: 0.5rem 1.5rem; }
        @media (min-width: 992px) { .benefit-list { grid-template-columns: 1fr 1fr; } }
        .benefit-list li { margin-bottom: 0.5rem; font-weight: 500; color: #243142; display:flex; align-items:flex-start; gap:12px }
        .benefit-list .check { display:inline-flex; width:28px; height:28px; align-items:center; justify-content:center; border-radius:50%; color:#fff; margin-right:8px; font-size:14px; flex:0 0 32px }
        .benefit-list .check.colored { background: linear-gradient(90deg, var(--brand-accent), var(--brand-primary)); box-shadow: 0 4px 12px rgba(11,107,155,0.08); }
        .benefit-text { display:block; flex:1 1 auto; word-break: break-word; }
        @media (max-width: 767px) { .benefit-list li { font-size: 0.95rem } }
        .cta-primary { background: linear-gradient(90deg, var(--brand-primary), var(--brand-accent)); border: none; color: #fff; padding: 12px 20px; border-radius: 10px; transition: transform .16s ease, box-shadow .16s ease; font-weight:700 }
        .cta-primary:hover { transform: translateY(-3px); box-shadow: 0 12px 36px rgba(11,107,155,0.16); }
        .cta-outline { border: 2px solid var(--brand-primary); color: var(--brand-primary); background: transparent; padding: 10px 14px; border-radius: 10px; font-weight:700 }
        .cta-outline:hover { background: rgba(11,107,155,0.06); color: #fff; background-image: linear-gradient(90deg, var(--brand-primary), rgba(13,143,181,0.9)); border-color: transparent }
        .hero-testimonial { font-style: italic; }
        .blink-exclaim { font-weight: 800; margin-left: 6px; display: inline-block; animation: colorBlink 4s linear infinite; }
        @keyframes colorBlink { 0%   { color: var(--brand-accent); opacity: 1 } 15%  { opacity: 0 } 25%  { color: var(--brand-primary); opacity: 1 } 40%  { opacity: 0 } 50%  { color: #ffd23f; opacity: 1 } 65%  { opacity: 0 } 75%  { color: #6be1b8; opacity: 1 } 90%  { opacity: 0 } 100% { color: var(--brand-accent); opacity: 1 } }
  @media (max-width: 767px) { .hero-section { padding-top: 2rem; padding-bottom: 2rem; } .cta-primary, .whatsapp-btn, .cta-outline { width: 100%; display: inline-flex; justify-content: center } }
  @media (max-width: 767px) { .hero-section .hero-title { font-size: 1.6rem; } }

  /* Hero subtitle styling */
  .hero-subtitle { font-size: 1.125rem; font-weight: 600; color: #2c4758; }
  @media (max-width: 767px) { .hero-subtitle { font-size: 1rem } }

  /* First-letter colored initials */
  .first-letter { display: inline-block; font-size: 2.6rem; font-weight: 900; line-height: 1; margin-right: 6px; vertical-align: middle; font-family: 'Dancing Script', cursive; }
  .first-letter.c1 { color: #ff6b6b; }
  .first-letter.c2 { color: #f7b267; }
  .first-letter.c3 { color: #ffd23f; }
  .first-letter.c4 { color: #6be1b8; }
  .first-letter.c5 { color: #4cc9f0; }
  .first-letter.c6 { color: #5e60ce; }
  .first-letter.c7 { color: #9b5de5; }
  .first-letter.c8 { color: #00b894; }
  .first-letter.c9 { color: #1abc9c; }

  /* WhatsApp button styling */
  .whatsapp-btn { background: #25D366; border: none; color: #fff; padding: 10px 14px; border-radius: 10px; font-weight:700; box-shadow: 0 6px 18px rgba(37,211,102,0.18); }
  .whatsapp-btn:hover { filter: brightness(0.95); transform: translateY(-2px); }

  /* Card benefits styling */
  .card-benefits { color: #243142; font-size: 0.95rem }
  .card-benefits .check-small { display:inline-flex; width:20px; height:20px; align-items:center; justify-content:center; border-radius:50%; background: linear-gradient(90deg, var(--brand-accent), var(--brand-primary)); color:#fff; font-size:12px; flex:0 0 24px }
      `}</style>
    </section>
  );
};

export default Hero;
