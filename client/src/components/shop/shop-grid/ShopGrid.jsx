const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$10.00",
    image: "https://th.bing.com/th/id/OIP.Dx51gSVcS2slj-NEcZmI0gHaHu?rs=1&pid=ImgDetMain", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Product 2",
    price: "$20.00",
    image: "https://th.bing.com/th/id/OIP.Dx51gSVcS2slj-NEcZmI0gHaHu?rs=1&pid=ImgDetMain", // Replace with actual image URL
  },
  {
    id: 3,
    name: "Product 3",
    price: "$30.00",
    image: "https://th.bing.com/th/id/OIP.Dx51gSVcS2slj-NEcZmI0gHaHu?rs=1&pid=ImgDetMain", // Replace with actual image URL
  },
  {
      id: 1,
      name: "Product 1",
      price: "$10.00",
      image: "https://th.bing.com/th/id/OIP.Dx51gSVcS2slj-NEcZmI0gHaHu?rs=1&pid=ImgDetMain", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Product 2",
      price: "$20.00",
      image: "https://th.bing.com/th/id/OIP.Dx51gSVcS2slj-NEcZmI0gHaHu?rs=1&pid=ImgDetMain", // Replace with actual image URL
    },
    {
      id: 3,
      name: "Product 3",
      price: "$30.00",
      image: "https://th.bing.com/th/id/OIP.Dx51gSVcS2slj-NEcZmI0gHaHu?rs=1&pid=ImgDetMain", // Replace with actual image URL
    }
];


export default function ShopGrid(){
  return(
    <>
    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
{products.map((product) => (
   <div
   key={product.id}
   className="border p-4 rounded shadow-lg flex flex-col items-center"
 >
   <img
     src={product.image}
     alt={product.name}
     className="w-full h-auto rounded mb-4"
   />
   <h2 className="text-lg font-bold">{product.name}</h2>
   <p className="text-gray-700">{product.price}</p>
   <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded flex items-center">
     <svg
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       strokeWidth={2}
       stroke="currentColor"
       className="w-5 h-5 mr-2"
     >
       <path
         strokeLinecap="round"
         strokeLinejoin="round"
         d="M3 3h2l3.6 7.59a1 1 0 00.92.61H17a1 1 0 001-.85l1.36-8.35H5.4M7 23a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z"
       />
     </svg>
     Add to Cart
   </button>
 </div>
))}
</div>
    </>
  )
}
