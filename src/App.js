import './App.css';
import { useState, useEffect } from 'react';
import FetchPokemonsBtn from './components/FetchPokemonsBtn';
import ShowPokemons from './components/ShowPokemons';

function App() {
  const [pokemons, setPokemons] = useState([]);
  return (
      <>
        <FetchPokemonsBtn setPokemons={setPokemons} />
        <ShowPokemons pokemons={pokemons} />
      </>
    );
}

export default App;
