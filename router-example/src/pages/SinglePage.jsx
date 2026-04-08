import { useParams } from 'react-router-dom';

const SinglePage = () => {
    const { name } = useParams();

    return (
        <section>
            <h2>Välkommen till SinglePage!</h2>
            <p>Denna sida handlar om { name }!</p>
        </section>
    )
}

export default SinglePage;