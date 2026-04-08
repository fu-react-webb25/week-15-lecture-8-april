import { useState } from "react";
import Button from "./Button";

const GenerateForm = ({ handleGenerate }) => {
	const [userInput, setUserInput] = useState('');
	const [amount, setAmount] = useState(1);

	const handleClick = (e) => {
		e.preventDefault();
		handleGenerate(userInput, amount);
	}

	return (
		<form className="form">
			<input
				type="text"
				className="form__input form__input--three"
				placeholder="Pokemon Type"
				aria-label="Pokemon Type"
				onChange={(e) => setUserInput(e.target.value)}
			/>
			<input
				type="number"
				className="form__input"
				placeholder="Size"
				aria-label="Team Size"
				min="1"
				onChange={(e) => setAmount(Number(e.target.value))}
			/>
			<Button
				text="Generate!"
				type="submit"
				onClick={handleClick}
			/>
			<Button text="Clear" type="reset" />
		</form>
	);
};

export default GenerateForm;
