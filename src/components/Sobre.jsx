import React from "react";
import "/src/styles/sobre.scss"

function Sobre(){

    return(
        <>
            <section>
                <h2 id="texto">Meu nome é Eron Pereira Reis, sou estudante de Análise e Desenvolveminto de Sistemas.
                     No momento estou me preparando para ingressar no mercado 
                     como desenvolvedor backend ou no suporte administrativo de sistemas. Futuramente pretendo
                     seguir na área de segurança digital.</h2>

            </section>

            <div class="containers">
                <section class="habilidades">
                    <div class="container1">  
                        <img id="linux" src="/src/assets/linux.png" alt="Linux" />
                        <img id="java"src="/src/assets/java.png" alt="Java" />       
                        <img id="html" src="/src/assets/html.png" alt="Html" />
                        <img id="css" src="/src/assets/css.png" alt="CSS" />
                    </div>
                    <h1>Habilidades</h1>
                    <ul>
                        <li>Java</li>
                        <li>JS</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React</li>
                        <li>NodeJS</li>
                    </ul>
                </section>
                <section class="competencias">
                    <div id="conteudo">
                        <h1>Competencias</h1>
                        <h2>Ao longo de minha tragetória obtive alguns badges no campo de redes e segurança.</h2>
                    </div>
                    
                    <div class="container2">
                        <img id="b1" src="/src/assets/b1.png" alt="" />
                        <img id="b2" src="/src/assets/b2.png" alt="" />
                        <img id="b3" src="/src/assets/b3.png" alt="" />
                    </div>
                    
                </section>
            </div>
            
        </>
    )
}

export default Sobre;