import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
export default function DefaultLayout() {


  const [active, setActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname !== "/");
  }, [location]);

  return (
    <div className="default h-[100dvh] w-full max-w-[100vw] overflow-auto select-none">
      <Sidebar></Sidebar>
      <div className={"bg-background fixed top-0 ease-in transition-all h-full max-w-full max-h-full w-full right-0 md:static md:left-0 " + (active ? 'left-0' : 'left-[100%]')}>
        <Outlet />
      </div>
    </div>
  )
}