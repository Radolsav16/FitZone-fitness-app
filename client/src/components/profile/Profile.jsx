export default function Profile(){
    return(
        <>
          <div className="max-w-4xl mx-auto p-6 mt-20 space-y-12">
  {/* Profile Header */}
  <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
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

    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-4">About Me</h3>
      <p className="text-gray-300">Motivated Person</p>
    </div>

    <div className="p-6 border-t border-gray-700 flex justify-end">
      <button className="px-6 py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition">
        Edit Profile
      </button>
    </div>
  </div>

  {/* Saved Challenges Section */}
  <div className="bg-gray-900 rounded-lg shadow-lg p-6">
    <h3 className="text-2xl font-semibold text-white mb-4">Saved Challenges</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[1, 2].map((challenge) => (
        <div key={challenge} className="bg-gray-800 p-4 rounded-lg flex space-x-4">
          <img
            src="https://via.placeholder.com/100"
            alt="Challenge"
            className="w-24 h-24 rounded object-cover"
          />
          <div>
            <h4 className="text-lg font-bold text-orange-500">Challenge #{challenge}</h4>
            <p className="text-gray-400">This is a short description of the challenge.</p>
            <button className="mt-2 text-orange-400 hover:text-orange-300 transition">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Liked Posts Section */}
  <div className="bg-gray-900 rounded-lg shadow-lg p-6">
    <h3 className="text-2xl font-semibold text-white mb-4">Liked Posts</h3>
    <div className="space-y-6">
      {[1, 2, 3].map((post) => (
        <div key={post} className="bg-gray-800 p-4 rounded-lg flex space-x-4">
          <img
            src="https://via.placeholder.com/100"
            alt="Post"
            className="w-24 h-24 rounded object-cover"
          />
          <div>
            <h4 className="text-lg font-bold text-orange-500">Post Title #{post}</h4>
            <p className="text-gray-400">This is a preview of the post content.</p>
            <button className="mt-2 text-orange-400 hover:text-orange-300 transition">
              View Post
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

        </>
    )
}


