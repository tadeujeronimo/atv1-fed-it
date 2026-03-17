import { useState } from "react";

import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App(){

  const [contador, setContador] = useState(0);

  return(

    <div className="app">

      <Header titulo="Minha Aplicação React"/>

      <Card nome="João" idade={25}>
        <p>Este conteúdo foi passado usando children.</p>
      </Card>

      <button onClick={() => setContador(contador + 1)}>
        Cliques: {contador}
      </button>

      <Footer/>

    </div>

  )
}

export default App;