import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokemonCard from '../components/PokemonCard';

const SinglePage = ({ pokemons }) => {
    const [activePokemon, setActivePokemon] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        console.log(pokemons);
        
        const result = pokemons.find(pokemon => pokemon.id === Number(id));
        setActivePokemon(result);
    }, [id]);

    return (
        <section className="page">
            <h2 className="page__title">
                SinglePokemonPage
            </h2>
            <section className="page__pokedex">
                { activePokemon &&  <PokemonCard pokemon={ activePokemon } /> }
            </section>
        </section>
    )
}

export default SinglePage;