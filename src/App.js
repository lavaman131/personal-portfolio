import "./index.css";
import SideBar from "./Sidebar";
import profile_img from "./imgs/profile.jpg";
import AutoTypingHelper from "./auto-typing-helper";
// import ParticleBackground from "./particleBackground";

function App() {
  return (
    <div>
      <div className="flex flex-col h-screen gap-4">
        <div className="flex-none">
          <SideBar></SideBar>
        </div>
        <div className="mt-20 grow h-full flex flex-col items-center justify-center gap-4">
          <div>
            <span className="font-extrabold text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl bg-clip-text text-creamy_white">
              Hi there, I'm Alex!
            </span>
          </div>
          <div className="font-extrabold p-2 text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl bg-clip-text text-creamy_white">
            <AutoTypingHelper />
          </div>
          <div className="flex flex-row flex-wrap-reverse w-full items-center justify-center gap-20">
            <div className="ml-10 flex-none px-2 py-40 bg-code_block rounded-lg">
              <div className="text-creamy_white font-code_font">
                When controlling the flow of text, using the CSS property.
              </div>
            </div>
            <div className="mr-10 flex-none">
              <div className="p-1.5 bg-gradient-to-r from-blue-600 via-fuchsia-500 to-red-600 rounded-full">
                <img
                  className="h-72 w-72 sm:h-82 sm:w-82 md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-128 xl:w-128 rounded-full"
                  src={profile_img}
                  alt="profile"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
