import { Link } from "react-router-dom"

const AboutPage = () => {
    const pokemons = [
        'Bulbasaur',
        'Squirtle',
        'Charmander'
    ]

    return (
        <section>
            <h2>AboutPage</h2>
            {
                pokemons.map((pokemon, index) => {
                    return <Link className="nav-link" key={ index } to={`/about/${pokemon}`}>{pokemon}</Link>
                })
            }
        </section>
    )
}

export default AboutPage;