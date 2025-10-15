import React from 'react';

const About = () => {
  const [isHover, setIsHover] = React.useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center mt-10">
        {/* Image */}
        <img
          className="max-w-2xl w-full xl:-ml-32 rounded-xl shadow-lg"
          src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=830&h=844&auto=format&fit=crop"
          alt="Books Collection"
        />

        {/* Features */}
        <div
          className="px-4 md:px-0 space-y-6"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {/* Feature 1 */}
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div
              className={`p-6 group-hover:bg-blue-100 border border-transparent group-hover:border-blue-300 flex gap-4 rounded-xl transition-colors ${
                !isHover ? 'border-blue-300 bg-blue-100' : ''
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-6 stroke-blue-600"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 22h11a2.5 2.5 0 0 1 2.5-2.5V5H4v14.5z" />
              </svg>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">Discover New Books</h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Explore thousands of books across all genres with personalized recommendations.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div className="p-6 group-hover:bg-green-100 border border-transparent group-hover:border-green-300 flex gap-4 rounded-xl transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-6 stroke-green-600"
              >
                <path d="M12 20v-8M6 12l6-6 6 6" />
              </svg>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">Write & Read Reviews</h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Share your thoughts or read honest reviews from our community of book lovers.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div className="p-6 group-hover:bg-orange-100 border border-transparent group-hover:border-orange-300 flex gap-4 rounded-xl transition-colors">
              <svg
                className="size-6 stroke-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 19h16v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">Favorites & Wishlists</h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Save your favorite books and create a personalized wishlist for future reads.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div className="p-6 group-hover:bg-purple-100 border border-transparent group-hover:border-purple-300 flex gap-4 rounded-xl transition-colors">
              <svg
                className="size-6 stroke-purple-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
                <path d="M12 6v6l4 2" />
              </svg>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">Track Reading Progress</h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Keep track of books you are reading, finished, or planning to read next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Poppins Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </>
  );
};

export default About;
