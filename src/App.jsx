import React from "react";
import Sobre from "./components/Sobre";
import Header from "./components/Header";
import Projeto from "./components/Projeto"
import Inicio from "./components/Inicio";
import "./style.scss";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App(){

  return(
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/projeto" element={<Projeto/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App