import { Link } from "react-router-dom";
import indexFormatter from "../utils/indexFormatter";

const PokemonCard = ({ pokemon }) => {
	return (
		<Link 
			className="card-link"
			to={`/pokemons/${pokemon.id}`}
		>
			<article className="card">
				<img
					src={pokemon.image}
					alt={pokemon.name}
					className="card__image"
					style={{ backgroundColor: pokemon.type[0].color }}
					/>
				<span className="card__index">{indexFormatter(pokemon.id)}</span>
				<div className="card__group">
					<h3 className="card__name">{pokemon.name}</h3>
					<h4 className="card__type">
						{pokemon.type.length > 1
							? `${pokemon.type[0].name} / ${pokemon.type[1].name}`
							: pokemon.type[0].name}
					</h4>
				</div>
				<ul className="card__stats">
					<li className="card__stat">Attack: {pokemon.stats.attack}</li>
					<li className="card__stat">Defense: {pokemon.stats.defense}</li>
					<li className="card__stat">
						Sp. Attack: {pokemon.stats.specialAttack}
					</li>
					<li className="card__stat">
						Sp. Defense: {pokemon.stats.specialDefense}
					</li>
					<li className="card__stat">HP: {pokemon.stats.hp}</li>
					<li className="card__stat">Speed: {pokemon.stats.speed}</li>
					<li className="card__stat card__stat--wide">
						Total: {pokemon.stats.total}
					</li>
				</ul>
			</article>
		</Link>
	);
};

export default PokemonCard;
