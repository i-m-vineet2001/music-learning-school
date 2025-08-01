export default function CourseSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from a wide variety of instruments and skill levels. Our expert instructors will guide you every step of the way.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {['Piano', 'Guitar', 'Violin', 'Drums'].map((instrument) => (
            <div key={instrument} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{instrument}</h3>
                <p className="text-gray-600 mb-4">Learn {instrument.toLowerCase()} with our experienced instructors.</p>
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
