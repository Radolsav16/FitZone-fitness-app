import {Link} from 'react-router'

export default function HeroCreatePost() {
  return (
    <>
      <section className="relative bg-gray-900 text-white py-20 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Share Your Journey with the Community!
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Whether it’s a personal triumph, a fitness tip, or a delicious
              recipe, inspire others by sharing your story. Be part of our
              growing community!
            </p>
            <Link to={'fitzone/post-create'}
             className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-md transition-transform transform hover:scale-105">
              Create a Post
            </Link>
          </div>

          <div className="md:w-1/2">
            <img
              src="https://wallpapers.com/images/hd/fitness-pictures-7zf6jy1f5vxlvjes.jpg"
              alt="Create Post"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}
