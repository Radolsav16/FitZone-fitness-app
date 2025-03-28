import {Link } from 'react-router-dom'
import { useUserContext } from '../../contexts/UserContext'



export default function Nav(){
    const {email , imageUrl , id} = useUserContext()

    return(
        <>
         <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container">
    <Link className="navbar-brand" to="/">FitZone</Link>

    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Centered Links */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link smoothScroll">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/fitzone/about" className="nav-link smoothScroll">About Us</Link>
        </li>

           <li className="nav-item">
          <Link to="/fitzone/blog" className="nav-link smoothScroll">Blog</Link>
        </li>

        <li className="nav-item">
          <Link to="/fitzone/recipes-search" className="nav-link smoothScroll">Recipes</Link>
        </li>



        <li className="nav-item">
          <Link to="/fitzone/programms" className="nav-link smoothScroll">Programs</Link>
        </li>

        <li className="nav-item">
          <Link to="/fitzone/exercise-search" className="nav-link smoothScroll">Exercises</Link>
        </li>

        <li className="nav-item">
          <Link to="/fitzone/challenges" className="nav-link smoothScroll">Challanges</Link>
        </li>

      </ul>
    </div>

    <div className="navbar-icons d-flex align-items-center">

  {email ?  <>
    <Link to={`/fitzone/profile/${id}`} className="nav-link profile-image">
          <img
            src={imageUrl}
            alt="Profile"
            className="profile-img"
          />
        </Link>

          
      <Link to="/fitzone/cart" className="nav-link bag-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="bag-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 2L3 6v13a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 6h18M16 10a4 4 0 11-8 0"
          />
        </svg>
        <span className="cart-count">10</span>
      </Link>

      <Link to="/fitzone/logout" className="nav-link logout">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="logout-icon"
            viewBox="0 0 24 24"
          >
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
        </Link>
  </> : <>

  <Link to="/fitzone/register" className="nav-link login">
  <span className='auth-span'>Sign up</span>
  
</Link>



  <Link to="/fitzone/login" className="nav-link login">
  <span className='auth-span'>Log in</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="login-icon"
    viewBox="0 0 24 24"
  >
    <path d="M16 12H3"></path>
    <path d="M8 16l-5-4 5-4"></path>
    <path d="M16 3h5a2 2 0 012 2v14a2 2 0 01-2 2h-5"></path>
  </svg>
</Link>


  </> }

    
      
    </div>
  </div>
</nav>



        </>
    )
}