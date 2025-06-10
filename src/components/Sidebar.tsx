import { BrainIcon } from "../icons/BrainIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className=" bg-white w-72 border-r border-slate-300 h-screen fixed top-0 left-0">
      <div className="flex items-center justify-start gap-4 px-6 pt-12 pb-6 h-16">
        <div className="text-black">
          <BrainIcon size="xl" />
        </div>
        <h1 className="text-2xl text-black font-semibold "> Brainly</h1>
      </div>

      <div className="pt-4">
        <SidebarItem text={"Twitter"} icon={<TwitterIcon size="lg" />} />
        <SidebarItem text={"Youtube"} icon={<YoutubeIcon size="lg" />} />
      </div>
    </div>
  );
};

export default Sidebar;
