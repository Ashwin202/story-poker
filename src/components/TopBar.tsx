import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import {UserProfileDropdown} from "./UserProfileDropdown";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
const TopBar = () => {
   return (
      <nav className='flex items-center justify-between flex-wrap bg-sky-900 h-full p-4 '>
         <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <span className='font-semibold text-xl tracking-tight'>Game Name: Just for fun</span>
         </div>
         <div className='block lg:hidden'>
            <button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
               <svg className='fill-current h-3 w-3' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <title>Menu</title>
                  <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
               </svg>
            </button>
         </div>
         <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
            <div className='text-sm lg:flex-grow'>
            </div>
            <div>
               {/* <a href='#' className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'> */}
               <DropdownMenu>
               <DropdownMenuTrigger asChild>
                  <UserProfileDropdown />
                  </DropdownMenuTrigger>
               </DropdownMenu>
               {/* </a> */}
            </div>
         </div>
      </nav>
   );
};

export default TopBar;
