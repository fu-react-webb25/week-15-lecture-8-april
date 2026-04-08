const Button = ({ onClick, text, type }) => {
	return (
		<button
			onClick={onClick}
			type={type}
			className={`button button--${type}`}
		>
			{text}
		</button>
	);
};

export default Button;
