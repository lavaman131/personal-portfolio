import "./index.css";
import { useRef, useEffect } from "react";
import profile_img from "./imgs/profile.png";
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
        <nav className="bg-dark_blue bg-opacity-95">
          <div className="flex-initial max-w-7xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <div>
                  <a
                    href="#"
                    className="flex items-center py-4 px-2 text-slate-300 hover:text-gray-400"
                  >
                    <img src={logo} alt="logo" className="h-8 w-8 mr-1"></img>
                    <span className="font-bold font-baskerville">
                      Alex Lavaee
                    </span>
                  </a>
                </div>
                <div className="hidden md:flex items-center space-x-1">
                  <a
                    href="#"
                    className="py-5 px-3 font-baskerville text-slate-300 hover:text-gray-400"
                  >
                    Projects
                  </a>
                </div>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="#"
                  className="py-5 px-3 font-baskerville text-slate-300 hover:text-gray-400"
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
                    class="w-6 h-6 text-slate-300"
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
          <div className="mobile-menu hidden md:hidden">
            <a
              href="#"
              className="block py-2 px-3 text-sm font-baskerville text-slate-300 hover:bg-med_blue"
            >
              Projects
            </a>
            <a
              href="#"
              className="block py-2 px-3 text-sm font-baskerville text-slate-300 hover:bg-med_blue"
            >
              Contact
            </a>
          </div>
        </nav>
        <div className="flex flex-row-reverse h-screen">
          <div className="flex flex-col md:max-w-sm lg:max-w-lg xl:max-w-2xl">
            <div className="bg-dark_blue bg-opacity-40">
              <img
                className="mx-auto w-72 sm:w-80 md:w-96 lg:w-96 xl:w-128"
                src={profile_img}
                alt="profile"
              ></img>
            </div>
            <div className="bg-gradient-to-t from-med_blue to-dark_blue flex-grow -mt-16">
              <div className="text-left text-md lg:text-lg xl:text-xl text-slate-300 font-baskerville mx-6 my-6">
                I am a student studying computer science and data science in the
                college of Computing & Data Sciences (CDS) at Boston University.
                I have extensive experience in software engineering paradigms,
                data science, machine learning, deep learning, with industry and
                research experience.
              </div>
              <div className="flex mx-6">
                <a
                  href="https://www.linkedin.com/in/alexlavaee/"
                  className="bg-blue-700 px-6 py-2 flex items-center space-x-2 rounded-lg hover:bg-blue-600"
                >
                  <span className="font-baskerville text-slate-300 text-md lg:text-lg xl:text-xl">
                    View Resume
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-8 h-8 text-slate-300"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="hidden flex-grow md:flex flex-col items-center my-10">
            <div className="font-extrabold font-baskerville bg-clip-text text-slate-300 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Hi there, I'm Alex
            </div>
            <div className="my-3 font-extrabold font-baskerville bg-clip-text text-slate-300 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              <AutoTypingHelper></AutoTypingHelper>
            </div>
            <div className="bg-med_blue rounded-lg flex flex-col gap-2 m-10 justify-center">
              <div className="font-baskerville text-slate-300 mx-6 mt-2">
                Programming Languages:
              </div>
              <div className="font-baskerville text-slate-300 flex items-center space-x-2 mx-6">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  className="w-8 h-8"
                />

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                  className="w-8 h-8"
                />
                <img
                  src="https://raw.githubusercontent.com/actions/starter-workflows/main/icons/rust.svg"
                  className="w-8 h-8"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  className="w-8 h-8"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  className="w-8 h-8"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  className="w-8 h-8"
                />
              </div>
              <div className="font-baskerville text-slate-300 mx-6">
                Data Science Tools:
              </div>
              <div className="font-baskerville text-slate-300 flex items-center space-x-2 mx-6">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
                <img
                  src="https://raw.githubusercontent.com/valohai/ml-logos/master/scipy.svg"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/01/Created_with_Matplotlib-logo.svg"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
                <img
                  src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/seaborn-icon.svg"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
              </div>
              <div className="font-baskerville text-slate-300 mx-6">
                Frontend Tools:
              </div>
              <div className="font-baskerville text-slate-300 flex items-center space-x-2 mx-6">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
              </div>
              <div className="font-baskerville text-slate-300 mx-6">
                Backend Tools:
              </div>
              <div className="font-baskerville text-slate-300 flex items-center space-x-2 mx-6">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
                <img
                  src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
              </div>
              <div className="font-baskerville text-slate-300 mx-6">
                Miscellaneous Tools:
              </div>
              <div className="font-baskerville text-slate-300 flex items-center space-x-2 mx-6 mb-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
                <img
                  src="https://www.vectorlogo.zone/logos/markdown-here/markdown-here-icon.svg"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
