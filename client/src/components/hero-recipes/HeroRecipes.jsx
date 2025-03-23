export default function HeroRecipes(){
    return (
        <>
          <section className="relative bg-black text-white py-20 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Discover Healthy Meal Recipes
          </h1>
          <p className="text-lg md:text-xl font-bold mb-8 text-orange">
            Explore a variety of delicious and nutrient-packed recipes to fuel your body and mind!
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-lg transform transition-transform hover:scale-105">
            See it now!
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://img.freepik.com/premium-photo/healthy-food_553012-11240.jpg"
            alt="Healthy Meals"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </section>
        </>
    )
}