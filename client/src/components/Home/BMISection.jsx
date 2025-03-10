import { Link } from "react-router-dom";

const BMISection = () => {
    return (
      <div className="relative flex items-center justify-center h-screen bg-gray-900 text-white">
        {/* Background Image (Optional) */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://images.hdqwalls.com/download/girl-fitness-model-pic-2880x1800.jpg')" }}></div>
  
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-2xl p-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500">
            Track Your Fitness Journey
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Check does you are in healthy weigth with our BMI analysator!
          </p>
  
          {/* CTA Button */}
          <Link to="/fitzone/bmi-calculator">
            <button className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg text-lg transition">
              Check it now!
            </button>
          </Link>
        </div>
      </div>
    );
  };
  
  

export default BMISection;