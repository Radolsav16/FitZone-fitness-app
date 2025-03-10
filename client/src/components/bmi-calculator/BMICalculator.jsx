import { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState("");

  // Function to Calculate BMI
  const calculateBMI = () => {
    if (!weight || !height) return;
    
    const heightInMeters = height / 100; // Convert cm to meters
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    setBMI(bmiValue);
    
    // Set BMI Category
    if (bmiValue < 18.5) setCategory("Underweight");
    else if (bmiValue < 24.9) setCategory("Normal");
    else if (bmiValue < 29.9) setCategory("Overweight");
    else setCategory("Obese");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-orange-500 mb-4">BMI Calculator</h2>

        {/* Weight Input */}
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:ring-orange-500"
          />
        </div>

        {/* Height Input */}
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:ring-orange-500"
          />
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateBMI}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-lg transition"
        >
          Calculate BMI
        </button>

        {/* BMI Result Display */}
        {bmi && (
        <div className="mt-6 p-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-center shadow-lg">
        <p className="text-2xl text-white font-extrabold tracking-wide leading-tight">
          You are  <span className="text-white-400">{category}</span>!
        </p>
      </div>
      
        )}
      </div>
    </div>
  
      )}

export default BMICalculator;      