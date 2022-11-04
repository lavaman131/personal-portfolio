import "./index.css";
import SideBar from "./Sidebar";
import profile_img from "./imgs/profile.jpg";
import code_img from "./imgs/code.svg";
import AutoTypingHelper from "./auto-typing-helper";
// import ParticleBackground from "./particleBackground";

function App() {
  return (
    <div>
      <div className="flex flex-col h-screen items-center gap-4">
        <div className="fixed flex-none">
          <SideBar></SideBar>
        </div>
        <div className="mt-24 flex-none">
          <span className="font-extrabold text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl bg-clip-text text-creamy_white">
            Hi there, I'm Alex!
          </span>

          <div className="font-extrabold p-2 text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl bg-clip-text text-creamy_white">
            <AutoTypingHelper />
          </div>
        </div>
        <div className="flex flex-row flex-wrap-reverse gap-6 mx-auto my-auto pb-4">
          <div className="mx-auto my-auto flex-none">
            <div className="p-1.5 bg-gradient-to-r from-blue-600 via-fuchsia-500 to-red-600 rounded-md">
              <img
                className="h-72 sm:h-82 md:h-96 lg:h-96 xl:h-128 rounded-md"
                src={code_img}
                alt="code"
              ></img>
            </div>
          </div>
          <div className="mx-auto my-auto flex-none">
            <div className="p-1.5 bg-gradient-to-r from-blue-600 via-fuchsia-500 to-red-600 rounded-full">
              <img
                className="h-72 w-72 sm:h-82 sm:w-82 md:h-96 md:w-96 lg:h-96 lg:w-96 xl:h-128 xl:w-128 rounded-full"
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
