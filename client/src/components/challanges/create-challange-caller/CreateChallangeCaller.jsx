import { Link } from "react-router";
export default function CreateChallangeCaller() {
  return (
    <>
      <section className="relative bg-gradient-to-r from-black via-gray-900 to-blue-900 text-white py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Ready to Push Your Limits? 🚀
          </h2>

          <p className="mt-4 text-lg text-gray-300">
            Take control of your fitness journey. Create your own challenge and
            inspire yourself to achieve more!
          </p>

          <div className="mt-8">
            <Link
              to="/fitzone/create-challenge"
              className="inline-block bg-white text-black font-bold text-lg py-3 px-8 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
            >
              Create Your Challenge
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
