import { Link } from "react-router";
import { useUserOrders } from "../api/shopApi";
import { useUserContext } from "../contexts/UserContext";
import ShopCart from "../components/shop/shop-cart/ShopCart";
import { useCart } from "../providers/CartProvider";

export default function UsersOrders() {
  const { id } = useUserContext();
  const { orders } = useUserOrders(id);
  const { showCart } = useCart();
  return (
    <>
      {showCart && <ShopCart />}
      <div className="bg-white shadow-lg rounded-2xl p-6 mt-20">
        <h2 className="text-2xl font-bold mb-4">Your Orders</h2>

        {orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 w-full text-center p-5">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
              No Orders Yet!
            </h2>
            <p className="text-blue-600 mb-8">
              It seems like there are no orders. Scroll down to create one!
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 animate-bounce text-blue-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m0 0l-6-6m6 6l6-6"
              />
            </svg>
            <Link to={"/fitzone/shop"}>
              <div className="flex items-center justify-center p-4 bg-blue-100 rounded-lg shadow-md cursor-pointer hover:bg-blue-200 transition">
                <p className="text-blue-800 font-bold text-sm md:text-base">
                  Shop now
                </p>
              </div>
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {orders.map((order) => (
                <div
                  key={order._id}
                  className="border border-gray-300 bg-white shadow-md p-6 rounded-lg"
                >
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-gray-800">
                      Order ID: {order._id}
                    </p>
                    <span className="text-lg font-bold text-green-600">
                      ${order.total.toFixed(2)}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-blue-500 font-medium">
                    🚚 On Delivery: Expected within 3-5 days
                  </p>

                  <p className="mt-2 text-sm text-blue-500 font-medium">
                    📧 Check email for more details!
                  </p>

                  <div className="mt-4 space-y-4">
                    {order.products.map((product) => (
                      <div
                        key={product._id}
                        className="flex items-center gap-4 border-b pb-3"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-20 h-20 rounded-lg shadow-sm"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-700">
                            {product.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            ${product.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <Link to={"/fitzone/shop"}>
              <div className="flex items-center justify-center p-4 bg-blue-100 rounded-lg shadow-md cursor-pointer hover:bg-blue-200 transition mt-20">
                <p className="text-blue-800 font-bold text-sm md:text-base">
                  Go Back Shopping -{">"}
                </p>
              </div>
            </Link>
          </>
        )}
      </div>
    </>
  );
}
