import { Link } from "react-router";
import "./MobileNav";
import { useUserContext } from "../../../contexts/UserContext";
import { useCart } from "../../../providers/CartProvider";
import ShopCart from "../../shop/shop-cart/ShopCart";

export default function MobileNav({ close }) {
  const { email, id } = useUserContext();
  const {showCart,setShowCart} = useCart()
  return (
    <>
    {showCart && <ShopCart />}
      <nav id="mobile-menu" className="mobile-menu">
        <button className="close-btn" onClick={close}>
          ×
        </button>
        <ul className="menu-list">
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
            <Link to={"/fitzone/shop"} className="menu-item" onClick={close}>
              Shop
            </Link>
          </li>
          <li>
            <Link to={"/fitzone/blog"} className="menu-item" onClick={close}>
              Blog
            </Link>
          </li>
          {email == 'todorovradoslav6@gmail.com' &&  <li>
                <Link
                  to={`/fitzone/admin`}
                  className="menu-item"
                  onClick={close}
                >
                  Admin
                </Link>
              </li>}
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
                  className="menu-item"
                  onClick={()=>setShowCart(true)}
                >
                  Cart
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
