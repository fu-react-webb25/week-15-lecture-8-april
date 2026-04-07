const AboutPage = () => {
    const pokemons = [
        'Bulbasaur',
        'Squirtle',
        'Charmander'
    ]

    return (
        <section>
            <h2>AboutPage</h2>
            {/* {
                pokemons.map((pokemon, index) => {
                    return <p key={ index } to={`/about/${pokemon}`}>{pokemon}</p>
                })
            } */}
        </section>
    )
}

export default AboutPage;