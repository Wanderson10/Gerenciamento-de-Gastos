import "./style.css";

function ListaCards({
  listTransactions,
  setListTransactions,
  setListaFiltrada,
  listaFiltrada,
}) {
   function deletarTracacao(transacao){
      const novaLista = listTransactions.filter(item=>item.id !== transacao.id)
      setListTransactions (novaLista)
      setListaFiltrada (novaLista)
   }

   function filtrar(tipo){
    const novaLista = listTransactions.filter(item=>{ if(tipo === "todos"){
      return item
    }
   else {return item.tipo === tipo} }
    )
    setListaFiltrada (novaLista)
   }

  return (
    <div className="boxPrincipal">
      <div className="boxButtons">
        <h2 className="tituloCards">Resumo Financeiro</h2>
        <button className="buttao buttaoTodos" onClick={()=>filtrar("todos")}>Todos </button>
        <button className="buttao"onClick={()=>filtrar("entrada")} > Entradas </button>
        <button className="buttao"onClick={()=>filtrar("saida")} >dispensas </button>
      </div>

      {listTransactions.length === 0 ? (
        <ul className="listaCards">
          <h3 className="tituloLista">
            Você ainda não possui nenhum lançamento
          </h3>
        </ul>
      ) : (
        listaFiltrada.map((transacao, index) => (
          <div className="cardsProntos" key={index}>
            <p className="descricaoTransacao">{transacao.descricao}</p> <p>{transacao.valor}</p>
            <p className="descricaoTransacao">{transacao.tipo}</p>
            <button className="butaoDelete" onClick={()=>deletarTracacao(transacao)}>Deletar</button>
          </div>
        ))
      )}
    </div>
  );
}

export default ListaCards;
