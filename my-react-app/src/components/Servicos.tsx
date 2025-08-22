import { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";

function Servicos() {
  const [servicoSelecionado, setServicoSelecionado] = useState<string | null>(
    null
  );

  const servicos = [
    {
      id: "fonoaudiologia-infantil",
      titulo: "Fonoaudiologia Infantil",
      descricao:
        "Atendimento especializado para crianças com dificuldades na fala, linguagem e comunicação.",
      detalhes:
        "A Fonoaudiologia Infantil é voltada para o desenvolvimento da fala, linguagem e comunicação em crianças. Trabalhamos com crianças que apresentam atrasos no desenvolvimento da linguagem, dificuldades na articulação de palavras e outros distúrbios relacionados.",
      imagem:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      id: "terapia-de-voz",
      titulo: "Terapia de Voz",
      descricao:
        "Tratamento para distúrbios da voz, rouquidão e aperfeiçoamento vocal.",
      detalhes:
        "A Terapia de Voz é indicada para pessoas que apresentam rouquidão, cansaço vocal ou outros problemas relacionados à voz. Nosso objetivo é melhorar a qualidade vocal e prevenir danos às cordas vocais.",
      imagem:
        "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      id: "motricidade-orofacial",
      titulo: "Motricidade Orofacial",
      descricao:
        "Reabilitação das funções orofaciais, como mastigação, deglutição e respiração.",
      detalhes:
        "A Motricidade Orofacial trabalha com a reabilitação das funções orais, como mastigação, deglutição e respiração. É indicada para pessoas com dificuldades nessas áreas, incluindo crianças e adultos.",
      imagem:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
  ];

  return (
    <section
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "32px 16px",
        marginTop: 64,
      }}
    >
      <h1
        className="brand-title"
        style={{ color: "#1976d2", fontWeight: 700, marginBottom: 24 }}
      >
        Nossos Serviços
      </h1>
      <p style={{ marginBottom: 32 }}>
        Conheça os serviços que oferecemos e clique para saber mais detalhes
        sobre cada um.
      </p>

      {/* Cards dos serviços */}
      <Row xs={1} md={3} className="g-4">
        {servicos.map((servico) => (
          <Col key={servico.id}>
            <Card
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                cursor: "pointer",
              }}
              onClick={() => setServicoSelecionado(servico.id)} // Define o serviço selecionado
            >
              <Card.Img
                variant="top"
                src={servico.imagem}
                alt={servico.titulo}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title style={{ fontWeight: 700, color: "#1976d2" }}>
                  {servico.titulo}
                </Card.Title>
                <Card.Text>{servico.descricao}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Detalhes do serviço selecionado */}
      {servicoSelecionado && (
        <div
          id={servicoSelecionado}
          style={{
            marginTop: "32px",
            padding: "16px",
            background: "#f7fafd",
            borderRadius: "8px",
          }}
        >
          {servicos
            .filter((servico) => servico.id === servicoSelecionado)
            .map((servico) => (
              <div key={servico.id}>
                <h2 style={{ color: "#1976d2", fontWeight: 700 }}>
                  {servico.titulo}
                </h2>
                <p>{servico.detalhes}</p>
              </div>
            ))}
        </div>
      )}
    </section>
  );
}

export default Servicos;
