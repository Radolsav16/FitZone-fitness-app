import { useCart } from "../../../providers/CartProvider"

export default function SuccesfullOrderModal(){
    const {setOrderModal} = useCart()
    return(
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
        <h2 className="text-2xl text-center font-semibold text-green-600">
         Order Successful! 🎉
        </h2>
        <p className="text-gray-600 text-center mt-2">
          Check your email for more delivery information!
        </p>
        <button
          onClick={()=>setOrderModal(false)}
          className="w-full bg-blue-500 text-white py-2 mt-4 rounded hover:bg-blue-600 transition"
        >
          Close
        </button>
      </div>
    </div>
        </>
    )
}