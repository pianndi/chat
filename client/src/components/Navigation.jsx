import NavItem from "./NavItem";
import { MdGroups, MdOutlineGroups, MdOutlinePermContactCalendar, MdPermContactCalendar } from "react-icons/md";
import { IoChatboxEllipses, IoChatboxEllipsesOutline } from "react-icons/io5";
import { PiGear, PiGearFill } from "react-icons/pi";

export default function Navigation({ handleIndex, index }) {
  return (
    <nav className="flex w-full h-full border-t justify-evenly items-center bg-background lg:flex-col lg:justify-start lg:border-t-0 lg:border-r border-borderColor">
      <NavItem index={index} handleIndex={handleIndex} icon={IoChatboxEllipsesOutline} iconActive={IoChatboxEllipses} title="Pesan" to={0} />
      <NavItem index={index} handleIndex={handleIndex} icon={MdOutlineGroups} iconActive={MdGroups} title="Grup" to={1} />
      <NavItem index={index} handleIndex={handleIndex} icon={MdOutlinePermContactCalendar} iconActive={MdPermContactCalendar} title="Kontak" to={2} />
      <NavItem index={index} handleIndex={handleIndex} icon={PiGear} iconActive={PiGearFill} title="Setelan" to={3} />
    </nav>
  )
}