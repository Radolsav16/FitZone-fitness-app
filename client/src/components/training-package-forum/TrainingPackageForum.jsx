import { useState } from "react";
// import { X } from "lucide-react"; // Icon for the close button

export default function TrainingPackageForum(){
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
    });
    const JoinProgramForm = () => {
       
    }   
      
        const toggleForm = () => setIsOpen(!isOpen);
      
        const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        };
    
      
    return(
        <>

    <div>
      {/* Button to Open Form */}
      <button
        onClick={toggleForm}
        className="fixed top-10 right-10 bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300 font-bold"
      >
        Join Program
      </button>

      {/* Slide-in Form Container */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col p-6`}
      >
        {/* Close Button */}
        <button
          onClick={toggleForm}
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
        >
          
        </button>

        {/* Form Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Join Our Program
        </h2>

        {/* First Name Input */}
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-orange-500 focus:outline-none"
        />

        {/* Last Name Input */}
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-orange-500 focus:outline-none"
        />

        {/* Email Input */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:ring-2 focus:ring-orange-500 focus:outline-none"
        />

<input
          type="text"
          name="phoneNumber"
          value={formData.email}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:ring-2 focus:ring-orange-500 focus:outline-none"
        />


        {/* Submit Button */}
        <button
  className="w-full bg-black-500 text-black py-3 rounded-lg font-bold hover:bg-black-600 border border-black transition duration-300"
>
  Join Now
</button>

      </div>
    </div>
        </>
    )
}