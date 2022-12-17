import React from 'react'
import Roket from "./img/teamrokect-remove.png"
import Titulopokemon from "./img/pokemon.png"
import Butterfrly from "./img/butterfly.gif"
import Legendarios from "./img/pokemoneslgendarios.png"
import Botonbola from "./img/pokeBAll.png"
import Pokebolas from "./img/pokeBAll.png"
import './styles/home.css'
import Page2 from './Page2'




export default function Inicio(){

  return(
    <>
    
    <body className='body'>
      <header>
      <span>
        <img className="roket" src={Roket} alt="Roket"/>
      </span>
      <div className="titulo-pokemon">
        <img src={Titulopokemon} alt="titulo-pokemon"/>
        <span className="span-ghost">
          <img className="ghost" src={Butterfrly} alt=""/>
        </span>
      </div>
 
      <div className="parent">
        <img className="legenadrios" src={Legendarios} alt="pokemonesjuntos"/>
    </div>
    </header>
    
    
    <a href={Page2}>
      <img className='pokebola-boton' src={Botonbola} alt="Pokebola" />
    </a>
    
  

  <section>
    <div className='contenedor'>
    <div className="contenedor-ball">
      <img className="pokebolas" src={Pokebolas} alt="pokebolas"/>
    </div>
    <div className="contenedor-ball1">
      <img className="pokebolas1" src={Pokebolas} alt="pokebolas1"/>
    </div>
    <div className="contenedor-ball2">
      <img className="pokebolas2" src={Pokebolas} alt="pokebolas2"/>
    </div>
    <div className="contenedor-ball3">
      <img className="pokebolas3" src={Pokebolas} alt="pokebolas3"/>
    </div>
    <div className="contenedor-ball4">
      <img className="pokebolas4" src={Pokebolas} alt="pokebolas4"/>
    </div>
    </div>
  </section>
    </body>
    </>
  )}




