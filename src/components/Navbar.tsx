import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [flyer, setFlyer] = useState(false);
  const [flyerTwo, setFlyerTwo] = useState(false);

  return (
    <>
     <section className="fixed w-full  z-30">
     <div className="bg-[#1E1E1E]">
        <div className="max-w-7xl xl:px-[100px] md:px-16 lg:px-32 px-8 mx-auto">
          <div className="flex justify-between items-center md:gap-4 py-6 md:justify-start lg:gap-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <p className="text-[#C2C8CB]">Owoeye Moyosore</p>
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>
                {/* Heroicon name: outline/menu */}
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-16 ">
             

              <a href="#" className="nav-links">
              <span className="text-[#00D288]">#</span>About
              </a>
              <a href="#skills" className="nav-links">
              <span className="text-[#00D288]">#</span>Skills
              </a>
              <a href="#projects" className="nav-links">
              <span className="text-[#00D288]">#</span>Projects
              </a>
              <a href="#experience" className="nav-links">
              <span className="text-[#00D288]">#</span>Experience
              </a>
              <a href="#contact" className="nav-links">
              <span className="text-[#00D288]">#</span>Contact
              </a>
          
            </nav>
          </div>
        </div>
        {/*
      Mobile menu, show/hide based on mobile menu state.
  
      Entering: "duration-200 ease-out"
        From: ""
        To: ""
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    */}

        <div
          className={
            open
              ? "opacity-100 scale-100 ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <p>Owoeye Moyosore</p>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" onClick={() => setOpen(!open)}>
                    {/* Heroicon name: outline/chart-bar */}
                    <span className="text-[#00D288]">#</span>About
                  </a>
                  <a href="#skills" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"  onClick={() => setOpen(!open)}>
                    {/* Heroicon name: outline/cursor-click */}
                    <span className="text-[#00D288]">#</span>Skills
                    
                  </a>
                  <a href="#projects" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" onClick={() => setOpen(!open)}>
                    {/* Heroicon name: outline/shield-check */}
                    <span className="text-[#00D288]">#</span>Projects
                  </a>
                  <a href="#experience" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" onClick={() => setOpen(!open)}>
                    {/* Heroicon name: outline/view-grid */}
                    <span className="text-[#00D288]">#</span>Experience
                  </a>
                  <a href="#contact" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" onClick={() => setOpen(!open)}>
                    {/* Heroicon name: outline/refresh */}
                    <span className="text-[#00D288]">#</span>Contact
                  </a>
                </nav>
              </div>
            </div>
            {/* <div className="py-6 px-5 space-y-6">
              <div className="grid gap-y-4 gap-x-8">
                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Pricing
                </a>

                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Enterprise
                </a>

                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Help Center
                </a>

                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Security
                </a>
              </div>
             
            </div> */}
          </div>
        </div>
      </div>
     </section>
     
    </>
  );
};

export default NavBar;
