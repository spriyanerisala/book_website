import React from 'react';

const Hero = () => {
  return (
    <div className="mt-10 h-[80vh]">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      {/* Hero Heading */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center mx-auto text-indigo-500">
        Welcome to BookWorld
      </h1>
      <p className="text-sm md:text-base text-slate-500 text-center mt-2 max-w-md mx-auto">
        Discover, explore, and review your favorite books — all in one place.
      </p>

      {/* Hero Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10">
        
        {/* Hero Image */}
        <img
          className="max-w-sm w-full rounded-xl h-auto shadow-lg"
          src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=830&h=844&auto=format&fit=crop"
          alt="Books"
        />

        {/* Features Section */}
        <div>
          <h2 className="text-3xl font-semibold text-indigo-500">Why Choose BookWorld?</h2>
          <p className="text-sm text-slate-500 mt-2">
            Explore a rich collection of books, write reviews, track your reading progress, and discover new favorites with our modern, user-friendly platform.
          </p>

          {/* Features List */}
          <div className="flex flex-col gap-10 mt-6">
            
            {/* Feature 1 */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-full">
                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png" alt="Fast" className="w-6 h-6"/>
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-600">Lightning-Fast Search</h3>
                <p className="text-sm text-slate-500">Find books instantly with our optimized search and filters.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-full">
                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png" alt="Design" className="w-6 h-6"/>
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-600">Beautiful Book Listings</h3>
                <p className="text-sm text-slate-500">Modern, visually appealing UI to explore books effortlessly.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-full">
                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png" alt="Integration" className="w-6 h-6"/>
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-600">Seamless Reviews & Ratings</h3>
                <p className="text-sm text-slate-500">Write and read reviews easily, helping the community discover great books.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-full">
                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png" alt="Tracking" className="w-6 h-6"/>
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-600">Reading Progress Tracker</h3>
                <p className="text-sm text-slate-500">Keep track of the books you read, wishlist, and favorites.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
