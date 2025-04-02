import { useNavigate, useParams, Link } from "react-router";
import { useUserContext } from "../contexts/UserContext";
import { useUser } from "../api/userApi";
import { FiShoppingCart } from "react-icons/fi";

import ProfileUserSection from "../components/profile/profile-user-section/ProfileUserSection";
import ProfileUserAction from "../components/profile/profile-user-action/ProfileUserAction";
import ProfileCardJoined from "../components/profile/profile-card-joined/ProfileCardJoined";
import ProfileCardSaved from "../components/profile/profile-card-saved/ProfileCardSaved";
import ProfileCardLiked from "../components/profile/profile-card-liked/ProfileCardLiked";
import { useCart } from "../providers/CartProvider";
import ShopCart from "../components/shop/shop-cart/ShopCart";

export default function Profile() {
  const { id } = useParams();
  const { user } = useUser(id);
  const navigate = useNavigate();
  const { id: currUser, userLogoutHandler } = useUserContext();

  const { showCart } = useCart();

  const logoutHandler = () => {
    userLogoutHandler();
    navigate("/");
  };

  return (
    <>
      {showCart && <ShopCart />}
      <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-20">
        <ProfileUserSection user={user} />

        <ProfileCardJoined joinedChallanges={user.joinedChallanges} />
        <ProfileCardSaved savedChallanges={user.savedChallanges} />
        <ProfileCardLiked likedPost={user.likedPost} />

        {user._id === currUser && (
          <>
            <ProfileUserAction logoutHandler={logoutHandler} />
            <div className="text-center">
              <p className="text-gray-500 text-sm">View your orders</p>
              <Link
                to={`/fitzone/orders/${id}`}
                className="flex items-center justify-center gap-2 text-blue-600 hover:underline font-medium mt-2"
              >
                <FiShoppingCart size={20} />
                <span>Check Your Orders</span>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
