"use client";

import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Logo from "@/public/logo.png";
import Link from "next/link";
import { useHeader } from "@/contexts/HeaderContext";
import { TbMenu2 } from "react-icons/tb";

const links = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Services", href: "/#services" },
  { id: 3, name: "About Us", href: "/#about" },
  { id: 4, name: "Portfolio", href: "/#portfolio" },
  { id: 5, name: "Blog", href: "/blog" },
  { id: 6, name: "Contact", href: "/#contact" },
];

type Props = {};

const Navbar = (props: Props) => {
  const pathname = usePathname();
  const headerControl = useHeader()!;
  const [activeLink, setActiveLink] = useState<number | null>();
  const [refreshDropdown, setRefreshDropdown] = useState<boolean>(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [nav, setNav] = useState(false);

  const handleLinkClick = (id: number) => {
    setActiveLink(id);
  };

  useEffect(() => {
    if (refreshDropdown) {
      setTimeout(() => {
        setRefreshDropdown(false);
      }, 500);
    }
  }, [refreshDropdown]);

  const getNavbarBackgroundColor = () => {
    if (pathname.startsWith("/")) {
      return "bg-[#E9F1FF]";
    } else if (pathname.startsWith("/blog")) {
      return "bg-white";
    } else {
      return "bg-white"; // Replace with the default color for other pages
    }
  };

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth > 768) {
        setNav(false);
      }
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const navbarBackgroundColor = getNavbarBackgroundColor();

  return (
    <header className={clsx(`w-full  ${navbarBackgroundColor}`)}>
      <nav className="flex items-center justify-between w-11/12  mx-auto ">
        <div className="flex items-center gap-4">
          <Image src={Logo} width={66} height={58} alt="logo" />
          <div className="flex flex-col -ml-3 mt-3 gap-[2px] lg:mt-1">
            <span
              className={clsx(
                "text-[#272d4e]  text-base lg:text-xl font-bold leading-5"
              )}
            >
              Bytewave
              {/* <br /> */}
            </span>
            <span
              className={clsx(
                "text-[#272d4e] text-opacity-70 text-xs lg:text-[15px]  leading-4 -mt-1 "
              )}
            >
              Technologies
            </span>
          </div>
        </div>
        {/* links */}
        <div className="hidden md:flex items-center gap-6 ">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.id}
              onClick={() => {
                if (link.name === "Contact") {
                  setTimeout(() => {
                    headerControl?.setOpenContactModal(true);
                  }, 700);
                }
              }}
            >
              <div
                className={`relative h-24 text-base text-[#272d4e] cursor-pointer group flex items-center justify-center`}
                onMouseEnter={() => {
                  setHoverIndex(link.id);
                }}
                onMouseLeave={() => setHoverIndex(null)}
                onClick={() => handleLinkClick(link.id)}
              >
                <h1
                  className={`relative z-10 capitalize text-[#272d4e] text-base font-bold mt-1`}
                >
                  {link.name}
                </h1>
                {/* <div
                className={`absolute w-full bottom-0 h-1 transition-all ease-in-out duration-500 group-hover:bg-purple-600 ${
                  activeLink === link.id && "bg-purple-600"
                }`}
              ></div> */}
              </div>
            </Link>
          ))}
        </div>
        {nav && <TbMenu2 size={40} />}
      </nav>
    </header>
  );
};

export default Navbar;
