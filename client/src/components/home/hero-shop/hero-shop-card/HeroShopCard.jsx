import { Link } from "react-router"


export default function HeroShopCard({
  product
}){
    return(
        <>
       
        <Link to={"/fitozne"}>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <p className="text-lg font-bold text-orange-500 mt-4">${product.price}</p>
        <button className="mt-4 bg-orange-500 text-black py-2 px-4 rounded hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V5a4 4 0 00-8 0v6M5 11h14l1 9a2 2 0 01-2 2H6a2 2 0 01-2-2l1-9z"
              />
            </svg>
            Add to cart
          </button>
      </div>
    </div>
    </Link>
        
        </>
    )
}