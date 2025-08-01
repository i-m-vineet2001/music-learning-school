export default function Instructors() {
  const instructors = [
    {
      name: "Sarah Johnson",
      instrument: "Piano",
      experience: "15 years",
      education: "Masters in Music Performance, Juilliard School",
      specialties: ["Classical", "Jazz", "Contemporary"],
      bio: "Sarah is a classically trained pianist with extensive performance and teaching experience. She has performed with various orchestras and teaches students of all levels."
    },
    {
      name: "Michael Chen",
      instrument: "Guitar",
      experience: "12 years",
      education: "Bachelor of Music, Berklee College of Music",
      specialties: ["Rock", "Blues", "Fingerstyle"],
      bio: "Michael is a versatile guitarist who has toured with several bands and brings real-world performance experience to his teaching."
    },
    {
      name: "Emily Rodriguez",
      instrument: "Violin",
      experience: "18 years",
      education: "PhD in Music Education, Yale University",
      specialties: ["Classical", "Folk", "Contemporary"],
      bio: "Emily combines her deep classical training with innovative teaching methods to help students develop proper technique and musical expression."
    },
    {
      name: "David Kim",
      instrument: "Drums",
      experience: "10 years",
      education: "Bachelor of Music, Musicians Institute",
      specialties: ["Rock", "Jazz", "Latin"],
      bio: "David is an energetic drummer who has performed in various genres and excels at teaching rhythm, coordination, and musical feel."
    },
    {
      name: "Lisa Thompson",
      instrument: "Voice",
      experience: "20 years",
      education: "Masters in Vocal Performance, Manhattan School of Music",
      specialties: ["Opera", "Musical Theater", "Pop"],
      bio: "Lisa is an accomplished vocalist and voice coach who has performed in opera houses and Broadway productions."
    },
    {
      name: "Alex Martinez",
      instrument: "Bass Guitar",
      experience: "14 years",
      education: "Bachelor of Music, New England Conservatory",
      specialties: ["Jazz", "Funk", "Rock"],
      bio: "Alex brings groove and musicality to every lesson, helping students develop solid rhythm and bass fundamentals."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Instructors
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our passionate and professional music instructors, dedicated to teaching and inspiring students of all ages.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div key={instructor.name} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="h-64 bg-gradient-to-br from-green-500 to-green-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{instructor.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{instructor.instrument} Instructor</p>
                <p className="text-gray-600 text-sm mb-3">{instructor.experience} of teaching experience</p>
                
                <div className="space-y-2 mb-4">
                  <div>
                    <span className="text-gray-500 text-sm">Education:</span>
                    <p className="text-gray-700 text-sm">{instructor.education}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Specialties:</span>
                    <p className="text-gray-700 text-sm">{instructor.specialties.join(", ")}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{instructor.bio}</p>
                
                <button className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300">
                  Book a Lesson
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Our Instructors Are the Best</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Training</h3>
              <p className="text-gray-600">
                All our instructors have formal music education from prestigious institutions and continue to develop their skills.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎭</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Experience</h3>
              <p className="text-gray-600">
                Our teachers are active performers who bring real-world musical experience to their lessons.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Passion for Teaching</h3>
              <p className="text-gray-600">
                Every instructor is passionate about sharing their love of music and helping students achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
