import { AiFillHome } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { FaFileCode } from "react-icons/fa";

const SideBar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-20 m-0
                        flex flex-col
                        bg-dark_blue shadow-lg"
    >
      <SideBarIcon icon={<AiFillHome size="28" />} text={"Home"} />
      <SideBarIcon icon={<FaFileCode size="28" />} text={"Projects"} />
      <SideBarIcon icon={<IoMdContact size="28" />} text={"Contact Me"} />
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
