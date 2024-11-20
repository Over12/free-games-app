import CardsContainer from "./components/ui/CardsContainer"
import FormSearch from "./components/ui/FormSearch"
import Navbar from "./components/ui/Navbar"

function App() {
  return (
    
    <div className="absolute top-0 z-[-2] h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Navbar />
      <main className="container mx-auto">
        <FormSearch />
        <CardsContainer />
      </main>
    </div>
  )
}

export default App
