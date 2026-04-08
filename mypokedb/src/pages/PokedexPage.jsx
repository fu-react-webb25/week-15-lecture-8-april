import PokemonCard from "../components/PokemonCard";

const PokedexPage = ({ pokemons }) => {
	console.log(pokemons);
	return (
		<main className="page">
			<h2 className="page__title">Pokedex</h2>
			<section className="page__pokedex">
				{pokemons.map((pokemon) => {
					return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
				})}
			</section>
		</main>
	);
};

export default PokedexPage;
