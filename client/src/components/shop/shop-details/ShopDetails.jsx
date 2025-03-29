export default function ShopDetails(){
    const product = {
        name: "Wireless Headphones",
        description: "Experience unparalleled sound quality with advanced noise cancellation technology.",
        category: "Electronics",
        price: 149.99,
        stock: 25,
        image: "https://media1.popsugar-assets.com/files/thumbor/bL0CrivO7SwhytP_K4sxsjLLITI/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2022/05/03/710/n/1922729/e8c4738cf6980be7_614nOWKE_tL._AC_SL1500_/i/Best-Resistance-Bands-on-Amazon-Leekey-Resistance-Band-Set.jpg", // Replace with an actual image URL
        rating: 4.5,
      };
    return (
        <div className="max-w-5xl mx-auto p-8 mt-20">
          {/* Header and Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto rounded shadow"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <p className="text-gray-700 text-sm mb-6">
                Category: <span className="font-semibold">{product.category}</span>
              </p>
              <p className="text-2xl font-semibold mb-6 text-gray-900">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-gray-700 text-sm mb-6">
                In Stock: <span className="font-semibold">{product.stock}</span>
              </p>
              <p className="text-yellow-500 text-sm mb-6">
                Rating: <span className="font-semibold">{product.rating}</span> / 5
              </p>
    
              {/* Add to Cart Button */}
              <div className="flex space-x-4">
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
              
            >
              Add to Cart 
            </button>
            <button
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded hover:bg-gray-300"
            >
              Continue Shopping -{">"}
            </button>
          </div>
            </div>
          </div>
        </div>
      );
}