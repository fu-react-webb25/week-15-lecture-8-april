import logo from "../assets/logo.webp";

const Logo = () => {
	return (
		<div className="header__logotype">
			<img src={logo} alt="Page Logo" className="header__logo-img" />
			<h1 className="header__title">MyPokeDB</h1>
		</div>
	);
};

export default Logo;
