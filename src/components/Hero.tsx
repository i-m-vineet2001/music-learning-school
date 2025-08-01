import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Learn Music with Expert Instructors
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover your musical potential with our comprehensive courses in piano, guitar, violin, drums, and more.
          </p>
          <div className="space-x-4">
            <Link
              href="/courses"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Explore Courses
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
