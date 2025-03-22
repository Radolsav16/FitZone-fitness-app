import { useState } from "react";

const EnterGender = () => {
  const [selectedGender, setSelectedGender] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-lg text-center flex flex-col">
        <h2 className="font-bold text-gray-900 text-3xl">Select Your Gender</h2>

        {/* Radio Buttons */}
        <div className="mt-6 flex justify-center gap-8">
          {/* Male Option */}
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={selectedGender === "male"}
              onChange={() => setSelectedGender("male")}
              className="hidden"
            />
            <div
              className={`w-6 h-6 border-2 rounded-full flex items-center justify-center transition-all ${
                selectedGender === "male"
                  ? "border-black-500 bg-black-500"
                  : "border-gray-400"
              }`}
            >
              {selectedGender === "male" && (
                <div className="w-3 h-3 bg-black rounded-full"></div>
              )}
            </div>
            <span className="text-gray-900 font-medium">Male</span>
          </label>

          {/* Female Option */}
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={selectedGender === "female"}
              onChange={() => setSelectedGender("female")}
              className="hidden"
            />
            <div
              className={`w-6 h-6 border-2 rounded-full flex items-center justify-center transition-all ${
                selectedGender === "female"
                  ? "border-black-500 bg-black-500"
                  : "border-gray-400"
              }`}
            >
              {selectedGender === "female" && (
                <div className="w-3 h-3 bg-black rounded-full"></div>
              )}
            </div>
            <span className="text-gray-900 font-medium">Female</span>
          </label>
        </div>

        {/* Submit Button - Large & Lower */}
        <div className="mt-12 w-full">
          <button
            className="block w-full py-4 bg-orange-500 text-black font-bold rounded-lg text-lg shadow-md hover:bg-orange-600 hover:shadow-lg transition duration-300"
            disabled={!selectedGender}
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnterGender;
