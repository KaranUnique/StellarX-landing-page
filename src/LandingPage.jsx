export function LandingPage() {
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
          <ul className="flex gap-x-12">
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
          <button className="bg-blue-600 font-medium px-4 py-2 rounded-full text-white hover:bg-blue-400">
            Signup
          </button>
        </nav>
      </div>

      {/* hero section  */}
      <div className="container mx-auto mt-14 flex flex-col md:flex-row ">
        <div className="md:w-1/2 text-center ps-5">
          <p className="mt-6 font-medium">
            It is a long established fact that a . Many desktop publishing
            packages ontrary to popular belief, Lorem Ipsum is not simply random
            text. It has roots in a piece of classical Latin literature from 45
            BC, making it over 2000 years old. Richard McClintock, a Latin
            professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin words, consectetur, from a Lorem Ipsum
            passage, and going through the cites of the word in classical
            literature, discovered the undoubtable source. Lorem Ipsum comes
            from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
            book is a treatise on the theory of ethics, very popular during the
            Renaissance. and web page editors now use Lorem Ipsum as their
            default model text, and a search for ir infancy. Various versions
            have evolved over the years
          </p>
          <button className="mt-6 text-white bg-blue-700 px-5 py-2 rounded-full">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img className="w-[500px] " src="/design.svg"></img>
        </div>
      </div>

      {/* main section  */}
      <div className="mt-24 px-5 contanier mx-auto flex flex-col md:flex-row  gap-5">
        <div className="md:w-1/3 text-center flex flex-col items-center">
          <h1>Galaxy Information</h1>
          <img className="w-[200px] h-[200px]" src="/galaxy.svg"></img>
          <p>
            It is a long established fact The peb page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy.
          </p>
        </div>
        <div className="md:w-1/3 text-center  flex flex-col items-center">
          <h1>Nebula Information</h1>
          <img className="w-[200px] h-[200px]" src="/nebula.svg"></img>
          <p>
            It is a long established it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy.
          </p>
        </div>
        <div className="md:w-1/3 text-center  flex flex-col items-center">
          <h1>Star Information</h1>
          <img className="w-[200px] h-[200px]" src="/stars.svg"></img>
          <p>
            It is a long established fact that a 'Content here, content here'
            and web page editors now use Lorem Ipsum as their default model
            text, and a search for 'lorem ipsum' will uncover many web sites
            still in their infancy.
          </p>
        </div>
      </div>
      {/* Pricing Section  */}

      <div className="container mx-auto mt-24">
        <div className="text-center">
          <h1 className="font-bold text-blue-500 text-3xl">Pricing</h1>
          <p>Offers Multiple Package for Monthly and Yearly Subscription</p>
          <p>Featured plans are here</p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mt-8 justify-items-center">
          <div className="relative border border-2 border-blue-300 border-dashed bg-blue-50 w-80 rounded-2xl hover:shadow-2xl text-center">
            <h1 className="font-bold text-3xl">$99</h1>
            <h2 className="text-blue-800 font-bold mb-3">Basic</h2>
            <p>All the Basic features are included</p>
            <ul className="ml-4 mb-7">
              <li className="flex items-center mt-3">
                <div>
                  <img className="w-6" src="/Checked-logo.svg"></img>
                </div>
                <div>Core Bussiness</div>
              </li>
              <li className="flex items-center mt-3">
                <div>
                  <img className="w-6" src="/Checked-logo.svg"></img>
                </div>
                <div>Dual features</div>
              </li>
              <li className="flex items-center mt-3">
                <div>
                  <img className="w-6" src="/Checked-logo.svg"></img>
                </div>
                <div>Alternate options</div>
              </li>
              <li className="flex items-center mt-3">
                <div>
                  <img className="w-6 mx-5" src="/Arrow-Option.svg"></img>
                </div>
                <div>Customized Feature</div>
              </li>
            </ul>
            <button className="absolute bottom-0 transform translate-y-5 -translate-x-16 mt-6 text-white bg-blue-700 px-5 py-2 rounded-full">
              Get Started
            </button>
          </div>
          <div className="relative border border-2 border-blue-300 border-dashed bg-blue-50 w-80 text-center rounded-2xl hover:shadow-2xl">
            <h1 className="font-bold text-3xl">$299</h1>
            <h2 className="text-blue-900 font-bold mb-3">Intermediate</h2>
            <p>All the Intermediate features are included</p>
            <ul className="ml-4 mb-7">
              <li className="flex items-center mt-3">
                <div>
                  <img className="w-6" src="/Checked-logo.svg"></img>
                </div>
                <div>Core Bussiness</div>
              </li>
              <li className="flex items-center mt-3">
                <div>
                  <img className="w-6" src="/Checked-logo.svg"></img>
                </div>
                <div>Dual features</div>
              </li>
              <li className="flex items-center mt-3">
                <div>
                  <img className="w-6" src="/Checked-logo.svg"></img>
                </div>
                <div>Alternate options</div>
              </li>
              <li className="flex items-center mt-3">
                <div>
                  <img className="w-6 mx-5" src="/Arrow-Option.svg"></img>
                </div>
                <div>Customized Feature</div>
              </li>
            </ul>
            <button className="absolute bottom-0 transform translate-y-5 -translate-x-16 mt-6 text-white bg-blue-700 px-5 py-2 rounded-full">
              Get Started
            </button>
          </div>
          <div className="relative border border-2 border-blue-300 border-dashed bg-blue-50 w-80 text-center rounded-2xl hover:shadow-2xl">
            <h1 className="font-bold text-3xl">$499</h1>
            <h2 className="text-blue-900 font-bold mb-3">Advanced</h2>
            <p>All the Advanced features are included</p>
            <ul className="ml-4 mb-7">
              <li className="flex items-center mt-3">
                <div>
                  <img className="w-6" src="/Checked-logo.svg"></img>
                </div>
                <div>Core Bussiness</div>
              </li>
              <li className="flex items-center mt-3">
                <div>
                  <img className="w-6" src="/Checked-logo.svg"></img>
                </div>
                <div>Dual features</div>
              </li>
              <li className="flex items-center mt-3">
                <div>
                  <img className="w-6" src="/Checked-logo.svg"></img>
                </div>
                <div>Alternate options</div>
              </li>
              <li className="flex items-center mt-3">
                <div>
                  <img className="w-6 mx-5" src="/Arrow-Option.svg"></img>
                </div>
                <div>Customized Feature</div>
              </li>
            </ul>
            <button className="absolute bottom-0 transform translate-y-5 -translate-x-16 mt-6 text-white bg-blue-700 px-5 py-2 rounded-full">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* story  */}
      <div className="container mx-auto mt-24 ">
        <div className="text-center mb-10">
          <h1>Recent Updates</h1>
          <h1 className="text-4xl text-blue-600">Features Stories</h1>
        </div>
        <div className="grid md:grid-cols-3 gap-6 justify-items-center gap-4">
          <div className="bg-blue-50 w-80 rounded-2xl text-center hover:shadow-2xl">
            <img
              className="mt-4 w-full h-60"
              src="/SpaceImage1.png"
              alt=""
            />
            <h1 className=" mt-4 text-2xl text-blue-500">Google Rankings</h1>
            <p className="font-thin my-4">
              Make it connect with every client worldwide
            </p>
            <a href="#" className="text-blue-500 font-bold hover:text-black">
              Read More
            </a>
          </div>
          <div className="bg-blue-50 w-80 rounded-2xl text-center hover:shadow-2xl">
            <img
              className="mt-4 w-full h-60"
              src="/SpaceImage2.png"
              alt=""
            />
            <h1 className="mt-4 text-2xl text-blue-500">Communication</h1>
            <p className="font-thin my-4">
              Best Communication for the business{" "}
            </p>
            <a href="#" className="text-blue-500 font-bold hover:text-black">
              Read More
            </a>
          </div>
          <div className="bg-blue-50 w-80 rounded-2xl text-center hover:shadow-2xl">
            <img
              className="mt-4 w-full h-60"
              src="/SpaceImage3.png"
              alt=""
            />
            <h1 className="mt-4 text-2xl text-blue-500">Remote Working</h1>
            <p className="font-thin my-4">Remote connectivity for consistent</p>
            <a href="#" className="text-blue-500 font-bold hover:text-black">
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* footer  */}

      <footer className="mt-12 container mx-auto">
        <div className="bg-blue-50 p-5 flex flex-col md:flex-row">
          <div className="w-1/4">
            <p className="font-medium text-2xl">SpaceX</p>
          </div>
          <div className="w-1/2 flex md:justify-center my-5 justify-start">
            <div className="pr-24">
              <h1 className="text-2xl font-bold">Links</h1>
              <ul className="space-y-3 mt-4">
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
              </ul>
            </div>
            <div className="pr-24">
              <h1 className="text-2xl font-bold">Links</h1>
              <ul className="space-y-3 mt-4">
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
              </ul>
            </div>
            <div className="pr-24">
              <h1 className="text-2xl font-bold">Links</h1>
              <ul className="space-y-3 mt-4">
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/4 flex md:justify-end gap-6">
            <button >
              <img className="w-8" src="/facebook.png"></img>
            </button>
            <button>
               <img className='w-6' src="/instagram.png"></img>
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
