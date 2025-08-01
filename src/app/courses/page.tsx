export default function Courses() {
  const courses = [
    {
      name: "Piano",
      description: "Learn to play piano from beginner to advanced levels with our certified instructors.",
      levels: ["Beginner", "Intermediate", "Advanced"],
      duration: "30-60 minutes",
      price: "$50-80/lesson"
    },
    {
      name: "Guitar",
      description: "Master acoustic and electric guitar with personalized instruction for all skill levels.",
      levels: ["Beginner", "Intermediate", "Advanced"],
      duration: "30-60 minutes",
      price: "$45-75/lesson"
    },
    {
      name: "Violin",
      description: "Develop proper technique and musicality with our experienced violin instructors.",
      levels: ["Beginner", "Intermediate", "Advanced"],
      duration: "30-60 minutes",
      price: "$55-85/lesson"
    },
    {
      name: "Drums",
      description: "Learn rhythm, coordination, and various drumming styles in our fully equipped studios.",
      levels: ["Beginner", "Intermediate", "Advanced"],
      duration: "30-60 minutes",
      price: "$50-80/lesson"
    },
    {
      name: "Voice",
      description: "Improve your singing technique, breath control, and performance skills.",
      levels: ["Beginner", "Intermediate", "Advanced"],
      duration: "30-60 minutes",
      price: "$45-75/lesson"
    },
    {
      name: "Bass Guitar",
      description: "Learn the fundamentals of bass playing and develop your groove.",
      levels: ["Beginner", "Intermediate", "Advanced"],
      duration: "30-60 minutes",
      price: "$45-75/lesson"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from a wide variety of instruments and skill levels. Our expert instructors will guide you every step of the way.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.name} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{course.name}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Levels:</span>
                    <span className="text-gray-700">{course.levels.join(", ")}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Duration:</span>
                    <span className="text-gray-700">{course.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Price:</span>
                    <span className="text-gray-700 font-semibold">{course.price}</span>
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Courses?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Learning</h3>
              <p className="text-gray-600">Tailored lessons to match your pace and goals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from professional musicians and certified teachers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Choose lesson times that fit your schedule</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Opportunities</h3>
              <p className="text-gray-600">Regular recitals and performance events</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
