import React from "react"
import {BrowserRouter, Link} from "react-router-dom";

function Header(){
    return(    
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/projeto">Projetos</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;