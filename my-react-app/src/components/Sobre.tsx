import React, { useEffect, useState } from "react";
import { Building2, Target, Compass, Heart } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

function Sobre() {
  const [displayedSobre, setDisplayedSobre] = useState("");
  const fullSobre = "Sobre Nós";
  const [displayedLocal, setDisplayedLocal] = useState("");
  const fullLocal = "Nossas Localizações";

  useEffect(() => {
    let cancelled = false;
    let index = 0;
    const typeNextChar = () => {
      if (cancelled) return;
      setDisplayedSobre(fullSobre.slice(0, index + 1));
      index++;
      if (index > fullSobre.length) index = 0;
      setTimeout(typeNextChar, index === 0 ? 1000 : 120);
    };
    typeNextChar();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    let index = 0;
    const typeNextChar = () => {
      if (cancelled) return;
      setDisplayedLocal(fullLocal.slice(0, index + 1));
      index++;
      if (index > fullLocal.length) index = 0;
      setTimeout(typeNextChar, index === 0 ? 1000 : 120);
    };
    typeNextChar();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="sobre" className="py-5">
      <div className="container" style={{ maxWidth: 1200 }}>
        <h2 className="text-center fw-bold mb-5 location-title brand-title">
          {displayedSobre}
          <span className="blinkText">|</span>
        </h2>

        <div className="row g-4">
          {/* Quem Somos Card */}
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <Building2
                    size={24}
                    className="me-2"
                    style={{ color: "var(--brand-primary)" }}
                  />
                  <h3 className="card-title h4 mb-0 brand-title">Quem Somos</h3>
                </div>
                <p className="card-text" style={{ lineHeight: 1.6 }}>
                  O <span className="brand-title">FonoTea</span> Service é uma
                  clínica dedicada ao cuidado infantil, com profissionais
                  especializados em fonoaudiologia, psicologia e terapias de
                  desenvolvimento. Iniciamos nossas atividades em 2013 e, após 2
                  anos de crescimento, abrimos mais 2 unidades em Recife-PE: uma
                  em <strong>Piedade</strong> e outra no bairro do{" "}
                  <strong>Espinheiro</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Missão Card */}
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <Target
                    size={24}
                    className="me-2"
                    style={{ color: "var(--brand-primary)" }}
                  />
                  <h3 className="card-title h4 mb-0 brand-title">Missão</h3>
                </div>
                <p className="card-text" style={{ lineHeight: 1.6 }}>
                  Oferecer atendimento humanizado e integrado, promovendo a
                  saúde, o bem-estar e a qualidade de vida de nossos pacientes,
                  garantindo experiência acolhedora e profissional em todas as
                  unidades.
                </p>
              </div>
            </div>
          </div>

          {/* Visão Card */}
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <Compass
                    size={24}
                    className="me-2"
                    style={{ color: "var(--brand-primary)" }}
                  />
                  <h3 className="card-title h4 mb-0 brand-title">Visão</h3>
                </div>
                <p className="card-text" style={{ lineHeight: 1.6 }}>
                  Proporcionar cuidados personalizados, utilizando as melhores
                  práticas clínicas e tecnologias modernas, com foco no
                  desenvolvimento infantil e na excelência no atendimento.
                </p>
              </div>
            </div>
          </div>

          {/* Valores Card */}
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <Heart
                    size={24}
                    className="me-2"
                    style={{ color: "var(--brand-primary)" }}
                  />
                  <h3 className="card-title h4 mb-0 brand-title">Valores</h3>
                </div>
                <div className="row g-3">
                  {[
                    {
                      title: "Humanização",
                      desc: "Atendimento acolhedor e empático",
                    },
                    {
                      title: "Integração",
                      desc: "Trabalho em equipe entre especialidades",
                    },
                    {
                      title: "Excelência",
                      desc: "Sempre buscando qualidade máxima",
                    },
                    { title: "Ética", desc: "Transparência e respeito" },
                    {
                      title: "Individualidade",
                      desc: "Tratamento personalizado",
                    },
                    {
                      title: "Bem-Estar",
                      desc: "Promover saúde e qualidade de vida",
                    },
                  ].map((valor, index) => (
                    <div key={index} className="col-sm-6">
                      <div
                        className="p-3 bg-light rounded"
                        style={{ minHeight: 72 }}
                      >
                        <h4 className="h6 mb-1">{valor.title}</h4>
                        <small className="text-muted">{valor.desc}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nossas Localizações */}
      <section id="localizacao" className="py-5 bg-white">
        <div className="container" style={{ maxWidth: 1200 }}>
          <h2 className="text-center fw-bold mb-5 location-title brand-title">
            {displayedLocal}
            <span className="blinkText">|</span>
          </h2>

          {/* Unidade 1 */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <h3 className="h4 fw-bold">Unidade 1 — Embu das Artes</h3>
              <p className="text-muted mb-1">
                Estrada de Itapecerica - Campo Limpo, 2022
              </p>
              <p className="text-muted mb-1">Bairro: Jardim Dom José</p>
              <p className="mb-2">
                <strong>Contato:</strong> (11) 96573-0856
              </p>
              <p style={{ lineHeight: 1.5 }} className="text-muted">
                Atendimento especializado em fonoaudiologia e terapias do
                desenvolvimento com foco no cuidado infantil. Agende uma visita
                para conhecer nossa estrutura e equipe.
              </p>
            </div>
            <div className="col-md-6">
              <div className="image-grid" style={{ gap: 12 }}>
                <img src="/assets/unit1-1.jpeg" alt="Embu das Artes 1" />
                <img src="/assets/unit1-2.jpeg" alt="Embu das Artes 2" />
                <img src="/assets/unit1-3.jpeg" alt="Embu das Artes 3" />
                <img src="/assets/unit1-4.jpeg" alt="Embu das Artes 4" />
              </div>
            </div>
          </div>

          {/* Unidade 2 */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6 order-md-1">
              <h3 className="h4 fw-bold">Unidade 2 — Embu Guaçu</h3>
              <p className="text-muted mb-1">
                Rua Waldomiro Pereira Rodrigues, 39
              </p>
              <p className="text-muted mb-1">Bairro: Jardim Emilia</p>
              <p className="mb-2">
                <strong>Contato:</strong> (11) 94594-0575
              </p>
              <p style={{ lineHeight: 1.5 }} className="text-muted">
                Estrutura acolhedora e profissionais experientes para acompanhar
                o desenvolvimento infantil. Agende uma avaliação e conheça
                nossos serviços.
              </p>
            </div>
            <div className="col-md-6 order-md-2">
              <div className="image-grid image-grid-construction">
                <div className="construction-box d-flex align-items-center justify-content-center">
                  <div>
                    <h4 className="mb-2">Em construção</h4>
                    <p className="text-muted mb-0">
                      Nossa unidade 2 estará em breve disponível.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inline styles for animations and image grid */}
      <style>{`
        .blinkText { animation: blink 1s infinite; }
        @keyframes blink { 0%,50%,100%{opacity:1} 25%,75%{opacity:0} }

        .location-title { font-family: 'Dancing Script', cursive; font-size: 2.2rem; }

        .image-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
        .image-grid img { width: 100%; height: 160px; object-fit: cover; border-radius: 12px; border: 4px solid #fff; box-shadow: 0 6px 20px rgba(44,62,80,0.12); transition: transform 0.3s; }
        .image-grid img:hover { transform: translateY(-6px) scale(1.02); }

        @media (min-width: 992px) {
          .image-grid img { height: 180px; }
        }

      `}</style>
    </section>
  );
}

export default Sobre;
