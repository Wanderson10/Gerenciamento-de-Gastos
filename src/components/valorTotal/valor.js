
import './style.css'

function ValorTotal({listTransactions}){

   return( <> {listTransactions.length > 0 && (<div className="boxValorTotal">
   <h3>Valor total</h3>
   <p className='todes'>{listTransactions.reduce((acumulador,valor)=>acumulador + Number(valor.valor),0)}</p>
 </div>)}
    </>
   )
}

export default ValorTotal