'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { useProfile } from "@/hooks/use-profile";
import UserDropDown from "./user-dropdown";
import { navItems, adminNav } from "@/data/navabarOption";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { IoIosArrowDown } from "react-icons/io";
import UserDropDownMobile from "./mobile-dropdown";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { user, setUser, logOut } = useProfile();
  const token = Cookies.get("token");
  const admin = Cookies.get("admin");

  useEffect(() => {
    if (token) {
      setUser(user);
    }
  }, [token, setUser]);

  let menuOption = navItems;
  if (admin === "1") {
    menuOption = adminNav;
  }

  const handleDropdownClick = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleMenuItemClick = () => {
    setActiveDropdown(null);
  };

  const logoutHandler = () => {
    Cookies.remove("token");
    Cookies.remove("admin");
    logOut();
    router.replace("/");
  };

  return (
    <Navbar maxWidth="xl" className="border-b-2 border-black shadow-xl flex gap-5 bg-black text-white  ">

      <NavbarBrand className="">
        <div className="flex">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={200} height={80} />
          </Link>
        </div>
      </NavbarBrand>

      <NavbarContent className="hidden lg:flex space-x-8" justify="end" variant="highlight">
        {menuOption.map((item, index) => (
          <NavbarItem key={index} className="relative">
            <div
              onClick={() => handleDropdownClick(index)}
              className="flex items-center cursor-pointer space-x-1 text-white"
            >
              <span>{item.label}</span>
              {item.children && <IoIosArrowDown className="text-[#55b227]" />}
            </div>
            {item.children && activeDropdown === index && (
              <div
                className="absolute top-full mt-2 bg-white text-black rounded-md shadow-lg z-10"
                onMouseLeave={handleMenuItemClick}
              >
                {item.children.map((child, childIndex) => (
                  <div
                    key={childIndex}
                    className="px-4 py-2 hover:bg-gray-200"
                  >
                    <Link
                      href={child.link}
                      onClick={handleMenuItemClick}
                      className="flex items-center space-x-2"
                    >
                      {child.icon}
                      <span>{child.label}</span>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </NavbarItem>
        ))}
        {user ? (
          <UserDropDown />
        ) : (
          <>
            {/* <NavbarItem>
              <Link href="/signup">
                <Button className="text-white">Sign Up</Button>
              </Link>
            </NavbarItem> */}
            <NavbarItem>
              <Link href="/login" className="flex items-center gap-2">
                <Image src="/login.svg" alt="login" width={100} height={100} />
                Login
              </Link>
            </NavbarItem>
          </>
        )}
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      <NavbarMenu isOpen={isMenuOpen}>
        {menuOption.map((item, index) => (
          <NavbarMenuItem key={index} className="relative">
            <div
              onClick={() => handleDropdownClick(index)}
              className="flex items-center justify-between cursor-pointer space-x-1"
            >
              <Link href={item.link}>{item.label}</Link>
              {item.children && <IoIosArrowDown className="text-[#55b227]" />}
            </div>
            {item.children && activeDropdown === index && (
              <ul className="ml-4 mt-2">
                {item.children.map((child, childIndex) => (
                  <li
                    key={childIndex}
                    className="flex items-center space-x-2 py-2"
                  >
                    {child.icon && child.icon}
                    <Link href={child.link}>{child.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </NavbarMenuItem>
        ))}
        {user ? (
          <NavbarItem>
            <UserDropDownMobile />
          </NavbarItem>
        ) : (
          <>
            <NavbarItem>
              <Link href="/signup">
                <Button className="bg-green-600 text-white">Sign Up</Button>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/login">
                <Button variant="outline" className="text-white bg-green-600">
                  Log In
                </Button>
              </Link>
            </NavbarItem>
          </>
        )}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarComponent;
