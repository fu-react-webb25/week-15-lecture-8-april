import GeneratePage from "./pages/GeneratePage";
import PokedexPage from "./pages/PokedexPage";
import SearchPage from "./pages/SearchPage";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { pokemons } from './data/pokemons';
import SinglePage from "./pages/SinglePage";

function App() {
	const router = createBrowserRouter([
		{
			path : '/',
			element : <Layout />,
			children : [
				{
					index : true,
					element : <PokedexPage pokemons={ pokemons } />
				},
				{
					path : 'generate',
					element : <GeneratePage pokemons={ pokemons } />
				},
				{
					path : 'search',
					element : <SearchPage pokemons={ pokemons } />
				},
				{
					path : 'pokemons/:id',
					element : <SinglePage pokemons={ pokemons } />
				}
			]
		}
	]);


	return (
		<section className="app">
			<RouterProvider router={ router } />
		</section>
	);
}

export default App;
