import { useOrders } from "../api/shopApi";
import { DateConverter } from "../utils/DateConverter";
import {Link} from 'react-router'

export default function Orders() {
  const { orders } = useOrders();

  return (
    <>
   <div className="container mx-auto p-6">
  <h1 className="text-2xl font-bold mb-4">Your Orders</h1>
  <div className="bg-white shadow-md rounded-lg p-4">
    <table className="w-full border-collapse border border-gray-200">
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
            <td className="border border-gray-300 p-2">
              {DateConverter(o.createdAt)}
            </td>
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
            <td className="border border-gray-300 p-2">
              ${o.total.toFixed(2)}
            </td>
          </tr>
        )) : (
          <tr>
            <td colSpan="6" className="text-center py-8">
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-gray-500 text-lg mb-4">
                  You don't have any orders yet.
                </h1>
                <Link
                  to="/fitzone/shop"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Go to Shop
                </Link>
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>
    </>
  );
}
