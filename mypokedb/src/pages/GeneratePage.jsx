import GenerateForm from "../components/GenerateForm";
import PokemonCard from "../components/PokemonCard";
import { useState } from "react";
import { shuffleArray } from "../utils/shuffleArray";

const GeneratePage = ({ pokemons }) => {
	const [results, setResults] = useState([]);

	const handleGenerate = (query, amount) => {
		console.log(query, amount);
		const filtered = pokemons.filter(pokemon => 
			pokemon.type.some(type => 
				type.name.toLowerCase() === query.toLowerCase()
			)
		);
		if(filtered.length <= amount) {
			setResults(filtered);
		} else {
			setResults(shuffleArray(filtered).slice(0, amount));
		}
	}

	return (
		<main className="page">
			<h2 className="page__title">Generate Your Team</h2>
			<GenerateForm handleGenerate={ handleGenerate } />
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

export default GeneratePage;
