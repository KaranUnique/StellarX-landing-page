export function LandingPage() {

  // Mobile menu toggle functionality
  const toggleMobileMenu = () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('hidden');
  };

  return (
    <>
      {/* navbar */}
      <div className="container mx-auto bg-blue-50 py-2 ps-5 pe-10">
        <nav className="flex justify-between items-center">
          <div className="w-14 h-14">
            <a href="#" className="flex gap-5 items-center">
              <img
                className="rounded-full"
                src="/logo.svg"
                alt="Instagram Logo"
              />
              <h1 className="text-blue-900 text-2xl font-bold hidden md:block">
                StellarX
              </h1>
            </a>
          </div>
          <ul className="hidden md:flex gap-x-12">
            <li className="text-blue-700 font-medium hover:text-blue-900">
              <a href="#">Service</a>
            </li>
            <li className="text-blue-700  font-medium hover:text-blue-900">
              <a href="#">Pricing</a>
            </li>
            <li className="text-blue-700 font-medium hover:text-blue-900">
              <a href="#">About</a>
            </li>
            <li className="text-blue-700  font-medium hover:text-blue-900">
              <a href="#">Contact</a>
            </li>
          </ul>
          <button className="hidden md:block bg-blue-600 font-medium px-4 py-2 rounded-full text-white hover:bg-blue-400">
            Signup
          </button>
          <button 
            className="mobile-icon md:hidden block hover:bg-blue-100 p-2 rounded-lg transition-colors"
            onClick={toggleMobileMenu}
          >
            <img className="w-8" src="/menu.svg" alt="Menu"></img>
          </button>
        </nav>
      </div>

      {/* mobile navigation  */}
      <div className="md:hidden text-center mobile-menu hidden bg-blue-50 py-4 shadow-lg">
        <ul className="flex flex-col gap-y-5">
          <li className="text-blue-700 font-medium hover:text-blue-900">
            <a href="#">Service</a>
          </li>
          <li className="text-blue-700  font-medium hover:text-blue-900">
            <a href="#">Pricing</a>
          </li>
          <li className="text-blue-700 font-medium hover:text-blue-900">
            <a href="#">About</a>
          </li>
          <li className="text-blue-700  font-medium hover:text-blue-900">
            <a href="#">Contact</a>
          </li>
           <button className="bg-blue-600 font-medium px-4 py-2 rounded-full text-white hover:bg-blue-400 mx-auto">
            Signup
          </button>
        </ul>
      </div>

      {/* hero section  */}
      <div className="container mx-auto mt-14 flex flex-col md:flex-row ">
        <div className="md:w-1/2 text-center ps-5">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Explore the Universe with <span className="text-blue-600">StellarX</span>
          </h1>
          <p className="mt-6 font-medium text-gray-700 leading-relaxed">
            Welcome to StellarX, your gateway to the cosmos. We're pioneering the future of space exploration through cutting-edge technology and innovative solutions. From satellite communications to deep space missions, we're making the impossible possible. Join us as we push the boundaries of human knowledge and venture into the great unknown. Together, we'll unlock the mysteries of the universe and bring the wonders of space closer to Earth.
          </p>
          <button className="mt-6 text-white bg-blue-700 px-8 py-3 rounded-full hover:bg-blue-800 transition-colors font-semibold">
            Start Your Journey
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img className="w-[500px] " src="/design.svg"></img>
        </div>
      </div>

      {/* main section  */}
      <div className="mt-24 px-5 contanier mx-auto flex flex-col md:flex-row  gap-5">
        <div className="md:w-1/3 text-center flex flex-col items-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Galaxy Exploration</h2>
          <img className="w-[200px] h-[200px]" src="/galaxy.svg"></img>
          <p className="text-gray-700 leading-relaxed">
            Discover the vastness of galaxies beyond our own. Our advanced telescopic systems and deep space probes provide unprecedented views of distant stellar formations, helping us understand the structure and evolution of the universe.
          </p>
        </div>
        <div className="md:w-1/3 text-center  flex flex-col items-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Nebula Research</h2>
          <img className="w-[200px] h-[200px]" src="/nebula.svg"></img>
          <p className="text-gray-700 leading-relaxed">
            Unlock the secrets of stellar nurseries where new stars are born. Our cutting-edge spectral analysis technology reveals the chemical composition and formation processes of these cosmic phenomena, advancing our understanding of stellar evolution.
          </p>
        </div>
        <div className="md:w-1/3 text-center  flex flex-col items-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Star Mapping</h2>
          <img className="w-[200px] h-[200px]" src="/stars.svg"></img>
          <p className="text-gray-700 leading-relaxed">
            Chart the cosmos with precision star mapping technology. Our constellation databases and stellar positioning systems enable accurate navigation for space missions and provide detailed catalogs of celestial objects for scientific research.
          </p>
        </div>
      </div>
      {/* Pricing Section  */}

      <div className="container mx-auto mt-24">
        <div className="text-center">
          <h1 className="font-bold text-blue-500 text-3xl">Mission Packages</h1>
          <p className="text-gray-600 mt-2">Choose your space exploration journey with our flexible mission packages</p>
          <p className="text-gray-500">Designed for researchers, institutions, and space enthusiasts</p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mt-8 justify-items-center">
          <div className="relative border border-2 border-blue-300 border-dashed bg-blue-50 w-80 rounded-2xl hover:shadow-2xl text-center">
            <h1 className="font-bold text-3xl">$299</h1>
            <h2 className="text-blue-800 font-bold mb-3">Explorer</h2>
            <p className="text-gray-600 mb-4">Perfect for space enthusiasts and students</p>
            <ul className="ml-4 mb-7">
              <li className="flex items-center mt-3">
                <div>
                  <img className="w-6" src="/Checked-logo.svg"></img>
                </div>
                <div>Basic Telescope Access</div>
              </li>
              <li className="flex items-center mt-3">
                <div>
                  <img className="w-6" src="/Checked-logo.svg"></img>
                </div>
                <div>Monthly Star Charts</div>
              </li>
              <li className="flex items-center mt-3">
                <div>
                  <img className="w-6" src="/Checked-logo.svg"></img>
                </div>
                <div>Educational Resources</div>
              </li>
              <li className="flex items-center mt-3">
                <div>
                  <img className="w-6 mx-5" src="/Arrow-Option.svg"></img>
                </div>
                <div>Community Forum Access</div>
              </li>
            </ul>
            <button className="absolute bottom-0 transform translate-y-5 -translate-x-16 mt-6 text-white bg-blue-700 px-5 py-2 rounded-full">
              Start Exploring
            </button>
          </div>
          <div className="relative border border-2 border-blue-300 border-dashed bg-blue-50 w-80 text-center rounded-2xl hover:shadow-2xl">
            <h1 className="font-bold text-3xl">$899</h1>
            <h2 className="text-blue-900 font-bold mb-3">Researcher</h2>
            <p className="text-gray-600 mb-4">Ideal for academic institutions and researchers</p>
            <ul className="ml-4 mb-7">
              <li className="flex items-center mt-3">
                <div>
                  <img className="w-6" src="/Checked-logo.svg"></img>
                </div>
                <div>Advanced Observatory Access</div>
              </li>
              <li className="flex items-center mt-3">
                <div>
                  <img className="w-6" src="/Checked-logo.svg"></img>
                </div>
                <div>Real-time Data Streams</div>
              </li>
              <li className="flex items-center mt-3">
                <div>
                  <img className="w-6" src="/Checked-logo.svg"></img>
                </div>
                <div>Custom Analysis Tools</div>
              </li>
              <li className="flex items-center mt-3">
                <div>
                  <img className="w-6 mx-5" src="/Arrow-Option.svg"></img>
                </div>
                <div>Priority Support</div>
              </li>
            </ul>
            <button className="absolute bottom-0 transform translate-y-5 -translate-x-16 mt-6 text-white bg-blue-700 px-5 py-2 rounded-full">
              Begin Research
            </button>
          </div>
          <div className="relative border border-2 border-blue-300 border-dashed bg-blue-50 w-80 text-center rounded-2xl hover:shadow-2xl">
            <h1 className="font-bold text-3xl">$2,499</h1>
            <h2 className="text-blue-900 font-bold mb-3">Mission Control</h2>
            <p className="text-gray-600 mb-4">Complete space mission management suite</p>
            <ul className="ml-4 mb-7">
              <li className="flex items-center mt-3">
                <div>
                  <img className="w-6" src="/Checked-logo.svg"></img>
                </div>
                <div>Full Observatory Network</div>
              </li>
              <li className="flex items-center mt-3">
                <div>
                  <img className="w-6" src="/Checked-logo.svg"></img>
                </div>
                <div>Satellite Communication</div>
              </li>
              <li className="flex items-center mt-3">
                <div>
                  <img className="w-6" src="/Checked-logo.svg"></img>
                </div>
                <div>Mission Planning Tools</div>
              </li>
              <li className="flex items-center mt-3">
                <div>
                  <img className="w-6 mx-5" src="/Arrow-Option.svg"></img>
                </div>
                <div>Dedicated Support Team</div>
              </li>
            </ul>
            <button className="absolute bottom-0 transform translate-y-5 -translate-x-16 mt-6 text-white bg-blue-700 px-5 py-2 rounded-full">
              Launch Mission
            </button>
          </div>
        </div>
      </div>

      {/* story  */}
      <div className="container mx-auto mt-24 ">
        <div className="text-center mb-10">
          <h1 className="text-lg text-gray-600">Latest Discoveries</h1>
          <h1 className="text-4xl text-blue-600 font-bold">Space Exploration News</h1>
        </div>
        <div className="grid md:grid-cols-3 gap-6 justify-items-center gap-4">
          <div className="bg-blue-50 w-80 rounded-2xl text-center hover:shadow-2xl">
            <img className="mt-4 w-full h-60 object-cover rounded-t-2xl" src="/SpaceImage1.png" alt="Mars Exploration" />
            <div className="p-6">
              <h1 className="mt-4 text-2xl text-blue-500 font-semibold">Mars Colony Project</h1>
              <p className="font-light my-4 text-gray-600">
                Breaking new ground in interplanetary colonization with advanced life support systems and sustainable habitat designs.
              </p>
              <a href="#" className="text-blue-500 font-bold hover:text-blue-700 transition-colors">
                Learn More →
              </a>
            </div>
          </div>
          <div className="bg-blue-50 w-80 rounded-2xl text-center hover:shadow-2xl">
            <img className="mt-4 w-full h-60 object-cover rounded-t-2xl" src="/SpaceImage2.png" alt="Deep Space Communication" />
            <div className="p-6">
              <h1 className="mt-4 text-2xl text-blue-500 font-semibold">Deep Space Network</h1>
              <p className="font-light my-4 text-gray-600">
                Revolutionary quantum communication systems enabling real-time data transmission from the edge of our solar system.
              </p>
              <a href="#" className="text-blue-500 font-bold hover:text-blue-700 transition-colors">
                Discover More →
              </a>
            </div>
          </div>
          <div className="bg-blue-50 w-80 rounded-2xl text-center hover:shadow-2xl">
            <img className="mt-4 w-full h-60 object-cover rounded-t-2xl" src="/SpaceImage3.png" alt="Exoplanet Discovery" />
            <div className="p-6">
              <h1 className="mt-4 text-2xl text-blue-500 font-semibold">Exoplanet Discovery</h1>
              <p className="font-light my-4 text-gray-600">
                Identifying potentially habitable worlds beyond our solar system using advanced spectroscopic analysis and AI detection.
              </p>
              <a href="#" className="text-blue-500 font-bold hover:text-blue-700 transition-colors">
                Explore Findings →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* footer  */}

      <footer className="mt-12 container mx-auto">
        <div className="bg-blue-50 p-5 flex flex-col md:flex-row">
          <div className="w-1/4">
            <p className="font-medium text-2xl text-blue-900">StellarX</p>
            <p className="text-gray-600 text-sm mt-2">Exploring the infinite possibilities of space</p>
          </div>
          <div className="w-1/2 flex md:justify-center my-5 justify-start">
            <div className="pr-24">
              <h1 className="text-2xl font-bold text-blue-900">Explore</h1>
              <ul className="space-y-3 mt-4 text-gray-600">
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">Missions</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">Discoveries</a>
                </li>
              </ul>
            </div>
            <div className="pr-24">
              <h1 className="text-2xl font-bold text-blue-900">Learn</h1>
              <ul className="space-y-3 mt-4 text-gray-600">
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">Research</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">Education</a>
                </li>
              </ul>
            </div>
            <div className="pr-24">
              <h1 className="text-2xl font-bold text-blue-900">Connect</h1>
              <ul className="space-y-3 mt-4 text-gray-600">
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">Community</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">Support</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/4 flex md:justify-end gap-6">
            <button>
              <img className="w-8" src="/facebook.png"></img>
            </button>
            <button>
              <img className="w-6" src="/instagram.png"></img>
            </button>
            <button>
              <img className="w-6" src="/twitter.png"></img>
            </button>
          </div>
        </div>
      </footer>

    </>
  );
}
