import { useNavigate } from 'react-router-dom';

const SearchDropdownList = ({ results }) => {
    const navigate = useNavigate();

    if(results.length < 1) return '';

    return (
        <ul className="dropdown">
            {
                results.map(pokemon => {
                    return <li 
                        className="dropdown__item"
                        onClick={ () => navigate(`/pokemons/${pokemon.id}`)}
                    >
                        {pokemon.name}
                    </li>
                })
            }
        </ul>
    )
}

export default SearchDropdownList