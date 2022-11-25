import "./index.css";
import { useRef, useEffect } from "react";
import profile_img from "./imgs/profile.png";
import code_img from "./imgs/code.svg";
import logo from "./imgs/logo.png";
import AutoTypingHelper from "./auto-typing-helper";

function App() {
  useEffect(() => {
    // 👇️ use a ref (best)
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }, []);
  return (
    <div>
      <div className="flex flex-col flex-auto">
        <nav className="bg-slate-300 sticky top-0 z-50">
          <div className="flex-initial max-w-7xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <div>
                  <a
                    href="#"
                    className="flex items-center py-4 px-2 text-gray-700 hover:text-gray-900"
                  >
                    <img src={logo} alt="logo" className="h-8 w-8 mr-1"></img>
                    <span className="font-bold">Alex Lavaee</span>
                  </a>
                </div>
                <div className="hidden md:flex items-center space-x-1">
                  <a
                    href="#"
                    className="py-5 px-3 text-gray-700 hover:text-gray-900"
                  >
                    Projects
                  </a>
                </div>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Contact
                </a>
              </div>

              <div className="md:hidden flex items-center">
                <button className="mobile-menu-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="mobile-menu hidden">
            <a
              href="#"
              className="block py-2 px-3 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-200"
            >
              Projects
            </a>
            <a
              href="#"
              className="block py-2 px-3 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-200"
            >
              Contact
            </a>
          </div>
        </nav>
        <div className="flex flex-row-reverse items-center">
          <div className="flex flex-col h-screen flex-grow md:flex-none">
            <div className="bg-slate-900 md:flex-grow">
              <img
                className="mx-auto h-72 w-72 sm:h-82 sm:w-82 md:h-96 md:w-96 lg:h-96 lg:w-96 xl:h-128 xl:w-128"
                src={profile_img}
                alt="profile"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
