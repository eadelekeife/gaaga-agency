'use client';

// import Image from "next/image";
import Link from "next/link";

import Image from "next/image";
import LogoBlackImg from "../assets/images/sec_logo.svg";
// import MenuSVG from "../assets/images/menu.svg";
// import LogoWhiteImg from "../assets/images/logo-white.svg";
import { useEffect, useState } from "react";
import { Drawer } from "antd";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";


interface NavigationInterface {
    bgColor?: boolean
    hideLogo?: boolean
    displayType?: "relative" | "absolute"
}

const Nav = (props: NavigationInterface) => {

    const [currentPath, setCurrentPath] = useState("");
    // const [currentView, setCurrentView] = useState<any>("corporate");
    const [displayOffering, setDisplayOffering] = useState<boolean>(false);
    const [displayDrawer, setDisplayDrawer] = useState(false);
    // useEffect(() => {
    //     setCurrentView(localStorage.getItem("current-view"));
    // }, []);

    const toggleDisplayNavigation = () => setDisplayDrawer(!displayDrawer);
    const toggleDisplayOffering = () => setDisplayOffering(!displayOffering);

    useEffect(() => {
        // Ensure it's running in the browser
        if (typeof window !== "undefined") {
            setCurrentPath(window.location.pathname);
        }
    }, []);

    return (
        <div className={`navigation pt-7 ${props.bgColor ? "dark" : ""} ${props.displayType === "absolute" ? `${props.displayType} top-0 w-full` : "relative"}`}
            style={{ zIndex: 10000 }}>
            <div className="px-20">
                <div className="flex justify-between py-4 items-center">
                    <div className={`${props.hideLogo ? "invisible" : "block"}`}>
                        <Link href="/">
                            <Image src={LogoBlackImg} alt="logo" width={0} height={0} className="logo w-full h-full" />
                        </Link>
                    </div>
                    <div>
                        <div onClick={toggleDisplayNavigation} className="cursor-pointer z-10 relative">
                            <div className={`nav-bar w-[4rem] mb-5 block h-[4px] rounded-xl bg-white top ${displayDrawer ? "slant" : ""}`}></div>
                            <div className={`nav-bar w-[4rem] h-[4px] block rounded-xl bg-white bottom ${displayDrawer ? "slant" : ""}`}></div>
                        </div>
                        {/* <Image src={MenuSVG} alt="logo" width={0} height={0} className="logo w-full h-full" /> */}
                    </div>
                </div>
            </div>
            <Drawer onClose={toggleDisplayNavigation} open={displayDrawer}>
                <div className="menu-box">
                    <ul className="text-center flex flex-col gap-5">
                        <li>
                            <Link onClick={toggleDisplayNavigation} href="/" className={`${currentPath === "/" ? "opacity-60" : ""} text-white text-center font-Abnes text-5xl`}>Home</Link>
                        </li>
                        <li>
                            <Link onClick={toggleDisplayNavigation} href="/about" className={`${currentPath === "/about" ? "opacity-60" : ""} text-white text-center font-Abnes text-5xl`}>About</Link>
                        </li>
                        <li>
                            <Link href="#" onClick={toggleDisplayOffering} className="flex items-start gap-10 text-white text-center font-Abnes">
                                <div>
                                    <h3 className="text-5xl">What we offer</h3>
                                </div>
                                <div>
                                    {
                                        displayOffering ? <IoMdArrowDropup className="text-4xl" /> : <IoMdArrowDropdown className="text-4xl" />
                                    }
                                </div>
                            </Link>
                            <div className={`dropdown ${displayOffering ? "display pt-5" : ""}`}>
                                <ul>
                                    <li>
                                        <Link onClick={toggleDisplayNavigation} href="/corporate" className={`${currentPath === "/corporate" ? "opacity-60" : ""} text-2xl leading-loose font-Abnes text-white text-opacity-70 mb-5 block`}>Corporate</Link>
                                    </li>
                                    <li>
                                        <Link onClick={toggleDisplayNavigation} href="/production" className={`${currentPath === "/production" ? "opacity-60" : ""} text-2xl mb-5 leading-loose font-Abnes text-white text-opacity-70 block`}>Production</Link>
                                    </li>
                                    <li>
                                        <Link onClick={toggleDisplayNavigation} href="/talent" className={`${currentPath === "/talent" ? "opacity-60" : ""} text-2xl leading-loose font-Abnes text-white text-opacity-70 block`}>Talent</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link onClick={toggleDisplayNavigation} href="/project" className={`${currentPath === "/project" ? "opacity-60" : ""} text-white font-Abnes text-center text-5xl`}>Project</Link>
                        </li>
                        <li>
                            <Link onClick={toggleDisplayNavigation} href="/blog" className={`${currentPath === "/blog" ? "opacity-60" : ""} text-white font-Abnes text-center text-5xl`}>Blog</Link>
                        </li>
                        {/* <li>
                            <Link href="/consulting" className={`${currentPath === "/" ? "opacity-60" : ""} text-white font-Abnes text-center text-5xl">Consulting</Link>
                        </li> */}
                    </ul>
                </div>
            </Drawer>
        </div>
    );
}

export default Nav;