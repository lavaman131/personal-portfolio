import "./index.css";
import SideBar from "./Sidebar";
import profile_img from "./imgs/profile.jpg";
import AutoTypingHelper from "./auto-typing-helper";
import ParticleBackground from "./particleBackground";

function App() {
  return (
    <div>
      <ParticleBackground className="-z-10"></ParticleBackground>
      <div className="flex flex-row h-screen">
        <div className="flex-none">
          <SideBar></SideBar>
        </div>
        <div className="ml-20 grow h-full z-10 flex flex-col items-center justify-center gap-4">
          <div>
            <span className="font-extrabold text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl bg-clip-text bg-gradient-to-r from-pink-300 to-dark_pink">
              Hi there, I'm Alex!
            </span>
          </div>
          <div className="font-extrabold p-2 text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl bg-clip-text bg-gradient-to-r from-pink-300 to-dark_pink">
            <AutoTypingHelper />
          </div>
          <div>
            <img
              className="mx-2 my-2 h-72 w-72 sm:h-82 sm:w-82 md:h-96 md:w-96 lg:h-128 lg:w-128 xl:h-144 xl:w-144 rounded-full "
              src={profile_img}
              alt="profile"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
