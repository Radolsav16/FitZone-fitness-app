import Nav from "./components/Header/Nav"
import {Routes , Route} from 'react-router-dom'
import Hero from "./components/Home/Hero"
import About from "./components/About/About"
import Footer from "./components/footer/Footer"
import Register from "./components/register/Register"

function App() {
 
  return (
    <>
     <Nav />
     <Routes>
        <Route path="/" element={<Hero />}/>
        <Route path="/fitzone/about" element={<About />}/>
        <Route path="/fitzone/regitser" element={<Register />}/>
     </Routes>
     <Footer />
    </>
  
  )
}

export default App
