// App.js
// Componente raiz da aplicação. Mostra como compor componentes, passar props
// e usar estado local com useState.

import { useState } from "react";

import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  // contador: estado local para demonstrar reatividade
  const [contador, setContador] = useState(0);

  // Handler simples que incrementa o contador
  const incrementar = () => setContador((c) => c + 1);

  return (
    <div className="app">

      {/* Header recebe uma prop 'titulo' para exibição */}
      <Header titulo="Minha Aplicação React" />

      {/* Card demonstra passagem de props e uso de children */}
      <Card nome="Tadeu" idade={25}>
        <p>Este conteúdo foi passado usando children.</p>
      </Card>

      {/* Botão que atualiza o estado local */}
      <button onClick={incrementar}>
        Cliques: {contador}
      </button>

      <Footer />

    </div>
  );
}

export default App;