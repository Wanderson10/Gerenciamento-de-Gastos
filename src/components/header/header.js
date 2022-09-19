import logo from './img/NuKenzie.png'
import "./style.css"

function Header(){
    return (<header>
    <figure>
    <img className='imagem' src={logo} alt="logo" />
    </figure>
      
  </header>
    )
}

export default Header