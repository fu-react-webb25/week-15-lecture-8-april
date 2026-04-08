import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
                <Link to="/about" className="nav-link">About</Link>
            </nav>
        </header>
    )
}

export default Header;