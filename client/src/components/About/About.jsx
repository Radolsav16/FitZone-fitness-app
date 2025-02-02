
export default function About() {
  return (
  <>
      <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen px-8 lg:px-20 gap-12">
        {/* Left Side - Text */}
        <div className="lg:w-1/2 text-left">
          <h1 className="text-6xl font-extrabold text-black-500 drop-shadow-lg">
            About FitZone
          </h1>
          <p className="mt-6 text-2xl font-semibold text-black-100">
            FitZone is more than just a fitness app – it’s a community.
          </p>
          <p className="mt-4 text-lg text-black-300 leading-relaxed">
            We empower individuals to achieve their health and wellness goals through <strong>workouts, challenges, and social interaction.</strong>
            Whether you're a beginner or a pro, FitZone provides the tools and motivation to keep you moving.
          </p>
          <p className="mt-4 text-lg text-black-300 leading-relaxed">
            Join us today and <strong>connect with like-minded fitness enthusiasts</strong> to stay accountable and push your limits!
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/images/banner.png"
            alt="FitZone Community"
            className="rounded-2xl shadow-lg w-full max-w-lg"
          />
        </div>
      </div>
  </>
  )
}
