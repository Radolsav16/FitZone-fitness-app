import { Link } from "react-router-dom"
import { useUserContext } from "../../../contexts/UserContext"

export default function HeroBeginOverlay(){
    const {name,email} = useUserContext()
    return(
        <>
             <section className="hero d-flex flex-column justify-content-center align-items-center" id="home">

<div className="bg-overlay"></div>

   <div className="container">
        <div className="row">

             <div className="col-lg-8 col-md-10 mx-auto col-12">
                  <div className="hero-text mt-5 text-center">
                  <h6>Stronger Together!</h6>

                    {email ? 
                    <>
                        <h1 className="text-white">Welcome Back ,<span className="hero-name">{name}</span>!</h1>
                        <h2 className="subtitle">Your daily dose of inspiration awaits: fresh recipes, energizing workouts, and thrilling challenges that spark excitement!</h2>
                        </>: 
                        <>
                        <h1 className="text-white">Join FitZone Ultimate Fitness Application!</h1>
                        

                        <Link to="/fitzone/register" className="btn custom-btn mt-3" >Register</Link>

                        <Link to="/fitzone/login" className="btn custom-btn bordered mt-3">Login</Link>
                        </>}

                       

                       
                  </div>
             </div>

        </div>
   </div>
</section>
        </>
    )
}