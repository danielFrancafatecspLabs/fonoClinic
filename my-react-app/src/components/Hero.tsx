// ...existing code...
const Hero: React.FC = () => {
  const sectionStyle =
    "d-flex flex-column justify-content-center align-items-center text-center py-5";
  return (
    <section
      id="inicio"
      className={`${sectionStyle} hero-section`}
      aria-label="Introdução"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 text-start">
            <h1
              className="display-1 fw-bold mb-5 brand-title hero-title"
              style={{ lineHeight: 1.05, fontSize: "3rem" }}
            >
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
            <div
              className="hero-highlight mt-2"
              style={{ fontSize: "0.82rem", fontWeight: 600, color: "#222" }}
            >
              <strong>Equipe Multidisciplinar</strong> &nbsp;•&nbsp;{" "}
              <strong>Atendimento desde 2013</strong> &nbsp;•&nbsp;{" "}
              <strong>Protocolos baseados em evidências</strong>
            </div>
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
                      className="btn d-inline-flex align-items-center whatsapp-btn-custom"
                      aria-label="Abrir WhatsApp da clínica"
                      style={{
                        gap: 10,
                        background: "#25D366",
                        color: "#fff",
                        borderRadius: "50px",
                        padding: "10px 22px",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        boxShadow: "0 2px 8px rgba(37,211,102,0.15)",
                        border: "none",
                        transition: "background 0.2s",
                        display: "inline-flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src="/assets/icon_whatsapp.png"
                        alt="WhatsApp"
                        style={{
                          width: 22,
                          height: 22,
                          objectFit: "contain",
                          marginRight: 10,
                        }}
                      />
                      Abrir WhatsApp
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
        {/* ...existing code... */}
      </div>
      {/* Bolinhas animadas em toda a página */}
      <div className="global-bubbles">
        {/* Bolinhas extras no canto esquerdo */}
        {[...Array(7)].map((_, i) => {
          const left = 2 + Math.random() * 8; // entre 2% e 10% da tela
          const size = 8 + Math.random() * 14;
          const color = ["#43e6b1", "#ffd23f", "#4cc9f0", "#a066ff", "#ff6f91"][
            i % 5
          ];
          const delay = Math.random() * 7;
          const bottom = Math.random() * 80;
          return (
            <span
              key={"left-" + i}
              className="global-bubble"
              style={{
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                background: color,
                animationDelay: `${delay}s`,
                bottom: `${bottom}vh`,
              }}
            />
          );
        })}
        {/* Bolinhas distribuídas no restante da tela */}
        {[...Array(8)].map((_, i) => {
          const left = 12 + Math.random() * 86; // entre 12% e 98% da tela
          const size = 8 + Math.random() * 14;
          const color = ["#43e6b1", "#ffd23f", "#4cc9f0", "#a066ff", "#ff6f91"][
            i % 5
          ];
          const delay = Math.random() * 7;
          const bottom = Math.random() * 80;
          return (
            <span
              key={"rest-" + i}
              className="global-bubble"
              style={{
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                background: color,
                animationDelay: `${delay}s`,
                bottom: `${bottom}vh`,
              }}
            />
          );
        })}
      </div>
      {/* Styles must be inside JSX as last child */}
      <style>{`
        .hero-highlight {
          width: 100%;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.1px;
          margin-bottom: 0.5rem;
          color: #222;
        }
        .global-bubbles {
          position: fixed;
          left: 0; right: 0; top: 0; bottom: 0;
          width: 100vw; height: 100vh; pointer-events: none;
          z-index: 0;
        }
        .global-bubble {
          position: absolute;
          border-radius: 50%;
          opacity: 0.28;
          animation: bubbleUp 7s infinite linear;
        }
        @keyframes bubbleUp {
          0% { transform: translateY(0) scale(0.7); opacity: 0.28; }
          80% { opacity: 0.5; }
          100% { transform: translateY(-100vh) scale(0.9); opacity: 0; }
        }
        .whatsapp-btn-custom {
          background: #25D366 !important;
          color: #fff !important;
          border-radius: 50px !important;
          padding: 10px 22px !important;
          font-weight: 700 !important;
          font-size: 1.1rem !important;
          box-shadow: 0 2px 8px rgba(37,211,102,0.15) !important;
          border: none !important;
          display: inline-flex !important;
          align-items: center !important;
          gap: 10px !important;
          transition: background 0.2s !important;
        }
        .whatsapp-btn-custom:hover {
          background: #1ebe57 !important;
        }
        .hero-section {
          background: linear-gradient(90deg, #e0f7fa 0%, #fce4ec 25%, #fffde7 50%, #e1f5fe 75%, #f3e5f5 100%);
          padding-top: 2.5rem;
          padding-bottom: 2.5rem;
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
      `}</style>
    </section>
  );
};

export default Hero;
