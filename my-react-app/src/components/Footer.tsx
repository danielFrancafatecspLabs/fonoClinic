function Footer() {
  return (
    <footer
      className="py-4 text-center site-footer"
      style={{
        background:
          "linear-gradient(90deg, #e0f7fa 0%, #fce4ec 25%, #fffde7 50%, #e1f5fe 75%, #f3e5f5 100%)",
        color: "#222",
        boxShadow: "0 -4px 24px rgba(44,62,80,0.08)",
      }}
    >
      <div className="container d-flex justify-content-between align-items-center flex-column flex-md-row gap-3 footer-responsive">
        <div className="d-flex flex-column align-items-start">
          <strong
            className="brand-title mb-2"
            style={{
              fontSize: "1.6rem",
              fontFamily: "Dancing Script, cursive",
              display: "inline-flex",
              gap: 2,
            }}
          >
            {"FonoTea".split("").map((ch, i) => (
              <span
                key={i}
                className={`brand-letter b-${i % 6}`}
                style={{
                  display: "inline-block",
                  transformOrigin: "center",
                  animation: "letterPop 900ms ease-in-out infinite",
                  animationDelay: `${i * 120}ms`,
                }}
              >
                {ch}
              </span>
            ))}
          </strong>
          <div
            className="small mb-2"
            style={{ color: "#222", fontWeight: 500 }}
          >
            Contato:{" "}
            <a href="tel:11965730856" style={{ color: "#222" }}>
              (11) 96573-0856
            </a>{" "}
            •{" "}
            <a href="mailto:atendimento@fonotea.com" style={{ color: "#222" }}>
              atendimento@fonotea.com
            </a>
          </div>
          <div className="d-flex gap-2">
            <a
              href="https://wa.me/5511965730856"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              style={{ display: "inline-block" }}
            >
              <img
                src="/assets/icon_whatsapp.png"
                alt="WhatsApp"
                style={{ width: 28, height: 28 }}
              />
            </a>
            <a
              href="https://instagram.com/fonotea"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{ display: "inline-block" }}
            >
              <img
                src="/assets/fonotea_logo.png"
                alt="Instagram"
                style={{ width: 28, height: 28, borderRadius: "50%" }}
              />
            </a>
          </div>
        </div>
        <div className="footer-info mx-auto text-center mt-2">
          <div
            className="footer-rights mb-1"
            style={{
              fontSize: "1.05rem",
              color: "#222",
              fontWeight: 500,
              letterSpacing: 0.2,
            }}
          >
            © {new Date().getFullYear()} — Todos os direitos reservados.
          </div>
          <span
            className="small d-flex align-items-center justify-content-center"
            style={{ color: "#222", gap: 6 }}
          >
            Desenvolvido com
            <span className="footer-heart">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#ff6f91"
                stroke="#ff6f91"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ verticalAlign: "middle" }}
              >
                <path d="M12 21s-7-4.35-7-10A5 5 0 0 1 12 6a5 5 0 0 1 7 5c0 5.65-7 10-7 10z" />
              </svg>
            </span>
            por FonoTea
          </span>
        </div>
      </div>
      <style>{`
        @media (max-width: 767px) {
          .footer-responsive {
            flex-direction: column !important;
            gap: 1.5rem !important;
            align-items: center !important;
            text-align: center !important;
          }
          .footer-info {
            margin-top: 1.2rem !important;
            text-align: center !important;
          }
          .d-flex.align-items-start {
            align-items: center !important;
            text-align: center !important;
          }
          .brand-title {
            font-size: 1.3rem !important;
          }
          .footer-rights {
            font-size: 0.98rem !important;
          }
          .footer-bubbles {
            height: 40px !important;
          }
        }
        .footer-highlight {
          width: 100%;
          font-size: 1.15rem;
          font-weight: bold;
          letter-spacing: 0.5px;
          margin-bottom: 0.5rem;
        }
        .highlight-bg {
          display: inline-block;
          background: linear-gradient(90deg, #ffe0ec 0%, #e0f7fa 100%);
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(44,62,80,0.10);
          padding: 0.5rem 1.2rem;
          color: #222;
          font-weight: bold;
          animation: highlightPulse 2.5s infinite alternate;
        }
        @keyframes highlightPulse {
          0% { box-shadow: 0 2px 12px rgba(255,111,145,0.10); }
          100% { box-shadow: 0 4px 24px rgba(67,230,177,0.18); }
        }
        .site-footer {
          border-top: 4px solid rgba(44,62,80,0.08);
          background: linear-gradient(90deg, #e0f7fa 0%, #fce4ec 25%, #fffde7 50%, #e1f5fe 75%, #f3e5f5 100%);
        }
        .site-footer a { color: #222; opacity: 0.92; transition: opacity 0.2s; }
        .site-footer a:hover { opacity: 1; text-decoration: underline; }
        .brand-letter { will-change: transform, opacity; }
  .site-footer .brand-title .b-0 { color: var(--brand-accent) !important; }
  .site-footer .brand-title .b-1 { color: var(--brand-primary) !important; }
  .site-footer .brand-title .b-2 { color: #ffd23f !important; }
  .site-footer .brand-title .b-3 { color: #6be1b8 !important; }
  .site-footer .brand-title .b-4 { color: #3da4ff !important; }
  .site-footer .brand-title .b-5 { color: #a066ff !important; }
        @keyframes letterPop {
          0% { transform: translateY(0) scale(1); opacity: 0.95 }
          30% { transform: translateY(-6px) scale(1.08); opacity: 1 }
          60% { transform: translateY(-2px) scale(1.03); opacity: 1 }
          100% { transform: translateY(0) scale(1); opacity: 0.98 }
        }
        .footer-heart svg {
          animation: heartBeat 1.2s infinite;
        }
        @keyframes heartBeat {
          0% { transform: scale(1); filter: drop-shadow(0 0 0 #ffb6c1); }
          20% { transform: scale(1.15); filter: drop-shadow(0 0 8px #ffb6c1); }
          40% { transform: scale(1); }
          60% { transform: scale(1.15); filter: drop-shadow(0 0 8px #ffb6c1); }
          80% { transform: scale(1); }
          100% { transform: scale(1); filter: drop-shadow(0 0 0 #ffb6c1); }
        }
        /* Componente vivo: bolhas animadas */
        .footer-bubbles {
          position: absolute;
          left: 0; right: 0; bottom: 0;
          width: 100%; height: 60px; pointer-events: none;
          overflow: hidden;
        }
        .footer-bubble {
          position: absolute;
          bottom: -40px;
          border-radius: 50%;
          opacity: 0.5;
          animation: bubbleUp 6s infinite linear;
        }
        @keyframes bubbleUp {
          0% { transform: translateY(0) scale(1); opacity: 0.5; }
          80% { opacity: 0.7; }
          100% { transform: translateY(-60px) scale(1.2); opacity: 0; }
        }
      `}</style>
      {/* Bolhas animadas no rodapé */}
      <div className="footer-bubbles">
        <span
          className="footer-bubble"
          style={{
            left: "10%",
            width: 18,
            height: 18,
            background: "#43e6b1",
            animationDelay: "0s",
          }}
        />
        <span
          className="footer-bubble"
          style={{
            left: "30%",
            width: 12,
            height: 12,
            background: "#ffd23f",
            animationDelay: "1s",
          }}
        />
        <span
          className="footer-bubble"
          style={{
            left: "50%",
            width: 22,
            height: 22,
            background: "#4cc9f0",
            animationDelay: "2s",
          }}
        />
        <span
          className="footer-bubble"
          style={{
            left: "70%",
            width: 14,
            height: 14,
            background: "#a066ff",
            animationDelay: "3s",
          }}
        />
        <span
          className="footer-bubble"
          style={{
            left: "85%",
            width: 16,
            height: 16,
            background: "#ff6f91",
            animationDelay: "4s",
          }}
        />
      </div>
    </footer>
  );
}
export default Footer;
