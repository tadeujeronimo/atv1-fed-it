import "./Header.css";

// Header.js
// Componente de apresentação para o cabeçalho da aplicação.
// Props:
// - titulo (string): texto exibido no título principal.

function Header({ titulo }) {
  return (
    <header className="header">
      {/* Exibe o título passado via props */}
      <h1>{titulo}</h1>
    </header>
  );
}

export default Header;