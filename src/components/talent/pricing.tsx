import Link from "next/link";
import React from "react";

import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa6";


export const PricingPlans = () => {
    return (
        <div>
            <div className="pricing-options mt-20">
                <div className="px-15 mt-30">
                    <div className="text-center">
                        <h3 className="text-4xl md:text-6xl font-bold leading-loose">Choose from flexible subscription plans tailored to fit your creator needs.</h3>
                        <p className="text-[#E3E3E3] text-lg md:w-8/12 mx-auto mt-10">The pricing plans offer flexibility, growth, and consistent quality. Whether you are just starting out or are an
                            experienced creator seeking advanced support.</p>
                    </div>
                    <div>
                        <div className="pricing-button bg-[#EEEEEE] p-2 rounded-full flex w-max mx-auto mt-10">
                            <div className="p-6 px-10 text-black">
                                <h4 className="font-black">Monthly</h4>
                            </div>
                            <div className="p-6 px-10 bg-[#171717] rounded-full">
                                <h4 className="text-white font-black">Annual <span className="text-[#FF540B]">Save 30%</span></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="pricing-list-display bg-black py-30 mt-15">
                    <div className="contain">
                        <div className="grid grid-cols-1.5/31 gap-8 payment-plan">
                            <div className="panel list">
                                <div>
                                    <h3 className="text-4xl text-white text-left mb-5 uppercase leading-normal">
                                        Choose your plan for your brand
                                    </h3>
                                </div>
                                <p>Choose the plan that’s right for your brand. Whether you’re just getting started with your brand.</p>
                            </div>
                            <div className="top bottom panel">
                                <div>
                                    <h4 className="text-lg text-white">Bronze</h4>
                                </div>
                                <h5>$1500 <span>/ yr</span></h5>
                                <p className="text-base">Display stars in Google organic search risult and showcase.</p>
                                <div>
                                    <Link href="/contact/brand" className="p-4 px-7 bg-[#FF540B] text-base block mx-auto w-full mt-10 rounded-full">Subscribe</Link>
                                </div>
                            </div>
                            <div className="top bottom panel">
                                <div>
                                    <h4 className="text-lg text-white">Silver</h4>
                                </div>
                                <h5>$2000 <span>/ yr</span></h5>
                                <p className="text-base">Display stars in Google organic search risult and showcase.</p>
                                <div>
                                    <Link href="/contact/brand" className="p-4 px-7 bg-[#FF540B] text-base block mx-auto w-full mt-10 rounded-full">Subscribe</Link>
                                </div>
                            </div>
                            <div className="top bottom panel">
                                <div>
                                    <h4 className="text-lg text-white">Gold</h4>
                                </div>
                                <h5>$3000 <span>/ yr</span></h5>
                                <p className="text-base">Display stars in Google organic search risult and showcase.</p>
                                <div>
                                    <Link href="/contact/brand" className="p-4 px-7 bg-[#FF540B] text-base block mx-auto w-full mt-10 rounded-full">Subscribe</Link>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1.5/31 gap-8 payment-plan brand">
                            <div className="panel list">
                                <div>
                                    <h4 className="text-2xl pt-5 uppercase">Brand</h4>
                                </div>
                                <ul>
                                    <li className="panel-item">Brand Strategy</li>
                                    <li className="panel-item">Brand Identity</li>
                                    <li className="panel-item">Branding</li>
                                </ul>
                            </div>
                            <div className="panel">
                                <div>
                                    <h4 className="text-2xl pt-5">INFLUENCERS</h4>
                                </div>
                                <ul>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block"><AiOutlineCheckCircle /></span>
                                    </li>
                                </ul>
                            </div>
                            <div className="panel">
                                <div>
                                    <h4 className="text-2xl pt-5">INFLUENCERS</h4>
                                </div>
                                <ul>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block"><AiOutlineCheckCircle /></span>
                                    </li>
                                </ul>
                            </div>
                            <div className="panel">
                                <div>
                                    <h4 className="text-2xl pt-5">Influencers</h4>
                                </div>
                                <ul>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block"><AiOutlineCheckCircle /></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-1.5/31 gap-8 payment-plan">
                            <div className="panel list">
                                <div>
                                    <h4 className="text-2xl pt-5 uppercase">Content</h4>
                                </div>
                                <ul>
                                    <li className="panel-item">Content Strategy</li>
                                    <li className="panel-item">Content Consultancy</li>
                                    <li className="panel-item">Content Calendar</li>
                                    <li className="panel-item">
                                        <h4 className="mb-0 font-bolder flex items-center gap-1">Content Creation <span className="top-right"><FaArrowRight /></span></h4>
                                    </li>
                                </ul>
                            </div>
                            <div className="panel">
                                <div>
                                    <h4 className="text-2xl pt-5">INFLUENCERS</h4>
                                </div>
                                <ul>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                </ul>
                            </div>
                            <div className="panel">
                                <div>
                                    <h4 className="text-2xl pt-5">INFLUENCERS</h4>
                                </div>
                                <ul>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                </ul>
                            </div>
                            <div className="panel">
                                <div>
                                    <h4 className="text-2xl pt-5">Influencers</h4>
                                </div>
                                <ul>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-1.5/31 gap-8 payment-plan">
                            <div className="panel list">
                                <div>
                                    <h4 className="text-2xl">Video</h4>
                                </div>
                                <ul>
                                    <li className="panel-item">Tiktok</li>
                                    <li className="panel-item">Reels</li>
                                    <li className="panel-item">Promo Videos</li>
                                    <li className="panel-item">Lifestyle Videos</li>
                                </ul>
                            </div>
                            <div className="panel">
                                <div>
                                    <h4 className="text-2xl">INFLUENCERS</h4>
                                </div>
                                <ul>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-[#81A7BA]"><AiOutlineCloseCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-[#81A7BA]"><AiOutlineCloseCircle /></span>
                                    </li>
                                </ul>
                            </div>
                            <div className="panel">
                                <div>
                                    <h4 className="text-2xl">INFLUENCERS</h4>
                                </div>
                                <ul>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-[#81A7BA]"><AiOutlineCloseCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                </ul>
                            </div>
                            <div className="panel">
                                <div>
                                    <h4 className="text-2xl">Influencers</h4>
                                </div>
                                <ul>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-1.5/31 gap-8 payment-plan">
                            <div className="panel list">
                                <div>
                                    <h4 className="text-2xl">Pictures</h4>
                                </div>
                                <ul>
                                    <li className="panel-item">Studio Shot</li>
                                    <li className="panel-item">Lifestyle Shot</li>
                                    <li className="panel-item">Dump Shot</li>
                                </ul>
                            </div>
                            <div className="panel">
                                <div>
                                    <h4 className="text-2xl">INFLUENCERS</h4>
                                </div>
                                <ul>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-[#81A7BA]"><AiOutlineCloseCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                </ul>
                            </div>
                            <div className="panel">
                                <div>
                                    <h4 className="text-2xl">INFLUENCERS</h4>
                                </div>
                                <ul>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                </ul>
                            </div>
                            <div className="panel">
                                <div>
                                    <h4 className="text-2xl">Influencers</h4>
                                </div>
                                <ul>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-1.5/31 gap-8 payment-plan">
                            <div className="panel list">
                                <div>
                                    <h4 className="text-2xl">Graphics</h4>
                                </div>
                                <ul>
                                    <li className="panel-item">Marketing Graphics</li>
                                    <li className="panel-item">3D Graphics</li>
                                    <li className="panel-item">Motion Graphics</li>
                                    <li className="panel-item">Illustration</li>
                                </ul>
                            </div>
                            <div className="panel">
                                <div>
                                    <h4 className="text-2xl">INFLUENCERS</h4>
                                </div>
                                <ul>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-[#81A7BA]"><AiOutlineCloseCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-[#81A7BA]"><AiOutlineCloseCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-[#81A7BA]"><AiOutlineCloseCircle /></span>
                                    </li>
                                </ul>
                            </div>
                            <div className="panel">
                                <div>
                                    <h4 className="text-2xl">INFLUENCERS</h4>
                                </div>
                                <ul>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-[#81A7BA]"><AiOutlineCloseCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                </ul>
                            </div>
                            <div className="panel">
                                <div>
                                    <h4 className="text-2xl">Influencers</h4>
                                </div>
                                <ul>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-1.5/31 gap-8 payment-plan">
                            <div className="panel list">
                                <div>
                                    <h4 className="text-2xl">Distribution</h4>
                                </div>
                                <ul>
                                    <li className="panel-item">Meta (Facebook and Instagram)</li>
                                    <li className="panel-item">Twitter</li>
                                    <li className="panel-item">YouTube</li>
                                    <li className="panel-item">Tiktok</li>
                                    <li className="panel-item">Snapchat</li>
                                </ul>
                            </div>
                            <div className="panel">
                                <div>
                                    <h4 className="text-2xl">INFLUENCERS</h4>
                                </div>
                                <ul>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-[#81A7BA]"><AiOutlineCloseCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-[#81A7BA]"><AiOutlineCloseCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-[#81A7BA]"><AiOutlineCloseCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-[#81A7BA]"><AiOutlineCloseCircle /></span>
                                    </li>
                                </ul>
                            </div>
                            <div className="panel">
                                <div>
                                    <h4 className="text-2xl">INFLUENCERS</h4>
                                </div>
                                <ul>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-[#81A7BA]"><AiOutlineCloseCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-[#81A7BA]"><AiOutlineCloseCircle /></span>
                                    </li>
                                </ul>
                            </div>
                            <div className="panel">
                                <div>
                                    <h4 className="text-2xl">Influencers</h4>
                                </div>
                                <ul>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-green"><AiOutlineCheckCircle /></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-1.5/31 gap-8 payment-plan">
                            <div className="bottom panel list">
                                <div>
                                    <h4 className="text-2xl">INFLUENCERS</h4>
                                </div>
                                <ul>
                                    <li className="panel-item">Micro</li>
                                    <li className="panel-item">Macro</li>
                                    <li className="panel-item">Website</li>
                                </ul>
                            </div>
                            <div className="bottom panel info">
                                <div>
                                    <h4 className="text-2xl">INFLUENCERS</h4>
                                </div>
                                <ul>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-xl">Optional</span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-xl">Optional</span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-xl">Optional</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bottom panel info">
                                <div>
                                    <h4 className="text-2xl">INFLUENCERS</h4>
                                </div>
                                <ul>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-xl">Optional</span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-xl">Optional</span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-xl">Optional</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bottom panel info">
                                <div>
                                    <h4 className="text-2xl">INFLUENCERS</h4>
                                </div>
                                <ul>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-xl">Optional</span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-xl">Optional</span>
                                    </li>
                                    <li className="panel-item text-3xl text-center">
                                        <span className="w-max mx-auto block text-xl">Optional</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}