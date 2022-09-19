import "./App.css";
import { useState } from "react";
import Cards from "./components/form/form";
import ValorTotal from "./components/valorTotal/valor";
import ListaCards from "./components/listaCards/listaCards";
import Header from "./components/header/header";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [listaFiltrada, setListaFiltrada] = useState([]);

  return (
    <div className="App">
      <Header />

      <main>
        <div>
          <Cards
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            setListaFiltrada={setListaFiltrada}
          />

          <ValorTotal listTransactions={listTransactions} />
        </div>

        <div>
          <ListaCards
            listaFiltrada ={listaFiltrada}
            setListTransactions={setListTransactions}
            setListaFiltrada={setListaFiltrada}
            listTransactions={listTransactions}
          />
        </div>
      </main>
    </div>
  );
}

export default App;

