export default function  ShopCart(){
    return(
        <>
     <div className="fixed top-0 right-0 w-full sm:w-96 h-full bg-gray-100 p-8 shadow-lg transition-transform transform translate-x-0 sm:translate-x-0 mt-20 flex flex-col sm:max-w-xs sm:right-0 overflow-hidden z-50">
  {/* Close Button */}
  <button
    className="absolute top-4 right-4 text-black text-xl font-bold hover:text-gray-600 transition"
    aria-label="Close"
  >
    &times;
  </button>

  {/* Header */}
  <h2 className="text-lg font-bold mb-4">Shopping Cart</h2>

  {/* Cart Items with Scrollbar */}
  <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
    <ul className="space-y-4">
      {[...Array(10)].map((_, index) => (
        <li key={index} className="flex items-center space-x-4 border-b pb-2">
          <img src="https://via.placeholder.com/60" alt="Product Image" className="w-16 h-16 rounded" />
          <div className="flex-1">
            <h3 className="text-sm font-medium">Product {index + 1}</h3>
            <p className="text-gray-500 text-xs">Color: Black</p>
            <p className="text-gray-900 font-semibold">$50.00</p>
          </div>
          <button className="text-red-500 hover:text-red-700">❌</button>
        </li>
      ))}
    </ul>
  </div>

  {/* Cart Footer */}
  <div className="pt-4 bg-white mb-20">
    <div className="flex justify-between text-lg font-semibold">
      <p>Subtotal:</p>
      <p>$500.00</p>
    </div>
    <button className="w-full bg-blue-500 text-white py-2 mt-4 rounded hover:bg-blue-600 transition">
      Checkout
    </button>
    <button className="w-full text-blue-600 mt-2 hover:underline">
      Continue Shopping → 
    </button>
  </div>
</div>
        </>
    )
}