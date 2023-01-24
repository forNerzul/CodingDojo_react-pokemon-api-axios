import { useEffect } from 'react';
import axios from 'axios';

const FetchPokemonsBtn = ({ setPokemons }) => {
    const fetchPokemons = () => {
        console.log('Fetching Pokemons...');
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => {
                console.log(`Response: ${response.data.results[0].name}`)
                const pokemons = response.data.results.map(pokemon => pokemon.name);
                setPokemons(pokemons);
                }
            )
                
    }
    return (
        <button onClick={fetchPokemons}>Fetch Pokemons</button>
    );
}

export default FetchPokemonsBtn;