import React, { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Cookies from "js-cookie";
import { useProfile } from "@/hooks/use-profile";
import { useRouter } from "next/navigation";
import { LayoutDashboard, LogOut, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const UserDropDownMobile = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const { user, logOut } = useProfile();
  const router = useRouter();

  const logoutHandler = () => {
    Cookies.remove("token");
    Cookies.remove("admin");
    logOut();
    router.replace("/");
  };

  const dashboardHandler = () => {
    const admin = Cookies.get("admin");
    if (parseInt(admin, 10) === 0) {
      router.push("/");
    } else if (parseInt(admin, 10) === 1) {
      router.push("/");
    }
  };

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <>
      <div onClick={togglePanel} className="cursor-pointer">
        <Avatar className="text-black">
          <AvatarFallback>{user?.fullName && user?.fullName[0]}</AvatarFallback>
        </Avatar>
      </div>

      {isPanelOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute top-0 right-0 w-3/4 bg-white h-full shadow-lg flex flex-col">
            <div className="flex items-center justify-between p-4">
              <h2 className="text-lg font-bold">Profile</h2>
              <Button variant="ghost" onClick={togglePanel}>
                <X size={24} />
              </Button>
            </div>
            <div className="p-4 flex-1">
              <Button
                onClick={dashboardHandler}
                className="w-full mb-4 bg-green-600 text-white flex items-center justify-center space-x-2"
              >
                <LayoutDashboard size={18} />
                <span>Dashboard</span>
              </Button>
              <Button
                onClick={logoutHandler}
                className="w-full bg-red-600 text-white flex items-center justify-center space-x-2"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDropDownMobile;
