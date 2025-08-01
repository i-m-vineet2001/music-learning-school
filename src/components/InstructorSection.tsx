export default function InstructorSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Instructors
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet our passionate and professional music instructors, dedicated to teaching and inspiring students of all ages.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['Alice', 'Bob', 'Carol'].map((instructor) => (
            <div key={instructor} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{instructor}</h3>
                <p className="text-gray-600 mb-4">Experienced musician and instructor.</p>
                <button className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
