import type { ReactElement } from "react";

const SidebarItem = ({ text, icon }: { text: string; icon: ReactElement }) => {
  return (
    <div className="flex text-gray-700 items-center gap-4 py-4 px-6 hover:bg-purple-100 cursor-pointer">
      <div className="text-gray-700"> {icon} </div>
      <div> {text} </div>
    </div>
  );
};

export default SidebarItem;
