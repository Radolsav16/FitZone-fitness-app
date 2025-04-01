import {Link} from 'react-router'
import {  useUserOrders } from '../api/shopApi'
import { useUserContext } from '../contexts/UserContext'

export default function UsersOrders(){
    const {id} = useUserContext()
    const {orders} = useUserOrders(id)
    return(
        <>
          <div className="bg-white shadow-lg rounded-2xl p-6 mt-20">
      <h2 className="text-2xl font-bold mb-4">Your Orders</h2>

      {orders.length === 0 ? (
        <div className="text-center">
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
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order._id} className="border border-gray-300 p-4 rounded-lg">
              <p className="font-medium text-gray-700">Order ID: {order._id}</p>
              <p className="text-gray-500">Total: ${order.total.toFixed(2)}</p>
              <div className="mt-2">
                {order.products.map((product) => (
                  <div key={product._id} className="flex items-center gap-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 rounded-md"
                    />
                    <div>
                      <p className="text-sm font-medium">{product.name}</p>
                      <p className="text-xs text-gray-500">${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
        
        </>
    )
}