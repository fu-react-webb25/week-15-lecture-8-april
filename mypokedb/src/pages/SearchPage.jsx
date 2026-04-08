import SearchForm from "../components/SearchForm";
import PokemonCard from "../components/PokemonCard";
import { useState } from "react";

const SearchPage = ({ pokemons }) => {
	const [results, setResults] = useState([]);

	const handleSearch = (query) => {
		const filtered = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(query.toLowerCase()));
		setResults(filtered);
	}

	return (
		<main className="page">
			<h2 className="page__title">Search Pokemon</h2>
			<SearchForm handleSearch={ handleSearch } pokemons={ pokemons } />
			<section className="page__pokedex">
				{
					results.map(pokemon => {
						return <PokemonCard 
							key={pokemon.id}
							pokemon={ pokemon }
						/>
					})
				}
			</section>
		</main>
	);
};

export default SearchPage;
