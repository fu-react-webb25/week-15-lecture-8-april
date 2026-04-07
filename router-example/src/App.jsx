import Header from "./components/Header"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import LandingPage from "./pages/LandingPage"

function App() {

  return (
    <div className="app">
      <Header />
      <LandingPage />
      <ContactPage />
      <AboutPage />
    </div>
  )
}

export default App
