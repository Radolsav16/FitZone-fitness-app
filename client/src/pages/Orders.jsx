import { useOrders } from "../api/shopApi";
import ShopCart from "../components/shop/shop-cart/ShopCart";
import { useCart } from "../providers/CartProvider";
import { DateConverter } from "../utils/DateConverter";


export default function Orders() {
  const { orders } = useOrders();
  const {showCart} = useCart()

  return (
    <>
    {showCart && <ShopCart />}
    <div className="container mx-auto p-6 mt-20">
      <h1 className="text-2xl font-bold mb-4">Shop Orders</h1>
      <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 hidden md:table">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Order ID</th>
              <th className="border border-gray-300 p-2">Date</th>
              <th className="border border-gray-300 p-2">Address</th>
              <th className="border border-gray-300 p-2">Contact</th>
              <th className="border border-gray-300 p-2">Products</th>
              <th className="border border-gray-300 p-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? orders.map((o) => (
              <tr className="text-center border-t" key={o._id}>
                <td className="border border-gray-300 p-2">{o._id}</td>
                <td className="border border-gray-300 p-2">{DateConverter(o.createdAt)}</td>
                <td className="border border-gray-300 p-2">{o.address}</td>
                <td className="border border-gray-300 p-2">{o.contact}</td>
                <td className="border border-gray-300 p-2">
                  {o.products.map((p) => (
                    <div className="flex items-center gap-2 mb-2" key={p._id}>
                      <img src={p.image} alt={p.name} className="w-12 h-12" />
                      <div>
                        <p className="text-sm font-medium">{p.name}</p>
                      </div>
                    </div>
                  ))}
                </td>
                <td className="border border-gray-300 p-2">${o.total.toFixed(2)}</td>
              </tr>
            )) : (
              <tr>
                <td colSpan="6" className="text-center py-8">
                  <div className="flex flex-col items-center justify-center">
                    <h1 className="text-black-500 text-lg mb-4">Shop doesn't have any orders yet!</h1>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Mobile View */}
        <div className="md:hidden">
          {orders.length > 0 ? orders.map((o) => (
            <div className="bg-gray-100 p-4 mb-4 rounded-lg shadow" key={o._id}>
              <p className="text-sm font-semibold">Order ID: {o._id}</p>
              <p className="text-sm">Date: {DateConverter(o.createdAt)}</p>
              <p className="text-sm">Address: {o.address}</p>
              <p className="text-sm">Contact: {o.contact}</p>
              <div className="mt-2">
                <p className="text-sm font-semibold">Products:</p>
                {o.products.map((p) => (
                  <div className="flex items-center gap-2 mt-2" key={p._id}>
                    <img src={p.image} alt={p.name} className="w-12 h-12" />
                    <p className="text-sm">{p.name}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm font-semibold mt-2">Total: ${o.total.toFixed(2)}</p>
            </div>
          )) : (
            <div className="text-center py-8">
              <h1 className="text-black-500 text-lg mb-4">Shop doesn't have any orders yet!</h1>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}
