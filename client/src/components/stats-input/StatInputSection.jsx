const StatInputSection = ({ stat, type, statEnterLabel, name }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-lg text-center flex flex-col">
        <h2 className="font-bold text-gray-900 text-3xl">{stat}</h2>

        {/* Input Field - Full Width */}
        <input
          type={type}
          placeholder={statEnterLabel}
          name={name}
          className="mt-6 p-4 border-2 border-gray-300 rounded-lg w-full text-center text-lg focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-900"
        />

        {/* Button - Large & Lower */}
        <div className="mt-12 w-full">
          <button
            className="block w-full py-4 bg-orange-500 text-black font-bold rounded-lg text-lg shadow-md hover:bg-orange-600 hover:shadow-lg transition duration-300"
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatInputSection;
