"use client";

import { useState } from "react";
import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Music School
            </Link>
          </div>
          
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <IconMenu2 className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Home
            </Link>
            <Link href="/courses" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Courses
            </Link>
            <Link href="/instructors" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Instructors
            </Link>
            <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="/login" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </Link>
            <Link
              href="/signup"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/" className="text-2xl font-bold text-blue-600">
                    Music School
                  </Link>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <IconX className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Home
                  </Link>
                  <Link href="/courses" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Courses
                  </Link>
                  <Link href="/instructors" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Instructors
                  </Link>
                  <Link href="/about" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    About
                  </Link>
                  <Link href="/contact" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Contact
                  </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link href="/login" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Sign in
                </Link>
                <Link
                  href="/signup"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
