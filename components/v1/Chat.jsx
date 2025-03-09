'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MessageSquare, Users, Hash, Search, PlusCircle, Send, Smile, Paperclip, ArrowLeft } from 'lucide-react';

const Chat = () => {
  // State for interest modal
  const [showInterestModal, setShowInterestModal] = useState(true);
  const [isInterested, setIsInterested] = useState(false);
  const [email, setEmail] = useState('');
  const [examName, setExamName] = useState('');
  
  const handleJoinInterest = () => {
    // In a real app, this would send the email and exam to your backend
    setIsInterested(true);
    setShowInterestModal(false);
  };
  
  const handleCloseModal = () => {
    setShowInterestModal(false);
  };

  // Blurred/preview version of the chat UI that shows what's coming
  return (
    <div className="flex h-[calc(100vh-64px)]">
      {/* Chat UI - Blurred out */}
      <div className="relative flex w-full overflow-hidden">
        {/* Sidebar */}
        <div className="w-60 bg-indigo-900 text-white flex flex-col opacity-50">
          {/* Workspace header */}
          <div className="p-3 border-b border-indigo-800">
            <h2 className="font-bold text-lg">Exam Prep Hub</h2>
            <p className="text-indigo-300 text-sm">Connect with fellow test-takers</p>
          </div>
          
          {/* Channels */}
          <div className="p-3">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-indigo-300 text-sm font-medium">Channels</h3>
              <button className="text-indigo-300">
                <PlusCircle size={16} />
              </button>
            </div>
            <ul className="space-y-1">
              <li>
                <div className="flex items-center w-full text-left rounded px-2 py-1 text-sm bg-indigo-700">
                  <Hash size={16} className="mr-2" />
                  <span>general</span>
                  <span className="ml-auto bg-red-500 text-white text-xs font-bold rounded-full px-1.5">3</span>
                </div>
              </li>
              <li>
                <div className="flex items-center w-full text-left rounded px-2 py-1 text-sm">
                  <Hash size={16} className="mr-2" />
                  <span>mcat-2025</span>
                </div>
              </li>
              <li>
                <div className="flex items-center w-full text-left rounded px-2 py-1 text-sm">
                  <Hash size={16} className="mr-2" />
                  <span>cpa-questions</span>
                  <span className="ml-auto bg-red-500 text-white text-xs font-bold rounded-full px-1.5">12</span>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Direct Messages */}
          <div className="p-3">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-indigo-300 text-sm font-medium">Direct Messages</h3>
              <button className="text-indigo-300">
                <PlusCircle size={16} />
              </button>
            </div>
            <ul className="space-y-1">
              <li>
                <div className="flex items-center w-full text-left rounded px-2 py-1 text-sm">
                  <div className="mr-2">👩🏻</div>
                  <span>Sarah Kim</span>
                  <span className="ml-auto w-2 h-2 rounded-full bg-green-500"></span>
                </div>
              </li>
              <li>
                <div className="flex items-center w-full text-left rounded px-2 py-1 text-sm">
                  <div className="mr-2">👨🏽</div>
                  <span>Alex Johnson</span>
                  <span className="ml-auto w-2 h-2 rounded-full bg-gray-400"></span>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Find Study Buddies */}
          <div className="mt-auto p-3 border-t border-indigo-800">
            <button className="flex items-center text-indigo-300 text-sm w-full">
              <Users size={16} className="mr-2" />
              Find Study Buddies
            </button>
          </div>
        </div>
        
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col bg-white opacity-50">
          {/* Channel header */}
          <div className="border-b px-4 py-2 flex items-center">
            <Hash size={20} className="mr-2 text-gray-500" />
            <div>
              <h2 className="font-bold">general</h2>
              <p className="text-sm text-gray-500">Connect with other exam takers studying for the same test</p>
            </div>
            <div className="ml-auto flex items-center space-x-4">
              <button className="text-gray-500">
                <Users size={18} />
              </button>
              <div className="relative">
                <Search size={18} className="text-gray-500 absolute left-2 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search messages"
                  className="bg-gray-100 py-1 pl-8 pr-3 rounded-md text-sm w-40"
                  disabled
                />
              </div>
            </div>
          </div>
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="flex items-start">
              <div className="mr-3 text-2xl">👩🏻</div>
              <div className="flex-1">
                <div className="flex items-baseline">
                  <h4 className="font-bold">Sarah Kim</h4>
                  <span className="ml-2 text-xs text-gray-500">10:23 AM</span>
                </div>
                <p className="text-gray-800">Has anyone taken practice test 3 yet? The biochem section was brutal!</p>
                <div className="flex mt-1 space-x-1">
                  <button className="bg-gray-100 text-sm rounded-full px-2 py-0.5">
                    👍 1
                  </button>
                  <button className="bg-gray-100 text-sm rounded-full px-2 py-0.5">
                    😮 1
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-3 text-2xl">👨🏽</div>
              <div className="flex-1">
                <div className="flex items-baseline">
                  <h4 className="font-bold">Alex Johnson</h4>
                  <span className="ml-2 text-xs text-gray-500">10:25 AM</span>
                </div>
                <p className="text-gray-800">Yeah, I just finished it yesterday. I thought the organic chem was actually harder than the biochem.</p>
              </div>
            </div>
          </div>
          
          {/* Message Input */}
          <div className="p-3 border-t">
            <div className="flex items-center">
              <button type="button" className="text-gray-500 mr-2" disabled>
                <Paperclip size={18} />
              </button>
              <input
                type="text"
                placeholder="Message #general"
                className="flex-1 border border-gray-300 rounded-md py-2 px-3"
                disabled
              />
              <button type="button" className="text-gray-500 mx-2" disabled>
                <Smile size={18} />
              </button>
              <button
                type="button"
                className="p-2 rounded-md bg-gray-200 text-gray-500"
                disabled
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
        
        {/* TBA Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-80 flex flex-col items-center justify-center p-6 z-10">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
            <MessageSquare className="w-8 h-8 text-indigo-600" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            {isInterested ? "Thanks for your interest!" : "Chat Coming Soon"}
          </h2>
          
          {isInterested ? (
            <div className="text-center max-w-md">
              <p className="text-gray-600 mb-6">
                We'll notify you when our chat feature is ready. In the meantime, continue studying and preparing for your exams!
              </p>
              <Link 
                href="/" 
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </div>
          ) : (
            <div className="text-center max-w-md">
              <p className="text-gray-600 mb-6">
                We're building a space for exam takers to connect, share resources, and study together. Want to be notified when it launches?
              </p>
              
              <button
                onClick={() => setShowInterestModal(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                I'm interested!
              </button>
              
              <p className="mt-6 text-sm text-gray-500">
                Or <Link href="/dashboard" className="text-indigo-600 hover:underline">return to dashboard</Link>
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Interest Modal */}
      {showInterestModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Get Notified When Chat Launches</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="you@example.com"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Which exam are you studying for?
              </label>
              <input
                type="text"
                value={examName}
                onChange={(e) => setExamName(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="e.g., MCAT, LSAT, CPA, etc."
              />
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={handleJoinInterest}
                disabled={!email}
                className={`flex-1 py-2 px-4 rounded-md font-medium ${
                  !email
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                Notify Me
              </button>
              <button
                onClick={handleCloseModal}
                className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;