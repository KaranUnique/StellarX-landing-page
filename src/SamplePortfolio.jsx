export function SamplePortfolio() {
  return (
    <>
      <div className="relative h-12 sm:h-12 mt-3 sm:mt-5 mx-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-xl rounded-2xl sm:rounded-3xl overflow-hidden">
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 z-0 animate-gradient rounded-2xl sm:rounded-3xl"></div>

        {/* Glassmorphic Nav */}
        <nav className="relative z-10 h-full w-full rounded-2xl sm:rounded-3xl flex items-center backdrop-blur-md bg-black/70">
          <ul className="flex justify-between w-full text-white px-4 sm:px-6 md:px-8 text-sm sm:text-sm md:text-base font-inter font-medium">
            <li className="cursor-pointer hover:text-blue-300 transition-colors">
              Home
            </li>
            <li className="cursor-pointer hover:text-blue-300 transition-colors">
              Skill
            </li>
            <li className="cursor-pointer hover:text-blue-300 transition-colors">
              Experience
            </li>
            <li className="cursor-pointer hover:text-blue-300 transition-colors">
              Project
            </li>
            <li className="cursor-pointer hover:text-blue-300 transition-colors">
              Contact
            </li>
          </ul>
        </nav>
      </div>
      <div className=" bg-[#020617] flex items-center justify-center p-6">
        <div className="container mt-6 sm:mt-12 md:mt-16 lg:mt-24 mx-auto px-4 flex flex-col lg:flex-row justify-start">
          <div className="w-full lg:w-1/2 p-2 sm:p-4">
            <div className="w-fit px-3 sm:px-5 h-8 sm:h-10 border border-white rounded-2xl sm:rounded-3xl text-white flex items-center text-xs sm:text-sm md:text-base font-inter font-light">
              Welcome To My Universe
            </div>
            <div className="text-white mt-6 sm:mt-8 md:mt-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space font-bold tracking-tight">
              <h1 className="mb-1 sm:mb-2">Hello</h1>
              <h1 className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                I'm Karan Manickam
              </h1>
            </div>
            <div className="text-white px-5 h-12 mt-3 sm:mt-6 lg:mt-6 w-fit px-3 border border-white rounded-2xl flex items-center">
              MERN Stack Developer
            </div>
          </div>
          <div className="relative w-[90%] max-w-md mx-auto p-4 bg-[#0f172a] rounded-lg border-2 border-transparent animate-border bg-gradient-to-r from-teal-400 via-purple-500 to-orange-500 bg-[length:400%_400%] shadow-xl text-sm text-white font-mono">
            {/* Fake window buttons */}
            <div className="flex space-x-2 absolute top-2 left-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>

            <pre className="mt-6">
              <code>
                {`const profile = {
  name: 'Your Name',
  title: 'Full-Stack Developer',
  skills: ['React', 'Node.js', 'MongoDB'],
  hardWorker: true,
  quickLearner: true,
  experience: 3,
  hireable: function() {
    return (
      this.hardWorker &&
      this.quickLearner &&
      this.experience >= 3
    );
  }
};`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}
