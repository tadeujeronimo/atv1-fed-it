import "./Card.css";

function Card({ nome, idade, children }) {

  return (
    <div className="card">

      <h2>{nome}</h2>

      <p>Idade: {idade}</p>

      <div className="card-content">
        {children}
      </div>

    </div>
  );
}

export default Card;