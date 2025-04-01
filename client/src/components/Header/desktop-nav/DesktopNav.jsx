import { Link } from "react-router-dom";
import { useUserContext } from "../../../contexts/UserContext";
import { useCart } from "../../../providers/CartProvider";


export default function DesktopNav() {
  const { email, imageUrl, id ,cart} = useUserContext();
  const {setShowCart,showCart} = useCart()
  return (
    <>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link smoothScroll">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/fitzone/about" className="nav-link smoothScroll">
              About 
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/fitzone/blog" className="nav-link smoothScroll">
              Blog
            </Link>
          </li>

          <li className="nav-item relative">
            <Link to="/fitzone/shop" className="nav-link smoothScroll">
              Shop
            </Link>
            <ul className="dropdown-menu hidden absolute left-0 mt-2 bg-white shadow-lg rounded-lg">
              <li>
                <Link
                  to="/fitzone/shop/?searchedBy=accessories"
                  className="dropdown-item px-4 py-2 hover:bg-blue-500 hover:text-white"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  to="/fitzone/shop/?searchedBy=martial-arts-gear"
                  className="dropdown-item px-4 py-2 hover:bg-blue-500 hover:text-white"
                >
                  Martial Arts Gear
                </Link>
              </li>
              <li>
                <Link
                  to="/fitzone/shop/?searchedBy=supplements"
                  className="dropdown-item px-4 py-2 hover:bg-blue-500 hover:text-white"
                >
                  Supplements
                </Link>
              </li>
              <li>
                <Link
                  to="/fitzone/?searchedBy=gym-equipment"
                  className="dropdown-item px-4 py-2 hover:bg-blue-500 hover:text-white"
                >
                 Gym Equipment
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item relative">
            <Link to="/fitzone/exercises" className="nav-link smoothScroll">
              Exercises
            </Link>
            <ul className="dropdown-menu hidden absolute left-0 mt-2 bg-white shadow-lg rounded-lg">
              <li>
                <Link
                  to="/fitzone/triceps/exercises"
                  className="dropdown-item px-4 py-2 hover:bg-blue-500 hover:text-white"
                >
                  Tricep
                </Link>
              </li>
              <li>
                <Link
                  to="/fitzone/biceps/exercises"
                  className="dropdown-item px-4 py-2 hover:bg-blue-500 hover:text-white"
                >
                  Bicep
                </Link>
              </li>
              <li>
                <Link
                  to="/fitzone/lats/exercises"
                  className="dropdown-item px-4 py-2 hover:bg-blue-500 hover:text-white"
                >
                  Back
                </Link>
              </li>
              <li>
                <Link
                  to="/fitzone/quads/exercises"
                  className="dropdown-item px-4 py-2 hover:bg-blue-500 hover:text-white"
                >
                  Leg
                </Link>
              </li>
              <li>
                <Link
                  to="/fitzone/abs/exercises"
                  className="dropdown-item px-4 py-2 hover:bg-blue-500 hover:text-white"
                >
                  Abs
                </Link>
              </li>
              <li>
                <Link
                  to="/fitzone/delts/exercises"
                  className="dropdown-item px-4 py-2 hover:bg-blue-500 hover:text-white"
                >
                  Delts
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link to="/fitzone/challenges" className="nav-link smoothScroll">
              Challanges
            </Link>
          </li>

        
         

        {email == 'todorovradoslav6@gmail.com' &&  <li className="nav-item">
            <Link to="/fitzone/admin" className="nav-link smoothScroll">
              Admin
            </Link>
          </li> 
}

         

        </ul>
      </div>

      <div className="navbar-icons d-flex align-items-center">
        {email ? (
          <>
            <Link
              to={`/fitzone/profile/${id}`}
              className="nav-link profile-image"
            >
              <img src={imageUrl} alt="Profile" className="profile-img" />
            </Link>

            <Link className="nav-link bag-link" onClick={()=>{
              setShowCart(!showCart)
            }}>
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
              <span className="cart-count">{cart.length}</span>
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
          </>
        ) : (
          <>
            <Link to="/fitzone/register" className="nav-link login">
              <span className="auth-span">Sign up</span>
            </Link>

            <Link to="/fitzone/login" className="nav-link login">
              <span className="auth-span">Log in</span>
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
          </>
        )}
      </div>
    </>
  );
}
