"use client";

// import { Input } from "antd";
// import Image from "next/image";
import Link from "next/link";
// import { useEffect } from "react";

import LogoWhiteImg from "@/assets/images/logo-white.svg";

export default function Footer(props: { noMargin?: boolean }) {
    return (
        <div className={`bg-[#02070E] ${props.noMargin ? "" : "mt-30"}`}>
            <div className="px-32">
                <div className="flex flex-col md:grid grid-cols-1/1.5 gap-y-20 md:gap-y-10 gap-x-28 pt-24">
                    <div className="w-max">
                        <img width={0} height={0} src={LogoWhiteImg.src} alt="LogoBlackImg" className="logo" />
                        <div className="mt-7">
                            <p className="text-white text-">Collaboration platform <br /> for modern team</p>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                            <div>
                                <h5 className="text-white">Contact Us</h5>
                                <ul className="mt-7">
                                    <li className="mb-4">
                                        <Link href="" className="text-off-white">info@team.com</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="" className="text-off-white">+234123456789</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="" className="text-off-white">3321 Lekki Lagos</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="text-white">Company</h5>
                                <ul className="mt-7">
                                    <li className="mb-4">
                                        <Link href="" className="text-off-white">About us</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="" className="text-off-white">Services</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="" className="text-off-white">Contact us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="text-white">Stay up to date</h5>
                                <ul className="mt-7">
                                    <li className="mb-4">
                                        <Link href="" className="text-off-white">Subscribe to our news letter</Link>
                                    </li>
                                </ul>
                                <div className="mt-28 flex justify-between">
                                    <div></div>
                                    <div className="">
                                        <label htmlFor="" className="text-off-white text-xs block">Email</label>
                                        <input style={{ height: "4rem", background: "rgba(255,255,255,.2)", border: "1px solid rgba(255,255,255,.2)" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-20 pb-4">
                    <p className="text-off-white">© Copyright Team. All right reserved</p>
                </div>
            </div>
        </div>
    );
}
