export default function ProfileUserSection({
    user
}){
    return(
        <>
       <div className="flex items-center mb-8">
        <img
          src={user.imageUrl}
          alt={user.name}
          className="w-24 h-24 rounded-full object-cover border-2 border-blue-500"
        />
        <div className="ml-6">
          <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
     
        </>
    )
}