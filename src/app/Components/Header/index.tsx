"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoIosArrowDown } from "react-icons/io";
import { Menu, Transition } from "@headlessui/react";
import { HiOutlineBars3 } from "react-icons/hi2";
function Header() {
  const pathname = usePathname()

  const [scrolling, setScrolling] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [navbarOne, setNavbar] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    setNavbar(!navbarOne);
  };
  const handleScroll = () => {
    if (window.scrollY > 400) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className="flex  flex-col md:flex-row h-screen bg-gradient-to-t to-[#0f101c] from-[#171a80]">
        <button className=" absolute text-white top-12 right-[15%] md:right-[4%] rounded   font-AkkuratLight  text-lg ">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full items-center gap-2 justify-center rounded-md   ">
                English
                <IoIosArrowDown />
              </Menu.Button>
            </div>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-3  origin-top-right divide-y text-[#171a80]  bg-white  ring-1 ring-black/5 focus:outline-none">
                <div className=" border-[#3fa9ff]">
                  <h1 className="border  border-[#171a80] py-[2px] px-6">
                    English
                  </h1>
                  <h1 className="border  border-[#171a80] py-[2px] px-6">
                    中文
                  </h1>
                  <h1 className="border  border-[#171a80] py-[2px] px-6">
                    Thai
                  </h1>
                  <h1 className="border  border-[#171a80] py-[2px] px-6">
                    Bahasa
                  </h1>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </button>
        <div className="bg-w text-white w-full md:w-32 flex md:flex-col ">
        <Link href={"/home"}>
          {scrolling ? (
            <img
              className="mt-1 md:mt-1 md:mr-4 left-4 fixed top-6 md:top-[4%] md:left-16 h-16 w-auto cursor-pointer"
              src="download (1).webp"
              alt="Scrolling Image"
            />
          ) : (
            <img
              className="mt-1 md:mt-1 md:mr-4 left-4 fixed top-6 md:top-[4%] md:left-16 h-16 w-auto cursor-pointer"
              src="download (2).webp"
              alt="Non-Scrolling Image"
            />
          )}
</Link>
          <div>
            <button
              onClick={toggleSidebar}
              className="bg-transparent text-white px-4  py-2 rounded mt-1 md:mt-1 pt-2 md:mr-4 fixed top-0 right-5 md:top-[44%] md:left-11 w-[60px]"
            >
              {isSidebarOpen ? (
                <>
                  <span className=" text-white ml-2 text-lg font-EurostileExt">
                    Close
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-14 h-14"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </>
              ) : (
                <>
                  <span className=" text-white ml-1 text-base font-EurostileExt">
                    MENU
                  </span>
                  <HiOutlineBars3 className="w-[52px] h-[52px]" />
                </>
              )}
            </button>

            <div
              className={`fixed inset-0 bg-opacity-50 z-50 items-center ${isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                } transition-opacity duration-1000 ease-in-out`}
            >
              <div
                className={`absolute inset-y-0 left-0 w-full items-center bg-gradient-to-l to-[#0f101c] from-[#171a80] transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                  } transition-transform duration-1000 ease-in-out`}
              >
  <img
    src="/vercel.svg"
    alt="Centered Image"
    className="fixed left-[23%] top-[18rem] "
  />



                <Link href={"/home"}>
                <img
                  className="   mt-1 md:mt-1 md:mr-4 left-6 fixed top-6  md:top-[5%]     md:left-16 h-16 w-auto"
                  src="download (2).webp"
                  alt="Error"
                />
                </Link>
  <Link href={"/contact-us"}>

                <button className=" bg-transparent border rounded-3xl text-white  px-3  py-2 hidden lg:block  fixed top-[6%] right-20   md:right-8  hover:bg-white hover:text-[#1c72b8] transition duration-1000 ease-in-out transform  text-sm font-semibold ">
                  CONTACT US
                </button>
  </Link>
                <button className=" bg-transparent border rounded-3xl text-white  px-3  py-2 hidden lg:block  fixed top-[6%] right-20   md:right-[163px]  hover:bg-white hover:text-[#1c72b8] transition duration-1000 ease-in-out transform  text-sm font-semibold ">
                  CAREERS
                </button>

                <button
                  onClick={toggleSidebar}
                  className="bg-transparent  text-white px-4 py-2 rounded mt-1 md:mt-1 pt-2 md:mr-4 fixed top-0 right-5 md:top-[44%] md:left-11 w-[60px]"
                >
                  {isSidebarOpen ? (
                    <>
                      <span className=" text-white ml-2 text-lg font-EurostileExt">
                        Close
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-14 h-14 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </>
                  ) : (
                    <>
                      <span className=" text-white ml-1 text-base font-EurostileExt ">
                        Menu
                      </span>
                      <HiOutlineBars3 className="w-[52px] h-[52px] " />
                    </>
                  )}
                </button>

                <div
                  className="flex items-start md:items-center justify-start md:justify-center h-screen"
                  // style={{
                  //   backgroundImage: 'url("/vercel.svg")',
                  //   backgroundPosition: 'center center',
                  //   backgroundSize: 'contain',
                  //   backgroundRepeat: 'no-repeat',
                  //   margin:"auto",
                  //   alignItems:"center ",
                  // }}
                
                >
                  <div className="flex mt-32 ml-[24px] md:ml-0  md:mt-8 flex-col md:flex-row flex-wrap justify-center gap-10 2xl:gap-14">
                    <div className="group relative">
                    <Link href={"/home"}>
                    <div className={`${
          "/home" === pathname
            ? ' text-[#3fa9ff]'
            : 'text-white'
        } `}>
                      <h1 className=" text-xs text-start font-thin  transition">
                        01
                      </h1>
                      <h1 className=" font-semibold  text-2xl md:text-[17px] lg:text-3xl xl:text-4xl 2xl:text-4xl font-TisaOT group-hover:text-[#1c72b8] transition duration-1000 ease-in-out transform">
                        Home
                      </h1>
                      </div>
                      </Link>
                    </div>

                    <div className="group relative transition duration-1000 ease-in-out">
                    <Link href={"/about-us"}>
                    <div className={`${
          "/about-us" === pathname
            ? ' text-[#3fa9ff]'
            : 'text-white'
        } `}>
                      <h1 className=" text-xs text-start font-thin transition">
                        02
                      </h1>
                      <h1 className=" font-semibold text-2xl md:text-[17px] lg:text-3xl xl:text-4xl 2xl:text-4xl font-TisaOT group-hover:text-[#1c72b8] transition duration-1000 ease-in-out transform ">
                        About Us
                      </h1>
                      </div>
                    </Link>

                      <div className="hidden    group-hover:block absolute top-full left-0  w-full  transition duration-1000 ease-in-out    rounded-lg  transform origin-top md:w-72 lg:w-80 xl:w-96">
                        <h2 className="text-white font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          About NETSOL Technologies
                        </h2>
                        <h2 className="text-white font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          Board of Directors
                        </h2>
                        <h2 className="text-white font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          Management Team
                        </h2>
                        <h2 className="text-white font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          Social Responsibilities
                        </h2>
                      </div>
                    </div>

                    <div className="group relative transition duration-1000 ease-in-out">
                    <Link href={"/products"}>
                    <div className={`${
          "/products" === pathname
            ? ' text-[#3fa9ff]'
            : 'text-white'
        } `}>
                      <h1 className=" text-xs text-start font-thin  transition">
                        03
                      </h1>
                      <h1 className=" font-semibold text-2xl md:text-[17px] lg:text-3xl xl:text-4xl 2xl:text-4xl font-TisaOT group-hover:text-[#1c72b8] transition duration-1000 ease-in-out transform ">
                        Products
                      </h1>
                      </div>
                    </Link>

                      <div className="hidden   group-hover:block absolute top-full left-0  w-full  transition duration-1000 ease-in-out   = rounded-lg  transform origin-top md:w-72 lg:w-80 xl:w-96">
                        <h2 className="text-white font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          Overview
                        </h2>
                        <h2 className="text-white font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          NFS Ascent
                        </h2>
                        <h2 className="text-white font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          NFS Digital
                        </h2>
                        <h2 className="text-white font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          AWS
                        </h2>
                        <h2 className="text-white font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          Flex
                        </h2>
                        <h2 className="text-white font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          Hubex
                        </h2>
                      </div>
                    </div>

                    <div className="group relative transition duration-1000 ease-in-out">
                    <Link href={"/investor"}>
                    <div className={`${
          "/investor" === pathname
            ? ' text-[#3fa9ff]'
            : 'text-white'
        } `}>
                      <h1 className=" text-xs text-start font-thin  transition">
                        04
                      </h1>
                      <h1 className="font-semibold text-2xl md:text-[17px] lg:text-3xl xl:text-4xl 2xl:text-4xl font-TisaOT group-hover:text-[#1c72b8] transition duration-1000 ease-in-out transform ">
                        Investors
                      </h1>
                      </div>
                    </Link>

                      <div className="hidden   group-hover:block absolute top-full left-0  w-full  transition duration-1000 ease-in-out   = rounded-lg  transform origin-top md:w-72 lg:w-80 xl:w-96">
                        <h2 className="text-white font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          Overview
                        </h2>
                        <h2 className="text-white font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          Company Information
                        </h2>
                        <h2 className="text-white font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          News
                        </h2>
                        <h2 className="text-white font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          Stock Data
                        </h2>
                        <h2 className="text-white font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          SEC Filings
                        </h2>
                      </div>
                    </div>

                    <div className="group relative transition duration-1000 ease-in-out">
                    <Link href={"/inovations"}>
                    <div className={`${
          "/inovations" === pathname
            ? ' text-[#3fa9ff]'
            : 'text-white'
        } `}>
                      <h1 className=" text-xs text-start font-thin  transition">
                        05
                      </h1>
                      <h1 className=" font-semibold text-2xl md:text-[17px] lg:text-3xl xl:text-4xl 2xl:text-4xl font-TisaOT group-hover:text-[#1c72b8] transition duration-1000 ease-in-out transform ">
                        Inovations
                      </h1></div>
                      </Link>
                      <div className="hidden   group-hover:block absolute top-full left-0  w-full  transition duration-1000 ease-in-out   = rounded-lg  transform origin-top md:w-72 lg:w-80 xl:w-96">
                        <h2 className="text-white font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          Overview
                        </h2>
                        <h2 className="text-white font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          Articles
                        </h2>
                        <h2 className="text-white font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          Downloads
                        </h2>
                        <h2 className="text-white font-AkkuratLight text-xs md:text-lg lg:text-xl hover:text-[#4fa3d1]  mb-1 transition duration-1000 ease-in-out transform ">
                          In the Labs
                        </h2>
                      </div>
                    </div>
                    <div className="group relative">
                    <Link href={"/events"}>
                    <div className={`${
          "/events" === pathname
            ? ' text-[#3fa9ff]'
            : 'text-white'
        } `}>
                      <h1 className=" text-xs text-start font-thin transition">
                        06
                      </h1>
                      <h1 className="font-semibold text-2xl md:text-[17px] lg:text-3xl xl:text-4xl 2xl:text-4xl font-TisaOT group-hover:text-[#1c72b8] transition duration-1000 ease-in-out transform">
                        Events
                      </h1>
                      </div>
                    </Link>
                    </div>
                  </div>
                </div>

                <button className="bg-transparent border-2 hidden md:block rounded-full text-white  h-[70px] w-[70px] mt-1 mx-auto fixed left-0 right-0 top-[85%] hover:bg-white hover:text-[#1c72b8] transition duration-500 ease-in-out transform text-xs   font-light">
                  SMART
                  <h1>NAV</h1>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="   md:flex-1 flex items-center  ">
          <div className=" mt-[50%] md:mt-0 w-[70%] sm:w-full md:w-[70%] ml-[24px] lg:w-[55%]">
            <h1 className="text-6xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-semibold text-[#1c72b8]">
              adaptive
            </h1>
            <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl mt-4 font-semibold text-white">
              to your business, your growth & the future.
            </h1>
            <h1 className="text-base sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl mt-4 text-white">
              Proudly serving the worlds top asset finance & leasing companies
              with smart software technology for over four decades.
            </h1>
          </div>
        </div>
        <button className="bg-transparent border-2 hidden md:block rounded-full text-white  h-[70px] w-[70px]  absolute  top-[85%]  mx-auto  left-0 right-0       hover:bg-white hover:text-[#1c72b8] transition duration-500 ease-in-out transform text-xs font-EurostileExt  font-light">
          EXPLORE
        </button>
      </div>
    </>
  );
}

export default Header;
