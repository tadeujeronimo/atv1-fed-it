import "./Card.css";

// Card.js
// Componente reutilizável que exibe informações básicas e permite
// composição via children.
// Props:
// - nome (string): nome exibido no título do card
// - idade (number): idade exibida em parágrafo
// - children: qualquer conteúdo JSX passado entre as tags <Card>...</Card>

function Card({ nome, idade, children }) {
  return (
    <div className="card">

      {/* Nome principal do card */}
      <h2>{nome}</h2>

      {/* Exemplo simples de uso de props */}
      <p>Idade: {idade}</p>

      {/* Área para conteúdo composto (children) */}
      <div className="card-content">
        {children}
      </div>

    </div>
  );
}

export default Card;