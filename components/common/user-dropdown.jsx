import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutDashboard, LogOut } from "lucide-react";
import Cookies from "js-cookie";
import { useProfile } from "@/hooks/use-profile";
import { useRouter } from "next/navigation";
const UserDropDown = () => {
    const {user,logOut} = useProfile();
    const router = useRouter();

    const logoutHandler = () => {
        Cookies.remove("token")
        Cookies.remove("admin");
        logOut();
        router.replace("/");
    }
    const dashboardHandler = () => {
      const admin = Cookies.get("admin");
      if (parseInt(admin, 10) === 0) {
        router.push("/"); 
      } else if (parseInt(admin, 10) === 1) {
        router.push("/"); 
      }
    };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="text-black"> 
          <AvatarFallback >{user?.fullName && user?.fullName[0]}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem onClick={dashboardHandler}> 
          <LayoutDashboard  className="mr-2" size={18} /> Dashboard
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logoutHandler} className="text-rose-500">
          <LogOut className="mr-2" size={18} />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropDown;
