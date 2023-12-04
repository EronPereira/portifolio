import React from "react";
import "/src/styles/inicio.scss";

function Inicio(){

    return(
        <>
            <section>
                <figure>
                    <img src="./src/assets/eu.png" alt="Euuu" />    
                </figure> 
                <div class="introducao">
                    <h1 class="espaco">Um dev? Um técnico? Suporte?</h1>
                    <h2 class="espaco">Olá, meu nome é <u>Eron Pereira Reis</u>!</h2>
                    <h3 class="espaco">Conheça um pouco sobre mim!</h3>
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