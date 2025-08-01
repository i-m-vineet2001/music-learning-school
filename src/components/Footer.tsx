import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Music School</h3>
            <p className="text-gray-300">
              Empowering students to discover their musical potential through expert instruction and personalized learning.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/courses" className="text-gray-300 hover:text-white">Courses</Link></li>
              <li><Link href="/instructors" className="text-gray-300 hover:text-white">Instructors</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Instruments</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Piano</li>
              <li className="text-gray-300">Guitar</li>
              <li className="text-gray-300">Violin</li>
              <li className="text-gray-300">Drums</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <p className="text-gray-300">123 Music Street</p>
            <p className="text-gray-300">City, State 12345</p>
            <p className="text-gray-300">Phone: (555) 123-4567</p>
            <p className="text-gray-300">Email: info@musicschool.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; 2024 Music School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
