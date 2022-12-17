import React, { useState, useEffect } from 'react';
import picachu from './img/Picachu.gif'




function Pokemon({avatar,name}) {
  return(
    <div className='card'>
      <figure className="figure">
      <img className='img' src={avatar} alt={name} />
    <button>
      <figcaption className='figcaption'>
        {name}
      </figcaption>
    </button>
    </figure>

    </div>
  );
}


 export default function PokemonHooks(){

    const [pokemons, setPokemons] = useState([]);

    useEffect(()=>{
    const getPokemons = async(url)=>{
          let res = await fetch(url),
          json = await res.json();
        //console.log(json);

         json.results.forEach(async(el)=> {
          let res = await  fetch(el.url),
          json = await res.json();
         // console.log(json);
          let pokemon = {
            id: json.id,
            name: json.name,
            avatar: json.sprites.front_default,

          };
          setPokemons((pokemons) =>[...pokemons, pokemon]);
        })
    }

    getPokemons("https://pokeapi.co/api/v2/pokemon");
     
  },[]);

   return(
      <>
      
      {pokemons.length === 0 ? (
        <div className='container-charge'>
          <img  className='picachu' src={picachu} alt="charmander" />
          <h3 className='cargando'>CARGANDO...</h3>
        </div>
        ):(pokemons.map((el)=>
        <Pokemon key={el.id} name={el.name.toUpperCase()}  avatar={el.avatar}/>
        ))
       }
      </>
      
   );
 }

  
 