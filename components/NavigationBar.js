import React from 'react';
import Link from 'next/link';

const NavigationBar = ({ path = {} }) => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto max-w-md px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-800">
            ScoorlyAI
          </Link>
          
          {/* Add navigation items here if needed */}
          <div className="flex items-center space-x-4">
            {/* Example navigation items
            <Link href="/profile" className="text-gray-600 hover:text-gray-800">
              Profile
            </Link>
            */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar; 