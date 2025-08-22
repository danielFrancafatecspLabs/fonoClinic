// index.tsx ou index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Carousel from 'react-bootstrap/Carousel';

function CarrosselServicos() {
  const servicos = [
    {
      titulo: 'Fonoaudiologia Infantil',
      descricao: 'Atendimento especializado para crianças com dificuldades na fala, linguagem e comunicação.',
      imagem: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    },
    {
      titulo: 'Terapia de Voz',
      descricao: 'Tratamento para distúrbios da voz, rouquidão e aperfeiçoamento vocal.',
      imagem: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      titulo: 'Motricidade Orofacial',
      descricao: 'Reabilitação das funções orofaciais, como mastigação, deglutição e respiração.',
      imagem: 'https://images.unsplash.com/photo-1440288736878-766bd5839edb?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <div>
      <Carousel>
        {servicos.map((servico, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100"
              src={servico.imagem}
              alt={servico.titulo}
              style={{ height: '100vh', objectFit: 'cover' }} // Ocupa toda a altura da tela
            />
            <Carousel.Caption>
              <h3>{servico.titulo}</h3>
              <p>{servico.descricao}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarrosselServicos;