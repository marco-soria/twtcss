import { DarkModeToggle } from "./components/DarkModeToggle"
import { Header } from "./components/Header"
import { Headliners } from "./pages/Headliners"
import { Hero } from "./pages/Hero"


function App() {
  

  return (
    <>
      <Header />
      <Hero />
      <Headliners />

      <DarkModeToggle />
     
    </>
  )
}

export default App
