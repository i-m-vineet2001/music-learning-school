export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Music School
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are passionate about music education and dedicated to helping students of all ages discover their musical potential.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, Music School has been a cornerstone of musical education in our community. What started as a small studio with just a few instructors has grown into a comprehensive music education center serving hundreds of students.
            </p>
            <p className="text-gray-600 mb-4">
              Our founders, experienced musicians themselves, recognized the need for quality music instruction that combines traditional techniques with modern teaching methods. Today, we continue that vision with a team of dedicated professionals.
            </p>
            <p className="text-gray-600">
              We believe that music education should be accessible, enjoyable, and tailored to each student's unique learning style and goals.
            </p>
          </div>
          <div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-96 rounded-lg"></div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from instruction quality to student support.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Accessibility</h3>
              <p className="text-gray-600">
                Music education should be available to everyone, regardless of age, background, or skill level.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600">
                We foster a supportive community where students can learn, grow, and share their love of music.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
