import { Link, useLocation } from "react-router-dom";

export default function NavItem({ icon: Icon, iconActive: IconActive, title, to, handleIndex, index }) {
  const isActive = index === to;
  return (
    <button onClick={() => handleIndex(to)} className="flex flex-col items-center w-full max-w-24 h-full justify-center cursor-pointer hover:text-tealGreen-dark lg:h-24">
      <div className={"w-full max-w-12 py-1 flex justify-center rounded-xl " + (isActive && "bg-teaGreen")}>
        {isActive ? <IconActive className="text-2xl text-tealGreen-dark" /> : <Icon className="text-2xl " />}
      </div>
      <div className={"text-sm " + (isActive ? 'font-bold' : 'font-semibold')}>{title}</div>
    </button>
  );
}