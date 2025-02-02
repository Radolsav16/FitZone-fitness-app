import Nav from "./components/Header/Nav"
import {Routes , Route} from 'react-router-dom'
import Hero from "./components/Home/Hero"
import About from "./components/About/About"
import Footer from "./components/footer/Footer"
import Register from "./components/register/Register"
import Login from "./components/login/Login"
import CreateChallange from "./components/create-challange/CreateChallange"
import Challenges from "./components/challanges/Challanges"

function App() {
 
  return (
    <>
     <Nav />
     <Routes>
        <Route path="/" element={<Hero />}/>
        <Route path="/fitzone/about" element={<About />}/>
        <Route path="/fitzone/register" element={<Register />}/>
        <Route path="/fitzone/login" element={<Login />}/>
        <Route path="/fitzone/create-challange" element={<CreateChallange />}/>
        <Route path="/fitzone/challanges" element={<Challenges />}/>


     </Routes>
     <Footer />
    </>
  
  )
}

export default App
