"use client";

// import { Input } from "antd";
// import Image from "next/image";
import Link from "next/link";
// import { useEffect } from "react";

import LogoWhiteImg from "@/assets/images/logo-white.svg";
import Image from "next/image";

export default function Footer(props: { noMargin?: boolean }) {
    return (
        <div className={`bg-[#02070E] ${props.noMargin ? "" : "mt-40"}`}>
            <div className="px-32">
                <div className="flex flex-col md:grid grid-cols-1/1.5 gap-y-20 md:gap-y-10 gap-x-28 pt-24">
                    <div className="w-max">
                        <Image width={0} height={0} src={LogoWhiteImg} alt="LogoBlackImg" className="logo" />
                        <div className="mt-7">
                            <p className="text-white text-">Collaboration platform <br /> for modern team</p>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                            <div>
                                <h5 className="text-white font-singolare">Contact Us</h5>
                                <ul className="mt-7">
                                    <li className="mb-4">
                                        <Link href="" className="text-white text-opacity-60">info@team.com</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="" className="text-white text-opacity-60">+234123456789</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="" className="text-white text-opacity-60">3321 Lekki Lagos</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="text-white font-singolare">Company</h5>
                                <ul className="mt-7">
                                    <li className="mb-4">
                                        <Link href="" className="text-white text-opacity-60">About us</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="" className="text-white text-opacity-60">Services</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link href="" className="text-white text-opacity-60">Contact us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="">
                                <h5 className="text-white font-singolare">Stay up to date</h5>
                                <ul className="mt-7">
                                    <li className="mb-4">
                                        <Link href="" className="text-white text-opacity-60">Subscribe to our news letter</Link>
                                    </li>
                                </ul>
                                <div className="mt-16">
                                    <div className="">
                                        <label htmlFor="" className="text-white text-opacity-[54%] text-sm mb-2 block">Email</label>
                                        <input className="rounded-lg w-full" style={{ height: "4rem", background: "rgba(255,255,255,.2)" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-20 pb-4">
                    <p className="text-white text-opacity-60">© Copyright Team. All right reserved</p>
                </div>
            </div>
        </div>
    );
}
