"use client";
import React, { useState, useEffect } from 'react';
import { useSearchParams } from "next/navigation";
import Link from 'next/link';
import { GraduationCap } from 'lucide-react';
import ButtonSignin from "./ButtonSignin";

const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo and App Name */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center">
            <GraduationCap className="text-white" size={20} strokeWidth={2} />
          </div>
          <span className="text-xl font-bold text-gray-900">Scoorly</span>
        </Link>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
            Exams
          </Link>
          <Link href="/pricing" className="text-gray-700 hover:text-blue-600 font-medium">
            Pricing
          </Link>
          <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 font-medium">
            Dashboard
          </Link>

          <Link href="/signin" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out">
            Get Started
          </Link>
        </nav>
        
        {/* Mobile Navigation - Simplified */}
        <div className="flex md:hidden items-center space-x-3">
          <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
            Dashboard
          </Link>
          <Link href="/signin" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-md px-3 py-1.5 text-sm font-medium">
            Get Started
          </Link>
        </div>
      </div>
      
      {/* Mobile Navigation Menu - Conditionally rendered when isOpen is true */}
      {isOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-b border-gray-200">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Exams
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/account"
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Account
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;