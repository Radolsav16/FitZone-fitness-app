import {Link } from 'react-router-dom'
import { useUserContext } from '../../contexts/UserContext'

export default function Nav(){
    const {email , imageUrl} = useUserContext()

    return(
        <>
               <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">

            <Link className="navbar-brand" to="/">FitZone</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-lg-auto">
                <li className="nav-item">
                        <Link to="/" className="nav-link smoothScroll">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/fitzone/about" className="nav-link smoothScroll">About Us</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/fitzone/challanges" className="nav-link smoothScroll">Challanges</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/fitzone/blog" className="nav-link smoothScroll">Blog</Link>
                    </li>
                    {email ?   
                    <>
                    <li className="nav-item">
                        <Link to="/fitzone/create-challange" className="nav-link smoothScroll">Create Challange</Link>
                    </li>

                    <li className="nav-item profile-image">
              <Link to="/fitzone/profile" className="nav-link">
                <img
                  src={imageUrl}
                  alt="Profile"
                  className="profile-img"
                />
              </Link>
            </li>

            <li className="nav-item logout">
  <Link to="/fitzone/logout" className="nav-link smoothScroll">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-log-out logout-icon"
      viewBox="0 0 24 24"
    >
      <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"></path>
      <polyline points="16 17 21 12 16 7"></polyline>
      <line x1="21" y1="12" x2="9" y2="12"></line>
    </svg>
  </Link>
</li>

                      </>
                    : 
                    <>
                    <li className="nav-item">
                        <Link to="/fitzone/register" className="nav-link smoothScroll">Register</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/fitzone/login" className="nav-link smoothScroll">Login</Link>
                    </li>
                    </>
}
                  

                </ul>
            </div>

        </div>
    </nav>
        </>
    )
}