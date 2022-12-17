import React from "react"
import Pokemon from "./Pokemon";
import title from "./img/pokemon.png";
import butterfree from './img/butterfly.gif'
import roket from './img/teamrokect-remove.png'
import ash from './img/ashpikachu.gif'
import Pokebolas from './img/pokeBAll.png'
import './styles/stylepokemons.css';

function Page2(){
  return(

    <body className='body'>
    <header>
      <img className="roket" src={roket} alt="" />
    <img className='Title' src={title} alt="title"/>
    <img className="butterfree" src={butterfree} alt="butterfree" />
    </header>
        <div className='conatiner'>
          <div clasName='girar'>
          </div>
          <img className='ash' src={ash} alt="" />
        </div>
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
    <main className='main'>
    <Pokemon />
    </main>
    </body>
    
  )
}

export default Page2