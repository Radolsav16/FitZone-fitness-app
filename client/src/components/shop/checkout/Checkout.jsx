import React, { useState } from "react";

const Checkout = () => {
  // Mock Data
  const initialCartItems = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      quantity: 1,
      image: "https://media1.popsugar-assets.com/files/thumbor/bL0CrivO7SwhytP_K4sxsjLLITI/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2022/05/03/710/n/1922729/e8c4738cf6980be7_614nOWKE_tL._AC_SL1500_/i/Best-Resistance-Bands-on-Amazon-Leekey-Resistance-Band-Set.jpg", // Replace with actual image
    },
    {
      id: 2,
      name: "Smartphone Case",
      price: 19.99,
      quantity: 2,
      image: "https://media1.popsugar-assets.com/files/thumbor/bL0CrivO7SwhytP_K4sxsjLLITI/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2022/05/03/710/n/1922729/e8c4738cf6980be7_614nOWKE_tL._AC_SL1500_/i/Best-Resistance-Bands-on-Amazon-Leekey-Resistance-Band-Set.jpg", // Replace with actual image
    },
    {
      id: 3,
      name: "Laptop Stand",
      price: 49.99,
      quantity: 1,
      image: "https://media1.popsugar-assets.com/files/thumbor/bL0CrivO7SwhytP_K4sxsjLLITI/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2022/05/03/710/n/1922729/e8c4738cf6980be7_614nOWKE_tL._AC_SL1500_/i/Best-Resistance-Bands-on-Amazon-Leekey-Resistance-Band-Set.jpg", // Replace with actual image
    },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    address: "",
    contact: "",
    email: "",
  });

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails({ ...shippingDetails, [name]: value });
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleConfirmOrder = () => {
    if (
      !shippingDetails.name ||
      !shippingDetails.address ||
      !shippingDetails.contact ||
      !shippingDetails.email
    ) {
      alert("Please fill in all shipping details!");
      return;
    }
    alert("Order confirmed! Thank you for shopping with us.");
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {/* Cart Summary */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b pb-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-19 h-16 object-cover rounded"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-gray-900 font-medium">{item.name}</h3>
                <p className="text-gray-600 text-sm">Quantity: {item.quantity}</p>
              </div>
              <p className="text-gray-900">
                ${item.price.toFixed(2)} x {item.quantity} = $
                {(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                className="text-red-500 hover:text-red-700 font-medium ml-3 mb-1"
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div className="flex justify-between mt-6 text-lg">
          <p>Subtotal:</p>
          <p className="font-bold">${subtotal.toFixed(2)}</p>
        </div>
      </section>

      {/* Shipping Details Form */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Shipping Details</h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={shippingDetails.name}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-lg font-medium text-gray-700"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={shippingDetails.address}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your shipping address"
            />
          </div>
          <div>
            <label
              htmlFor="contact"
              className="block text-lg font-medium text-gray-700"
            >
              Contact Number
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={shippingDetails.contact}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your contact number"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={shippingDetails.email}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email address"
            />
          </div>
        </form>
      </section>

      {/* Buttons */}
      <div className="flex justify-center space-x-4">
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
          onClick={handleConfirmOrder}
        >
          Confirm Order
        </button>
        <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded hover:bg-gray-300">
          Back to Shop
        </button>
      </div>
    </div>
  );
};

export default Checkout;