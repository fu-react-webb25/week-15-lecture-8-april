import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Header from "./components/Header"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import LandingPage from "./pages/LandingPage"
import Layout from "./components/Layout"
import ErrorPage from "./pages/ErrorPage"
import SinglePage from "./pages/SinglePage"

function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      element : <Layout />,
      errorElement : <ErrorPage />,
      children : [
        {
          index : true,
          element : <LandingPage />
        },
        {
          path : 'contact',
          element : <ContactPage />
        },
        {
          path : 'about',
          element : <AboutPage />
        },
        {
          path : 'about/:name',
          element : <SinglePage />
        }
      ]
    }
  ]);

  return (
    <div className="app">
      <RouterProvider router={ router } />
    </div>
  )
}

export default App
