import { useState } from "react";

const conversationsData = [
  {
    id: 1,
    name: "Georgi",
    lastMessage: "Keep it up! 💪",
    time: "10:35 AM",
    profileImage: "https://th.bing.com/th/id/OIP.hCfHyL8u8XAbreXuaiTMQgHaHZ?rs=1&pid=ImgDetMain",
  },
  {
    id: 2,
    name: "Jane Smith",
    lastMessage: "Let's start the challenge tomorrow!",
    time: "9:00 AM",
    profileImage: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    name: "Alex Johnson",
    lastMessage: "Did you complete the workout?",
    time: "Yesterday",
    profileImage: "https://via.placeholder.com/50",
  },
];

export default function MessagingOverview() {
  const [conversations] = useState(conversationsData);
  const [activeChat, setActiveChat] = useState(null);

  return (
    <div className="max-w-7xl mx-auto p-6 h-[85vh] bg-gray-900 rounded-lg shadow-lg flex mt-20">
      {/* Conversations List */}
      <div className="w-1/3 bg-gray-800 rounded-l-lg overflow-y-auto">
        <h2 className="text-white text-lg font-bold p-4 border-b border-gray-700">Chats</h2>
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className={`flex items-center p-4 border-b border-gray-700 cursor-pointer ${
              activeChat?.id === conversation.id ? "bg-gray-700" : ""
            } hover:bg-gray-700 transition`}
            onClick={() => setActiveChat(conversation)}
          >
            <img
              src={conversation.profileImage}
              alt={conversation.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="flex-1">
              <h3 className="text-white font-semibold">{conversation.name}</h3>
              <p className="text-gray-400 text-sm truncate">{conversation.lastMessage}</p>
            </div>
            <p className="text-gray-500 text-xs ml-4">{conversation.time}</p>
          </div>
        ))}
      </div>

      {/* Active Chat */}
      <div className="w-2/3 bg-gray-900 rounded-r-lg flex flex-col">
        {activeChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 bg-gray-800 border-b border-gray-700 flex items-center">
              <img
                src={activeChat.profileImage}
                alt={activeChat.name}
                className="w-10 h-10 rounded-full mr-4"
              />
              <h2 className="text-white text-lg font-bold">{activeChat.name}</h2>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4">
              <p className="text-gray-400">This is where the messages will appear for {activeChat.name}.</p>
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-700">
              <div className="flex items-center">
                <input
                  type="text"
                  className="flex-1 p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Type your message..."
                />
                <button className="ml-4 px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition">
                  Send
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-400">Select a conversation to start chatting.</p>
          </div>
        )}
      </div>
    </div>
  );
}
