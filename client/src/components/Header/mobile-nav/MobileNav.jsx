import { Link } from "react-router";
import "./MobileNav";
import { useUserContext } from "../../../contexts/UserContext";

export default function MobileNav({ close }) {
  const { email, id } = useUserContext();
  return (
    <>
      <nav id="mobile-menu" className="mobile-menu">
        <button class="close-btn" onClick={close}>
          ×
        </button>
        <ul class="menu-list">
          <li>
            <Link to={"/"} className="menu-item" onClick={close}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/fitzone/challenges"}
              className="menu-item"
              onClick={close}
            >
              Challenges
            </Link>
          </li>
          <li>
            <Link to={"/fitzone/store"} className="menu-item" onClick={close}>
              Store
            </Link>
          </li>
          <li>
            <Link to={"/fitzone/blog"} className="menu-item" onClick={close}>
              Blog
            </Link>
          </li>
          {email ? (
            <>
              <li>
                <Link
                  to={"/fitzone/exercises"}
                  className="menu-item"
                  onClick={close}
                >
                  Exercise
                </Link>
              </li>
              <li>
                <Link
                  to={`/fitzone/profile/${id}`}
                  className="menu-item"
                  onClick={close}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  className="menu-item logout"
                  to={"/fitzone/logout"}
                  onClick={close}
                >
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to={"/fitzone/register"}
                  className="menu-item"
                  onClick={close}
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  to={"/fitzone/login"}
                  className="menu-item"
                  onClick={close}
                >
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}
