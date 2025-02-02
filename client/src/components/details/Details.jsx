export default function Details(){
    const challenge = { id: 2, name: "5K Running Challenge",type:"cardio", difficulty: "advanced", duration:"14",equipment:"none",imageUrl: "https://th.bing.com/th/id/OIP.1DdKsgh7MNkkE45x_BKRiQHaFo?rs=1&pid=ImgDetMain",description:"Burn some calories with our new running challange!"}
    return(
        <>
<div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-20">
      {/* Flexbox Container */}
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Challenge Image */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <img
            src={challenge.imageUrl}
            alt={challenge.name}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        {/* Challenge Details */}
        <div className="w-full md:w-2/3 md:pl-6">
          <h1 className="text-3xl font-bold mb-4">{challenge.name}</h1>
          <p className="text-gray-600 mb-4">{challenge.description}</p>

          <div className="space-y-4">
            <p><strong className="font-medium">Type:</strong> {challenge.type}</p>
            <p><strong className="font-medium">Difficulty:</strong> {challenge.difficulty}</p>
            <p><strong className="font-medium">Duration:</strong> {challenge.duration} days</p>
            <p><strong className="font-medium">Equipment:</strong> {challenge.equipment}</p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            {/* Edit Button */}
            <button
        
              className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              Edit Challenge
            </button>

            {/* Delete Button */}
            <button
              
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
            >
              Delete Challenge
            </button>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}