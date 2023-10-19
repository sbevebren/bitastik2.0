import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import PeopleIcon from "@mui/icons-material/People";
import ForumIcon from "@mui/icons-material/Forum";
import EditIcon from "@mui/icons-material/Edit";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';

import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
function SideNavbar() {
  const router = useRouter();
  
  const handleSignOut = async () => {
    signOut();
    router.push("/bitians");
  };
  
  const menus = [
    { name: "dashboard", icon: AccountCircleIcon },
    { name: "bitians", icon: PeopleIcon },
    { name: "confessions", icon: ForumIcon },
    { name: "newsroom", icon: ArticleIcon},
    { name: "calendar", icon: EventIcon },
    { name: "todolist", icon: PlaylistAddCheckIcon },
    { name: "whiteboard", icon: EditIcon },
    { name: "logout", icon: ExitToAppIcon,margin:true},
    
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-primary bg-opacity-30 fixed z-50"> 
    <section className="gap-6 min-h-screen border-r-2 ">
      <div
        className={` ${
          open ? "w-56" : "w-16"
        } duration-500 text-gray-100 px-4 `}
      >
        <div className="py-3 flex justify-end">
        {open ? (
              <CloseIcon
                size={26}
                className="absolute top-2 left-6 cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            ) : (
              <MenuOutlinedIcon
                size={26}
                className="absolute top-2 left-6 cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            )}
        </div>
        <div className="mt-4 flex flex-col gap-6 relative">
          {menus?.map((menu, i) => (
            <div
            onClick={() => {
              if (menu.name === 'logout') {
                handleSignOut();
              } else {
                
                router.push(`/${menu.name}`);
                setOpen(false);
              }
            }}
              key={i}
              className={`cursor-pointer ${ 
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </div>
          ))}

        </div>
      </div>
      
    </section>
    </div>
  );
}

export default SideNavbar;
