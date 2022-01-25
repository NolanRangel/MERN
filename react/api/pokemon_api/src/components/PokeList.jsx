import React, { useState } from 'react';
import axios from 'axios'


const PokeList = () => {
    const [pokemon, setPokemon] = useState([]);

    const clickHandler = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
        .then(response => {
            console.log(response);
            setPokemon(response.data.results.map(item => item.name));
        })
    }


    return(
        <div>
            <button onClick={clickHandler}>Get Pokemon</button>
            {pokemon.map((item, i) => <p key={i}>{item}</p>)}
        </div>
    )
}
export default PokeList;




// const clickHandler = () => {
//     fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
//     .then(response => response.json())
//     .then(data => {
//             console.log(data);
//         let results = data.results
//         let pokedex = results.map(item => item.name)
//         setPokemon(pokedex);
//     })
// }