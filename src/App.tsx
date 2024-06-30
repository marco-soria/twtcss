import { DarkModeToggle } from "./components/DarkModeToggle"
import { Header } from "./components/Header"
import { Headliners } from "./pages/Headliners"
import { Hero } from "./pages/Hero"
import { Tickets } from "./pages/Tickets"
import { Timeline } from "./pages/Timeline"


function App() {
  

  return (
    <>
      <Header />
      <Hero />
      <Headliners />
      <Timeline />
      <Tickets />
      <DarkModeToggle />
     
    </>
  )
}

export default App
