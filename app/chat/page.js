// 'use client';

// import { useState } from 'react';
// import { MessageSquare, Users, Hash, Search, PlusCircle, Send, Smile, Paperclip } from 'lucide-react';

// export default function ChatPage() {
//   // Mock state for demo purposes
//   const [activeChannel, setActiveChannel] = useState('general');
//   const [message, setMessage] = useState('');
//   const [showInterestModal, setShowInterestModal] = useState(true);
  
//   // Mock data
//   const channels = [
//     { id: 'general', name: 'general', unread: 3 },
//     { id: 'mcat-2025', name: 'mcat-2025', unread: 0 },
//     { id: 'cpa-questions', name: 'cpa-questions', unread: 12 },
//     { id: 'bar-exam', name: 'bar-exam', unread: 5 },
//   ];
  
//   const directMessages = [
//     { id: 'sarah', name: 'Sarah Kim', status: 'online', avatar: '👩🏻' },
//     { id: 'alex', name: 'Alex Johnson', status: 'offline', avatar: '👨🏽' },
//     { id: 'priya', name: 'Priya Patel', status: 'online', avatar: '👩🏾' },
//   ];
  
//   const messages = [
//     { id: 1, user: 'Sarah Kim', avatar: '👩🏻', time: '10:23 AM', content: "Has anyone taken practice test 3 yet? The biochem section was brutal!", reactions: ['👍', '😮'] },
//     { id: 2, user: 'Alex Johnson', avatar: '👨🏽', time: '10:25 AM', content: "Yeah, I just finished it yesterday. I thought the organic chem was actually harder than the biochem.", reactions: [] },
//     { id: 3, user: 'Priya Patel', avatar: '👩🏾', time: '10:30 AM', content: "Anyone want to form a study group for next week? I am struggling with those enzyme kinetics problems.", reactions: ['🙌', '✅'] },
//   ];
  
//   const handleSendMessage = (e) => {
//     e.preventDefault();
//     // In a real app, this would send the message to your backend
//     setMessage('');
//   };
  
//   const handleCloseModal = () => {
//     setShowInterestModal(false);
//   };
  
//   const handleJoinChat = () => {
//     setShowInterestModal(false);
//     // In a real app, this would activate the user's account in the chat system
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="w-64 bg-indigo-900 text-white flex flex-col">
//         {/* Workspace header */}
//         <div className="p-4 border-b border-indigo-800">
//           <h2 className="font-bold text-xl">Scoorly Chat</h2>
//           <p className="text-indigo-300 text-sm">Connect & Study Together</p>
//         </div>
        
//         {/* Channels */}
//         <div className="p-4">
//           <div className="flex items-center justify-between mb-2">
//             <h3 className="text-indigo-300 text-sm font-medium uppercase tracking-wider">Channels</h3>
//             <button className="text-indigo-300 hover:text-white">
//               <PlusCircle size={16} />
//             </button>
//           </div>
//           <ul className="space-y-1">
//             {channels.map(channel => (
//               <li key={channel.id}>
//                 <button 
//                   className={`flex items-center w-full text-left rounded px-2 py-1.5 text-sm ${activeChannel === channel.id ? 'bg-indigo-700 text-white' : 'text-indigo-100 hover:bg-indigo-800'}`}
//                   onClick={() => setActiveChannel(channel.id)}
//                 >
//                   <Hash size={16} className="mr-2 flex-shrink-0" />
//                   <span className="truncate">{channel.name}</span>
//                   {channel.unread > 0 && (
//                     <span className="ml-auto bg-red-500 text-white text-xs font-bold rounded-full h-5 min-w-5 flex items-center justify-center px-1">{channel.unread}</span>
//                   )}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
        
//         {/* Direct Messages */}
//         <div className="p-4">
//           <div className="flex items-center justify-between mb-2">
//             <h3 className="text-indigo-300 text-sm font-medium uppercase tracking-wider">Direct Messages</h3>
//             <button className="text-indigo-300 hover:text-white">
//               <PlusCircle size={16} />
//             </button>
//           </div>
//           <ul className="space-y-1">
//             {directMessages.map(dm => (
//               <li key={dm.id}>
//                 <button 
//                   className={`flex items-center w-full text-left rounded px-2 py-1.5 text-sm ${activeChannel === dm.id ? 'bg-indigo-700 text-white' : 'text-indigo-100 hover:bg-indigo-800'}`}
//                   onClick={() => setActiveChannel(dm.id)}
//                 >
//                   <div className="mr-2 text-lg">{dm.avatar}</div>
//                   <span className="truncate">{dm.name}</span>
//                   <span className={`ml-auto w-2 h-2 rounded-full ${dm.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
        
//         {/* Find Study Buddies */}
//         <div className="mt-auto p-4 border-t border-indigo-800">
//           <button className="flex items-center justify-center w-full py-2 px-3 bg-indigo-700 hover:bg-indigo-600 text-white rounded-md transition-colors">
//             <Users size={16} className="mr-2" />
//             Find Study Buddies
//           </button>
//         </div>
//       </div>
      
//       {/* Main Chat Area */}
//       <div className="flex-1 flex flex-col bg-white">
//         {/* Channel header */}
//         <div className="border-b px-6 py-3 flex items-center bg-white">
//           <Hash size={20} className="mr-2 text-gray-600" />
//           <div>
//             <h2 className="font-bold text-lg">{activeChannel}</h2>
//             <p className="text-sm text-gray-500">Connect with other exam takers studying for the same test</p>
//           </div>
//           <div className="ml-auto flex items-center space-x-4">
//             <button className="text-gray-500 hover:text-gray-700">
//               <Users size={18} />
//             </button>
//             <div className="relative">
//               <Search size={16} className="text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
//               <input 
//                 type="text" 
//                 placeholder="Search messages" 
//                 className="bg-gray-100 py-2 pl-9 pr-4 rounded-full text-sm w-56"
//               />
//             </div>
//           </div>
//         </div>
        
//         {/* Messages */}
//         <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50">
//           {messages.map(msg => (
//             <div key={msg.id} className="flex items-start group hover:bg-gray-100 p-2 -m-2 rounded-lg transition-colors">
//               <div className="mr-4 text-2xl flex-shrink-0">{msg.avatar}</div>
//               <div className="flex-1 min-w-0">
//                 <div className="flex items-baseline">
//                   <h4 className="font-bold">{msg.user}</h4>
//                   <span className="ml-2 text-xs text-gray-500">{msg.time}</span>
//                 </div>
//                 <p className="text-gray-800 mt-1">{msg.content}</p>
                
//                 {/* Reactions */}
//                 {msg.reactions.length > 0 && (
//                   <div className="flex mt-2 space-x-1">
//                     {msg.reactions.map((reaction, index) => (
//                       <button key={index} className="bg-white border border-gray-200 text-sm rounded-full px-2 py-0.5 hover:bg-gray-100">
//                         {reaction} 1
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
              
//               {/* Hover actions */}
//               <div className="hidden group-hover:flex items-center space-x-1">
//                 <button className="text-gray-400 hover:text-gray-600 p-1.5 hover:bg-gray-200 rounded">
//                   <Smile size={16} />
//                 </button>
//                 <button className="text-gray-400 hover:text-gray-600 p-1.5 hover:bg-gray-200 rounded">
//                   <MessageSquare size={16} />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {/* Message Input */}
//         <div className="p-4 border-t bg-white">
//           <form onSubmit={handleSendMessage} className="flex items-center">
//             <button type="button" className="text-gray-500 hover:text-gray-700 mr-3 p-1 hover:bg-gray-100 rounded">
//               <Paperclip size={18} />
//             </button>
//             <input 
//               type="text" 
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder={`Message #${activeChannel}`}
//               className="flex-1 border border-gray-300 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//             />
//             <button type="button" className="text-gray-500 hover:text-gray-700 mx-3 p-1 hover:bg-gray-100 rounded">
//               <Smile size={18} />
//             </button>
//             <button 
//               type="submit" 
//               disabled={!message.trim()}
//               className={`p-2.5 rounded-lg ${message.trim() ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
//             >
//               <Send size={18} />
//             </button>
//           </form>
//         </div>
//       </div>
      
//       {/* Interest Modal */}
//       {showInterestModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl">
//             <h2 className="text-2xl font-bold mb-4">Connect with Fellow Exam Takers</h2>
//             <p className="mb-6 text-gray-600">
//               Join our chat community to connect with others studying for the same exams.
//             </p>
//             <ul className="space-y-3 mb-6">
//               <li className="flex items-start">
//                 <div className="bg-indigo-100 p-1 rounded text-indigo-600 mr-3 mt-0.5">
//                   <Users size={16} />
//                 </div>
//                 <span>Form study groups with people taking the same exam</span>
//               </li>
//               <li className="flex items-start">
//                 <div className="bg-indigo-100 p-1 rounded text-indigo-600 mr-3 mt-0.5">
//                   <MessageSquare size={16} />
//                 </div>
//                 <span>Share study resources and practice questions</span>
//               </li>
//               <li className="flex items-start">
//                 <div className="bg-indigo-100 p-1 rounded text-indigo-600 mr-3 mt-0.5">
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
//                     <path d="M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z" />
//                   </svg>
//                 </div>
//                 <span>Get moral support during your exam prep journey</span>
//               </li>
//             </ul>
//             <div className="flex flex-col sm:flex-row gap-3">
//               <button 
//                 onClick={handleJoinChat}
//                 className="flex-1 bg-indigo-600 text-white py-2.5 px-4 rounded-lg hover:bg-indigo-700 font-medium transition-colors"
//               >
//                 Join the Community
//               </button>
//               <button 
//                 onClick={handleCloseModal}
//                 className="flex-1 bg-white text-gray-700 py-2.5 px-4 rounded-lg hover:bg-gray-100 border border-gray-300 font-medium transition-colors"
//               >
//                 Maybe Later
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page