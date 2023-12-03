import React from "react";

function Inicio(){

    return(
        <>
            <section>
                <figure>
                    <img src="./src/assets/eu.png" alt="Euuu" />    
                </figure> 
                <div class="introducao">
                    <h1 class="espaco">Um dev? Um técnico? Um devops?</h1>
                    <h2 class="espaco">Olá, meu nome é Eron Pereira Reis!</h2>
                    <h3 class="espaco">Esse é meu portifolio, use os ícones de navegação para saber mais sobre mim!</h3>
                    <figure class="icons">
                        <a href="https://www.linkedin.com/in/eronpreis"><img src="./src/assets/linkedin.png" alt="Linkedin" /></a>
                        <a href="https://instagram.com/eronp.reis?igshid=OTk0YzhjMDVlZA=="><img src="./src/assets/instagram.png" alt="Instagram" /></a>
                        <a href="https://github.com/EronPereira"><img src="./src/assets/github.png" alt="Github" /></a>
                     </figure> 
                </div>             
            </section>
            
    </>
    )
}

export default Inicio;