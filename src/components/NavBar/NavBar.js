import CardWidget from "../CarritoCompra/CardWidget"
import Logo from '../Logo/logo.js'

const NavBar = () => {
    return(
        <nav class='navBar'>
            <div>
                <Logo/>
            </div>
            <div>
                <ul class='lista'>
                <li>PC</li>
                <li>Notebook</li>
                <li>Monitores</li>
                <li>Componentes</li>
                </ul>
            </div>    
            <div>
                <CardWidget />
            </div>
        </nav>
    )
}


export default NavBar