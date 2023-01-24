const ShowPokemons = ({ pokemons }) => {
    return(
        <>
            <h2>List of Pokemons</h2>
            <ul>
                {
                    pokemons.map((pokemon, i) => {
                        return <li key={i}>{pokemon}</li>
                    })
                }
            </ul>
        </>
    );
}
export default ShowPokemons;