export default function HeroProgramm(){
    return(
        <>
        <section className="bg-gradient-to-r from-black via-gray-800 to-black text-white py-16 px-6">
  <div className="container mx-auto">
    {/* Workout Programs Section */}
    <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
  <div className="md:w-1/2">
    <img
      src="https://www.mensfitclub.com/wp-content/uploads/2023/08/workout-program.jpg"
      alt="Workout Programs"
      className="rounded-lg shadow-xl w-full h-auto"
    />
  </div>
  <div className="text-center md:text-left md:w-1/2">
    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Explore Shop!
    </h2>
    <p className="text-lg md:text-xl mb-8">
    Explore high-quality gym gear and products designed to support your workout and lifestyle goals. From apparel to equipment, we've got everything you need to train harder and smarter.
    </p>
    <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-10 rounded-md text-lg font-semibold shadow-md transition-transform transform hover:scale-105">
      Shop Now
    </button>
  </div>
</div>

    {/* Featured Programs Section */}
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold text-orange-500">Featured Programs</h2>
      <p className="text-gray-300 mt-2">Discover and purchase exclusive fitness programs created by experts!</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Program Card 1 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Program 1"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-black">Strength Builder Program</h3>
          <p className="text-gray-600 mt-2">A complete guide to improving strength with structured workouts.</p>
          <p className="text-lg font-bold text-orange-500 mt-4">$19.99</p>
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
            Buy Now
          </button>
        </div>
      </div>
      {/* Program Card 2 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Program 2"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-black">Yoga Masterclass</h3>
          <p className="text-gray-600 mt-2">Achieve balance and flexibility with this beginner-friendly yoga program.</p>
          <p className="text-lg font-bold text-orange-500 mt-4">$14.99</p>
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
            Buy Now
          </button>
        </div>
      </div>
      {/* Program Card 3 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Program 3"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-black">Quick Weight Loss Plan</h3>
          <p className="text-gray-600 mt-2">Lose weight effectively with curated meal plans and workouts.</p>
          <p className="text-lg font-bold text-orange-500 mt-4">$24.99</p>
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
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    )
}