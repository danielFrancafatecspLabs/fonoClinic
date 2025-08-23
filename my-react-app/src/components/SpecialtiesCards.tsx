import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Specialty {
  Title: string;
  Description: string;
  Image: string;
}

const dataSource: Specialty[] = [
  {
    Title: "Psicologia ABA",
    Description:
      "Atendimento individualizado com foco no desenvolvimento comportamental, do aprendizado e da comunicação da criança de forma estruturada e personalizada.",
    Image:
      "https://media.istockphoto.com/id/1426218664/pt/foto/child-playing-with-toy-pyramid-at-wooden-table-indoors-closeup-aba-therapy-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=f_stmri8O81C0jo-uuke83awUmdf_ccOS-1Ve-SckNY=",
  },
  {
    Title: "Terapia Ocupacional",
    Description:
      "Atendimento com estimulo de habilidades motoras, cognitivas e sociais, ajudando a criança a desenvolver autonomia e confiança no dia a dia.",
    Image:
      "https://media.istockphoto.com/id/1956229334/pt/foto/play-therapy.webp?a=1&b=1&s=612x612&w=0&k=20&c=sfG0g0dpKQC6uWSGIBzITCWN8TE4iLgvP7-0hpVE9qM=",
  },
  {
    Title: "Psicomotricidade",
    Description:
      "Atendimento individualizado com desenvolvimmento da coordenação, o equilíbrio e a consciência corporal da criança, favorecendo seu aprendizado e expressão de forma lúdica e saudável.",
    Image:
      "https://media.istockphoto.com/id/1766748906/pt/foto/little-boy-playing-with-cones.jpg?s=612x612&w=0&k=20&c=FM8ooU8KiJ2-g--VsyW8tvN5Q6JJTQBYLoCFejnwQ3Q=",
  },
  {
    Title: "Fonoaudiologia",
    Description:
      "Estimula a fala, a linguagem e a comunicação, ajudando a criança a se expressar melhor e a desenvolver suas habilidades de interação social.",
    Image:
      "https://media.istockphoto.com/id/1145329294/pt/foto/cute-little-boy-at-speech-therapist-office.jpg?s=612x612&w=0&k=20&c=tyJ_3igYxBs8OxyK_v1sIy9V3O5B8NwzzveWqwhKcDU=",
  },
  {
    Title: "Musicoterapia",
    Description:
      "Estimulação da comunicação e expressão através de técnicas terapêuticas e musicais.",
    Image:
      "https://media.istockphoto.com/id/2167161201/pt/foto/nurse-engaging-boy-with-autism-in-sensory-play.jpg?s=612x612&w=0&k=20&c=0EPVwWI0EKMcKVdxUZZcLOsn03MJTB0Bm5CQQbugCAc=",
  },
  {
    Title: "Psicopedagogia",
    Description:
      "Auxilio no processo de aprendizagem, identificando dificuldades e criando estratégias personalizadas para que a criança aprenda com mais confiança e autonomia.",
    Image:
      "https://media.istockphoto.com/id/1369112948/pt/foto/unrecognizable-african-american-girl-exercising-with-female-teacher.jpg?s=612x612&w=0&k=20&c=ghhf10grOAmygdKISyMXRyWuvsVjWXJDimpvyoX-pXk=",
  },
  {
    Title: "Nutricionista",
    Description:
      "Auxílio no processo de aprendizagem e cuidados com a saúde alimentar.",
    Image:
      "https://media.istockphoto.com/id/1138297676/pt/foto/healthy-and-nutrition-concept-kid-learning-about-nutrition-with-doctor-to-choose-eating-fresh.jpg?s=612x612&w=0&k=20&c=EBQdtzKNqBA5kf9QnT5Etq7Zn6fc-OBg-tjwhZWdW34=",
  },
];

const SpecialtiesCards: React.FC = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Nossas Especialidades";

  useEffect(() => {
    let cancelled = false;
    let index = 0;
    const typeNextChar = () => {
      if (cancelled) return;
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length) index = 0;
      setTimeout(typeNextChar, index === 0 ? 1000 : 120);
    };
    typeNextChar();
    return () => {
      cancelled = true;
    };
  }, []);

  // No carousel: we'll render a responsive grid of cards below

  return (
    <section id="servicos" className="specialties-section">
      <style>{`
        .specialties-section {
          margin-top: 0rem !important;
          background: linear-gradient(90deg, #e0f7fa 0%, #fce4ec 25%, #fffde7 50%, #e1f5fe 75%, #f3e5f5 100%) !important;
          padding-top: 2.5rem !important;
          padding-bottom: 1.5rem !important;
        }
      `}</style>
      <div className="container px-0 my-0">
        {/* Título animado */}
        <div className="row gx-5 justify-content-center mb-5">
          <div className="col-lg-8 col-xl-6">
            <div className="text-center">
              <h2
                className="fw-bolder"
                style={{ fontFamily: '"Dancing Script", cursive' }}
              >
                {displayedText}
                <span className="blinkText">|</span>
              </h2>
              <h6 className="lead fw-normal text-muted">
                Conheça nossas áreas de atuação focadas no desenvolvimento
                infantil e bem-estar.
              </h6>
            </div>
          </div>
        </div>

        {/* Grid de cards de especialidades (sem carousel) */}
        <div className="row g-4">
          {dataSource.map((item, idx) => (
            <div className="col-12 col-md-6 col-lg-4" key={idx}>
              <div className="card h-100 shadow-sm border-0">
                <section
                  id="especialidades"
                  style={{
                    background: "#fff",
                    paddingTop: 0,
                    paddingBottom: "2.5rem",
                  }}
                >
                  <img
                    className="card-img-top"
                    src={item.Image}
                    alt={item.Title}
                    style={{ height: 200, objectFit: "cover" }}
                  />
                  <div className="card-body p-4">
                    <div className="badge bg-primary text-white rounded-pill mb-2">
                      {/* blue flag */}
                      Especialidade
                    </div>
                    <h5 className="card-title mb-3 brand-title">
                      {item.Title}
                    </h5>
                    <p className="card-text mb-0">{item.Description}</p>
                  </div>
                </section>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Estilos extras (grid) */}
      <style>{`
        .blinkText { animation: blink 1s infinite; }
        @keyframes blink { 0%,50%,100%{opacity:1} 25%,75%{opacity:0} }
        .card .card-img-top { border-top-left-radius: .5rem; border-top-right-radius: .5rem; }
        .brand-title { font-size: 1.5rem; }
      `}</style>
    </section>
  );
};

export default SpecialtiesCards;
