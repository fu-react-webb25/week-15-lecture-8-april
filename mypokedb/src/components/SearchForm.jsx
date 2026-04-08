import { useEffect, useState } from "react";
import Button from "./Button";
import SearchDropdownList from "./SearchDropdownList";

const SearchForm = ({ handleSearch, pokemons }) => {
	const [userInput, setUserInput] = useState('');
	const [ results, setResults ] = useState([]);

	useEffect(() => {
		if(userInput.length === 0) {
			setResults([]);
		} else {
			const filtered = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(userInput.toLowerCase()));
			setResults(filtered);
		}
	}, [userInput]);

	const handleClick = (e) => {
		e.preventDefault();
		setResults([]);
		handleSearch(userInput);
	}

	return (
		<form className="form">
			<input
				type="text"
				className="form__input form__input--four"
				placeholder="Pokemon Name"
				aria-label="Pokemon Name"
				onChange={(e) => setUserInput(e.target.value)}
			/>
			<SearchDropdownList results={ results } />
			<Button
				onClick={handleClick}
				text="Search"
				type="submit"
			/>
			<Button text="Clear" type="reset" />
		</form>
	);
};

export default SearchForm;
