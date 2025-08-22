import React from "react";

const contatos = [
  {
    id: "instagram",
    titulo: "Instagram",
    handle: (
      <a
        href="https://www.instagram.com/fonotea_service?igsh=MXZlNTB0aWVmZGliNw=="
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir Instagram Fonotea"
      >
        @fonotea_service
      </a>
    ),
    descricao: "Nos siga no Instagram para acompanhar nossas novidades!",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512"
      >
        <path
          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 
          114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 
          141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 
          74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 
          74.7zm146.4-194.3c0 14.9-12 26.8-26.8 
          26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 
          26.8-26.8 26.8 12 26.8 26.8zM398.8 388c-7.8 
          19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 
          9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 
          9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 
          99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 
          34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 
          132.1s2.7 102.7-9 132.1z"
        />
      </svg>
    ),
  },
  {
    id: "whatsapp",
    titulo: "Whatsapp",
    handle: "+55 (11) 96573-0856",
    descricao: "Marque sua consulta agora pelo nosso Whatsapp.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512"
      >
        <path
          d="M380.9 97.1C339 55.1 283.2 32 
          223.9 32c-122.4 0-222 99.6-222 
          222 0 39.1 10.2 77.3 29.6 111L0 
          480l117.7-30.9c32.4 17.7 68.9 27 
          106.1 27h.1c122.3 0 224.1-99.6 
          224.1-222 0-59.3-25.2-115-67.1-157zm-157 
          341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 
          18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 
          0-101.7 82.8-184.5 184.6-184.5 49.3 0 
          95.6 19.2 130.4 54.1 34.8 34.9 56.2 
          81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 
          184.6z"
        />
      </svg>
    ),
  },
];

const Contato = () => {
  return (
    <section className="py-5" id="contato">
      <div className="container px-5 my-5">
        <div className="row gx-5">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h2 className="brand-title fw-bolder mb-0">Contatos</h2>
          </div>

          <div className="col-lg-8">
            <div className="row gx-5 row-cols-1 row-cols-md-2">
              {contatos.map((contato) => (
                <div key={contato.id} className="col mb-5 h-100">
                  <div
                    className="feature bg-primary bg-gradient text-white rounded-3 mb-3"
                    aria-hidden
                    style={{
                      display: "block",
                      width: 180,
                      height: 12,
                      borderRadius: 999,
                      marginLeft: 0,
                      marginBottom: "0.75rem",
                    }}
                  />
                  <h2 className="h5">
                    <strong>{contato.titulo}</strong>
                  </h2>
                  <h5 className="redes-sociais">
                    <strong>{contato.handle}</strong>
                  </h5>
                  <p className="mb-0">{contato.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
