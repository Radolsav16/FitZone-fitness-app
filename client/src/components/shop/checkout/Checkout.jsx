import { useCreateOrder, useDeleteProductFromCart, useEmptyCart, useUserCart } from "../../../api/shopApi";
import { useUserContext } from "../../../contexts/UserContext";
import { useFormState } from "../../../hooks/FormStateHook";
import { updateCart, updateCartOnDelete } from "../../../utils/updateCart";
import { Link, useNavigate } from "react-router";
import { ErrorSetter } from "../../../utils/Errors";
import { useCart } from "../../../providers/CartProvider";

const Checkout = () => {
  const { id, name, email, userLoginHandler } = useUserContext();
  const { cart, setCart } = useUserCart(id);
  const { deleteProductFromCart} = useDeleteProductFromCart(id);
  const {emtpyCart} = useEmptyCart(id)
  const { setOrderModal , setShowCart} = useCart()
  const { dataState, handleDataOnChange, errors, SetErrors } = useFormState({
    address: "",
    contact: "",
  });

  const navigate = useNavigate()

  const { createOrder } = useCreateOrder(id)
  const CalculateTotalPrice = () => {
    return cart.reduce((total, item) => {
      return (total += Number(item.productId.price * item.quantity));
    }, 0);
  };

  const orderHandler = async (formData) => {
    const data = Object.fromEntries(formData);

    if (!data.address) {
      return ErrorSetter(errors, SetErrors, "address", "Adress is required!");
    }

    if (!data.contact) {
      console.log("here");
      return ErrorSetter(errors, SetErrors, "contact", "Contact is required!");
    }

    data.products = cart.map(i => i.productId._id);

    if(!data.products.length){
      return ErrorSetter(errors, SetErrors, "contact", "Should have products in the cart to make order!");
    }
    
    data.total = CalculateTotalPrice()

    await createOrder(data)
    await emtpyCart()
    setCart([]);

    const updatedAuth = updateCart([]);
    userLoginHandler(updatedAuth)
    setOrderModal(true)
    setShowCart(false);
    navigate('/')
  };
 

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
        <ul className="space-y-4">
          {cart.map((item) => (
            <li
              key={item.productId}
              className="flex justify-between items-center border-b pb-4"
            >
              <Link to={`/fitzone/product/details/${item.productId?._id}`}>
              <img
                src={item.productId?.image}
                alt={item.productId?.name}
                className="w-19 h-16 object-cover rounded"
              />
                </Link>
              <div className="flex-1 ml-4">
                <h3 className="text-gray-900 font-medium">
                  {item.productId?.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  Quantity: {item.quantity}
                </p>
              </div>
              <p className="text-gray-900">
                ${item.productId.price.toFixed(2)}
              </p>
            
              <button
                className="text-red-500 hover:text-red-700 font-medium ml-4 mb-1"
                onClick={() => {
                  deleteProductFromCart(item.productId);
                  setCart([
                    ...cart.filter((o) => o.productId != item.productId),
                  ]);
                  const updatedAuth = updateCartOnDelete(item.productId);
                  userLoginHandler(updatedAuth);
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div className="flex justify-between mt-6 text-lg">
          <p>Total:</p>
          <p className="font-bold">${CalculateTotalPrice().toFixed(2)}</p>
        </div>
      </section>

      {/* Shipping Details Form */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Shipping Details</h2>
        <form className="space-y-4" action={orderHandler}>
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
              disabled
              value={name}
              className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your full name"
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
              disabled
              value={email}
              className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email address"
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
              value={dataState.address}
              onChange={handleDataOnChange}
              className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your shipping address"
            />
            {errors["address"] && (
              <p className="mt-2 text-sm text-red-600">{errors?.address}</p>
            )}
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
              value={dataState.contact}
              onChange={handleDataOnChange}
              className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your contact number"
            />
            {errors["contact"] && (
              <p className="mt-2 text-sm text-red-600">{errors?.contact}</p>
            )}
          </div>

          <div className="flex justify-center space-x-4">
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
              type="submit"
            >
              Confirm Order
            </button>
            <Link
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded hover:bg-gray-300"
              to={"/fitzone/shop"}
            >
              Back to Shop
            </Link>
          </div>
        </form>
      </section>

      {/* Buttons */}
    </div>
  );
};

export default Checkout;
