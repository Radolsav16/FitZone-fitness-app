import ShopCart from "../components/shop/shop-cart/ShopCart";
import { useCart } from "../providers/CartProvider";

export default function About() {
  const { showCart } = useCart();
  return (
    <>
      {showCart && <ShopCart />}
      <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen px-8 lg:px-20 gap-12 mt-20">
        <div className="lg:w-1/2 text-left">
          <h1 className="text-6xl font-extrabold text-black-500 drop-shadow-lg">
            About FitZone
          </h1>
          <p className="mt-6 text-2xl font-semibold text-black-100">
            Get Fit,Stay Motivated ,and Connect with Others - All in Fitzone!
          </p>
          <p className="mt-4 text-lg text-black-300 leading-relaxed">
            <strong>Welcome to Fitzone</strong>, the ultimate fitness platform
            designed to help you achieve your goals while staying inspired!
            Whether you're a beginner or a pro, our app has everything you need
            to stay on track:
            <br />
            🔥 <strong>Fitness Shop</strong>– Buy high-quality gym equipment,
            supplements, and workout apparel right from the app. <br />
            🏆<strong>Join & Create Challenges</strong> – Set goals, challenge
            yourself, and compete with friends to stay motivated.
            <br />
            💬 <strong>Community & Blog</strong> – Post, comment, and like blogs
            to share experiences and connect with fellow fitness enthusiasts.{" "}
            <br />
            🏋️‍♂️ <strong>Exercises Library </strong> – Access detailed workouts,
            exercises, and training plans to improve your fitness.
          </p>
          <p className="mt-4 text-lg text-black-300 leading-relaxed">
            Join us today and{" "}
            <strong>connect with like-minded fitness enthusiasts</strong> to
            stay accountable and push your limits!
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/assets/banner.png"
            alt="FitZone Community"
            className="rounded-2xl shadow-lg w-full max-w-lg"
          />
        </div>
      </div>
    </>
  );
}
