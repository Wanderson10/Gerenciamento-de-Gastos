import { useState } from 'react'
import './style.css'

function Cards ({listTransactions , setListTransactions,setListaFiltrada}){
     const  [nomeStado, setEstado] = useState  ("")
     const [valor,setValor] = useState ("")
     const [tipoValor,setTipoValor] = useState ("entrada")
     
     function pegarDadosSet (){

        const id = Math.random().toString(16).slice(2)
        setListTransactions([...listTransactions,{id:id,descricao:nomeStado,valor:tipoValor === "entrada" ? valor :-valor,tipo:tipoValor}])
        setListaFiltrada([...listTransactions,{id:id,descricao:nomeStado,valor:tipoValor === "entrada" ? valor :-valor,tipo:tipoValor}])
    }
    return( <form className="formulario" onSubmit={(event)=>event.preventDefault()}>
    <div className='box0'>
     <label className='tituloDescricao'>Descrição</label>
    <input className='input1' placeholder='Digite aqui sua descrição' onChange={(evento)=>setEstado(evento.target.value)}></input>
    </div>
    <div className='box1'>
    <label className='tituloValor' >Valor</label>
    <label className='tituloSelect'>Tipo de valor</label>
    </div>

    <div className='box2'>
    <input className='input2'  type = "number" onChange={(evento)=>setValor(evento.target.value)}></input>
    <select className="tipoValor"onChange={(evento)=>setTipoValor(evento.target.value)} >
        
        
        <option value="entrada">Entrada</option>
        <option value="saida"> saida</option>
    </select>
    </div>
    <button className="botaoForm" onClick={()=> pegarDadosSet()}>inserir valor</button>
     </form>)

    
}


export default Cards

