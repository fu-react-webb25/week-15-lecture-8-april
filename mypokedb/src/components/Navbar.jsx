import NavItem from "./NavItem";

const Navbar = () => {
	const navitems = [
		{
			name : 'Pokedex',
			url : '/'
		},
		{
			name : 'Team Generator',
			url : '/generate'
		},
		{
			name : 'Search Pokemon',
			url : '/search'
		}
	];

	return (
		<nav className="navbar">
			{navitems.map((item, index) => {
				return <NavItem item={item} key={index} />;
			})}
		</nav>
	);
};

export default Navbar;
