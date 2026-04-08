import { Link } from "react-router-dom";

const NavItem = ({ item }) => {
	return <Link 
		className="navbar__navitem"
		to={ item.url }
	>
		{ item.name }
	</Link>;
};

export default NavItem;
