import Nav from "./components/Header/Nav"
import {Routes , Route} from 'react-router-dom'
import Hero from "./components/Home/Hero"
import About from "./components/About/About"

function App() {
 
  return (
    <>
     <Nav />
     <Routes>
        <Route path="/" element={<Hero />}/>
        <Route path="/fitzone/about" element={<About />}/>
     </Routes>
    </>
  )
}

export default App
