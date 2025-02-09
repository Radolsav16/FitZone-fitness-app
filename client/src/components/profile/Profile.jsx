export default function Profile(){
    return(
        <>
            <div className="max-w-4xl mx-auto p-6 mt-20">
      <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        {/* Profile Header */}
        <div className="flex items-center p-6 bg-gray-800">
          <img
            src="https://th.bing.com/th/id/OIP.hCfHyL8u8XAbreXuaiTMQgHaHZ?rs=1&pid=ImgDetMain"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-orange-500 object-cover"
          />
          <div className="ml-6">
            <h2 className="text-2xl font-bold text-white">Georgi</h2>
            <p className="text-gray-400">gogo@gmail.com</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-4">About Me</h3>
          <p className="text-gray-300">Motivated Person</p>
        </div>

        {/* Edit Profile Button */}
        <div className="p-6 border-t border-gray-700 flex justify-end">
          <button className="px-6 py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
        </>
    )
}