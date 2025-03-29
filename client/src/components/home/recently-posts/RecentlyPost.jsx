export default function RecentlyPost(){
    return(
        <>
        <section className="bg-gray-100 py-12">
  <div className="container mx-auto px-4">
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold text-gray-800">Recently Posted in Blog</h2>
      <p className="text-gray-600 mt-2">Stay updated with the latest insights, stories, and trends!</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Blog Post Card 1 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Blog Post 1"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">How to Stay Fit</h3>
          <p className="text-gray-600 mt-2">
            Discover simple ways to maintain a healthy lifestyle with minimal effort.
          </p>
          <a
            href="#"
            className="inline-block mt-4 text-primary font-semibold hover:underline"
          >
            Read More →
          </a>
        </div>
      </div>
      {/* Blog Post Card 2 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Blog Post 2"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">10 Minute Workouts</h3>
          <p className="text-gray-600 mt-2">
            Short on time? Learn how to maximize your workouts in just 10 minutes.
          </p>
          <a
            href="#"
            className="inline-block mt-4 text-primary font-semibold hover:underline"
          >
            Read More →
          </a>
        </div>
      </div>
      {/* Blog Post Card 3 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Blog Post 3"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">The Power of Yoga</h3>
          <p className="text-gray-600 mt-2">
            Explore the benefits of yoga for both your mind and body.
          </p>
          <a
            href="#"
            className="inline-block mt-4 text-primary font-semibold hover:underline"
          >
            Read More →
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    )
}