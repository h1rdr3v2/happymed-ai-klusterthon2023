import { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react"
import HappyMedAI from "../../../images/nav/happymedAI.svg"


const HomeNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="fixed px-6 z-[9999] w-[100vw] bg-[#007D6D] shadow-lg">
        <nav className="bg-[#007D6D]">
          <div className="w-[100%] px-4 sm:px-6 lg:px-8 py-1 md:py-4">
            <div className=" w-[100%] flex items-center justify-between h-16">
              <div className="flex w-[100%] items-center justify-between">
                <div className="flex-shrink-0">
                <Link
                      to="/"
                >
                      <img 
                        src={HappyMedAI}
                        alt='HappyMedAI Logo'
                      />
                </Link>
                </div>

                <div className="hidden md:block">
                  <div  className="ml-[40rem] flex items-baseline space-x-4">
                    <Link
                      to="/about"
                      className="text-[#FFFFFF] hover:text-[#8873EF] px-3 py-2 rounded-md text-[14px] font-medium"
                    >
                      About
                    </Link>
                    
                    <Link
                      to="/partners"
                      className="text-[#FFFFFF] hover:text-[#8873EF] px-3 py-2 rounded-md text-[14px] font-medium"
                    >
                      Partners
                    </Link>

                    <Link
                      to="/faqs"
                      className="text-[#FFFFFF] hover:text-[#8873EF] px-3 py-2 rounded-md text-[14px] font-medium"
                    >
                      FAQs
                    </Link>

                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className=" inline-flex items-center justify-center p-2 rounded-md text-desaturated-cyan focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
  
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            className="bg-[#FFFFFF]"
          >
            {(ref) => (
              <div className="h-screen md:hidden text-center" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                <Link
                    to="/about"
                    className="text-[#081D20] hover:text-[#8873EF] block px-3 py-2 mb-4 rounded-md text-[16px] font-medium"
                >
                    About
                </Link>
                
                <Link
                  to="/partners"
                  className="text-[#081D20] hover:text-[#8873EF] block px-3 py-2 rounded-md text-[16px] font-medium"
                >
                  Partners
                </Link>

                <Link
                    to="/faqs"
                    className="text-[#081D20] hover:text-[#8873EF] block px-3 py-2 mb-4 rounded-md text-[16px] font-medium"
                >
                    FAQs
                </Link>

                </div>
              </div>
            )}
          </Transition>  
        </nav>
  
      </div>
    )
}

export default HomeNav;