import { AiFillHome } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { FaFileCode } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="relative flex flex-row w-screen items-center justify-center">
      <div
        className="inset-x-0 h-20 w-full m-0 items-center justify-center fixed top-0
                  flex flex-row bg-gradient-to-r from-blue-600 via-fuchsia-500 to-red-600 shadow-lg"
      >
        <SideBarIcon icon={<AiFillHome size="28" />} text={"Home"} />
        <SideBarIcon icon={<FaFileCode size="28" />} text={"Projects"} />
        <SideBarIcon icon={<IoMdContact size="28" />} text={"Contact Me"} />
      </div>
    </div>
  );
};

const SideBarIcon = ({ icon, text = "" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default SideBar;
