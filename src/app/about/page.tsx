"use client";

import LayoutDisplay from "@/components/layout";
// import Image from "next/image";

import AbtImg from "@/assets/images/talent.png";
import LarryImg from "@/assets/images/larry.png";
// import ManImg from "@/assets/images/man.png";
import Link from "next/link";

// import gsap, { Power0 } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useEffect, useRef } from "react";
import { useRef } from "react";

// import AheadImg from "@/assets/images/about/ahead.png";
// import JourneyImg from "@/assets/images/about/journey.png";
// import PhilosophyImg from "@/assets/images/about/philosophy.png";
// import StoryImg from "@/assets/images/about/story.png";
// import TalentImg from "@/assets/images/about/talent.png";
// import WhatImg from "@/assets/images/about/what.png";


const AboutUsPage = () => {

    const firstRef = useRef(null);
    const secRef = useRef(null);


    // gsap.registerPlugin(ScrollTrigger);
    // useEffect(() => {
    //     // Set up GSAP ScrollTrigger with pinning
    //     ScrollTrigger.create({
    //         trigger: firstRef.current,     // Element to trigger the animation
    //         start: "top top",            // Animation start point in viewport
    //         end: "+=300",                 // Duration of the "hold" effect
    //         pin: true,                      // Pins the section in place
    //         markers: true,
    //         pinSpacing: false,              // Avoids additional spacing when unpinned
    //     });

    //     gsap.to(secRef.current, {
    //         scrollTrigger: {
    //             trigger: firstRef.current,
    //             start: "top center",
    //             end: "top 100px", // Controls when the animation stops
    //             // scrub: true,      // Allows smooth scrubbing up to end position
    //             toggleActions: "play none none none", // Plays only once, holds position
    //             markers: true,
    //         },
    //         y: -5,               // Set target y value
    //         opacity: 1,
    //         duration: 1,
    //         ease: "power3.out"
    //     })

    //     return () => {
    //         // Clean up on component unmount
    //         ScrollTrigger.killAll();
    //     };
    // }, []);
    return (
        <div>
            <LayoutDisplay>
                <div className="mt-20">
                    <div className="px-20">
                        <div className="flex justify-between items-center">
                            <h3 className="text-white font-black text-white text-3xl">About us</h3>
                            <div className="flex gap-10">
                                <Link className="text-[#AAAAAA]" href="">Our story</Link>
                                <Link className="text-[#AAAAAA]" href="">Team</Link>
                                <Link className="text-[#AAAAAA]" href="">Collaboration</Link>
                            </div>
                        </div>
                    </div>
                    <img src={AbtImg.src} alt="talent" width={0} height={0} className="mt-10 w-full h-full object-cover object-center" />
                    <div className="px-20">
                        <div className="mt-20">
                            <div className="w-[90%] mx-auto px-5 mt-15">
                                <h2 className="text-5xl text-white font-bold">About The Product</h2>
                                <p className="text-base text-white leading-loose mt-10">
                                    The Gaaga Agency&apos;s Creator Support Tool. Designed to fuel your creativity, enhance your production quality, and
                                    amplify your brand, this tool is your gateway to mastering the art of content creation. We proudly introduce a
                                    game-changing product for creators - a subscription-based Content Creation Support platform. Designed to ease
                                    the burden of content production, this service allows you to focus on your creativity and growth, leaving the
                                    intricacies of content creation and marketing to us.
                                </p>
                                <div ref={firstRef}>
                                    <p className="text-base text-white leading-loose mt-10">
                                        The Creator Support Tool is an innovative platform designed to empower creators with comprehensive assistance
                                        in content creation, brand collaboration, and career advancement. This tool is a one-stop solution that provides
                                        tailored support to meet the diverse needs of creative professionals. Whether you&apos;re just starting out or are
                                        an established creator, our tailored support system is here to elevate your journey.
                                    </p>
                                    <div className="mt-10">
                                        <div className="grid grid-cols-5/1">
                                            <div className="grid grid-cols-2/1 bg-[#E7E3D8] items-center">
                                                <div>
                                                    <div className="w-[75%] mx-auto pt-15 pb-15">
                                                        <h3 className="text-4xl mb-10 text-black font-black">Our Story</h3>
                                                        <p className="text-black leading-snug text-base">Who We Are: Gaaga Agency, based in the
                                                            heart of Lagos, Nigeria, is a pioneer in blending entertainment, culture, and
                                                            marketing into a cohesive and dynamic force. Founded by the visionary Larry Gaaga, we
                                                            have grown from a group of enthusiastic professionals into a leading agency in the
                                                            digital marketing and talent management space.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="talent-1">
                                                </div>
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                                <div ref={secRef}>
                                    <div className="grid grid-cols-1/5" ref={secRef}>
                                        <div></div>
                                        <div className="grid grid-cols-2/1 bg-[#99D2DB] items-center">
                                            <div>
                                                <div className="w-[75%] mx-auto pt-15 pb-15">
                                                    <h3 className="text-4xl mb-10 text-black font-black">Our Journey</h3>
                                                    <p className="text-black leading-snug text-base">
                                                        Our story began with a simple yet powerful vision - to bridge the gap between emerging
                                                        markets and brands through the universal language of entertainment and pop culture. Recognizing
                                                        the potential in Nigeria&apos;s vibrant youth and rich cultural heritage, we embarked on a mission
                                                        to create marketing strategies and campaigns that resonate on a deeper level.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="talent-2">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div ref={secRef}>
                                    <div className="grid grid-cols-5/1" ref={secRef}>
                                        <div className="grid grid-cols-2/1 bg-[#FFCF53] items-center">
                                            <div>
                                                <div className="w-[75%] mx-auto pt-15 pb-15">
                                                    <h3 className="text-4xl mb-10 text-black font-black">What We Do</h3>
                                                    <p className="text-black leading-snug text-base">
                                                        Gaaga Agency operates at the intersection of talent management and brand marketing. Our
                                                        expertise spans across nurturing individual talents in the entertainment industry and
                                                        crafting compelling brand narratives. We pride ourselves on our ability to create cultural
                                                        connections that leave a lasting impact.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="talent-3">
                                            </div>
                                        </div>
                                        <div></div>
                                    </div>
                                </div>
                                <div ref={secRef}>
                                    <div className="grid grid-cols-1/5" ref={secRef}>
                                        <div></div>
                                        <div className="grid grid-cols-1/2 bg-[#446B94] items-center">
                                            <div className="talent-4">
                                            </div>
                                            <div>
                                                <div className="w-[75%] mx-auto pt-15 pb-15">
                                                    <h3 className="text-4xl mb-10 text-black font-black">Talent Management</h3>
                                                    <p className="text-black leading-snug text-base">
                                                        Nurturing Creative Excellence: Our Talent Management division is dedicated to discovering, developing, and
                                                        promoting talents across various entertainment sectors. We believe in the transformative power of talent
                                                        and work tirelessly to provide opportunities that align with our clients&apos; growth and aspirations. From
                                                        music placement to event production, our team is skilled in elevating talents to new heights.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div ref={secRef}>
                                    <div className="grid grid-cols-5/1" ref={secRef}>
                                        <div className="grid grid-cols-1/2 bg-[#F04D3A] items-center">
                                            <div className="talent-5">
                                            </div>
                                            <div>
                                                <div className="w-[75%] mx-auto pt-15 pb-15">
                                                    <h3 className="text-4xl mb-10 text-black font-black">Our Philosophy</h3>
                                                    <p className="text-black leading-snug text-base">
                                                        At Gaaga Agency, we believe in the power of collaboration, creativity, and innovation. Our
                                                        work is fueled by a passion for what we do and a deep understanding of the markets we
                                                        serve. We are committed to delivering excellence and driving success for our clients.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div></div>
                                    </div>
                                </div>
                                <div ref={secRef}>
                                    <div className="grid grid-cols-1/5" ref={secRef}>
                                        <div></div>
                                        <div className="grid grid-cols-2/1 bg-[#C68100] items-center">
                                            <div>
                                                <div className="w-[75%] mx-auto pt-15 pb-15">
                                                    <h3 className="text-4xl mb-10 text-black font-black">Looking Ahead</h3>
                                                    <p className="text-black leading-snug text-base">
                                                        As we continue to grow, our roots remain firmly planted in the rich soil of Nigerian
                                                        culture. We are constantly evolving, embracing new technologies and strategies to stay
                                                        ahead in an ever-changing landscape. Our commitment to our clients and talents is
                                                        unwavering, and we look forward to forging new paths and achieving greater heights together.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="talent-6">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="mt-10">
                                <div className="grid grid-cols-5/1">
                                    <div className="grid grid-cols-2/1 bg-[#E7E3D8] items-center">
                                        <div>
                                            <div className="w-[75%] mx-auto pt-15 pb-15">
                                                <h3 className="text-4xl mb-10 text-black font-black">Content Creation</h3>
                                                <p className="text-black leading-snug text-base">We produce high quality content tailored to the creative needs, goals and target audience. This could involve filming, designing, and recording contents.
                                                </p>
                                                <p className="text-black leading-snug text-base mt-5">
                                                    We have high level production equipment at our disposal to match any content needed.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="talent-1">
                                        </div>
                                    </div>
                                    <div></div>
                                </div>
                                <div className="grid grid-cols-1/5">
                                    <div></div>
                                    <div className="grid grid-cols-2/1 bg-[#99D2DB] items-center">
                                        <div>
                                            <div className="w-[75%] mx-auto pt-15 pb-15">
                                                <h3 className="text-4xl mb-10 text-black font-black">Content Strategy</h3>
                                                <p className="text-black leading-snug text-base">
                                                    We offer expert guidance in developing content ideas that resonate with your
                                                    audience. Our tool includes trend analysis, audience insights, and creative brainstorming
                                                    sessions to craft impactful content strategies
                                                </p>
                                                <p className="text-black leading-snug text-base mt-5">
                                                    Benefit: Stay ahead of trends and create content that engages and grows your audience.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="talent-2">
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-5/1" ref={thirdRef}>
                                    <div className="grid grid-cols-2/1 bg-[#FFCF53] items-center">
                                        <div>
                                            <div className="w-[75%] mx-auto pt-15 pb-15">
                                                <h3 className="text-4xl mb-10 text-black font-black">Production Support</h3>
                                                <p className="text-black leading-snug text-base">
                                                    Access to state-of-the-art production resources, including high-quality filming equipment, editing software, and
                                                    technical support. We assist in producing content that meets professional standards.
                                                </p>
                                                <p className="text-black leading-snug text-base mt-5">
                                                    Benefit: Elevate the quality of your content with professional production values.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="talent-3">
                                        </div>
                                    </div>
                                    <div></div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="px-20 mt-20">
                        <h3 className="text-white font-black text-white text-4xl">CAPTAIN OF THE SHIP</h3>
                    </div>
                    <img src={LarryImg.src} alt="talent" width={0} height={0} className="mt-15 w-full h-full object-cover object-center" />
                    <div className="px-20 mt-20">
                        <p className="text-white leading-loose">
                            Larry Gaaga is a multi-talented artist and record producer popularly known for breaking many of the top artists in
                            Nigeria. Gaaga&apos;s sphere of influence stretches from music to movies, sports, and lifestyle making him the ambassador
                            and influencer of choice for various brands As a captain of several industries, Larry Gaaga commands the kind of
                            influence brands can leverage across multiple industries.
                        </p>
                        <p className="text-white leading-loose mt-5">He is what we would call a Super Influencer</p>
                        <div className="mt-20">
                            <h3 className="text-white font-black text-white text-4xl">Meet the team</h3>
                            <div className="grid grid-cols-3 gap-20 mt-10">
                                <div>
                                    <div className="w-full h-[20rem] bg-[#5F5F5F]">

                                    </div>
                                    <div className="mt-5">
                                        <h5 className="text-[#5F5F5F] text-base mb-1">Position</h5>
                                        <h3 className="text-white text-xl font-black">Full Name</h3>
                                    </div>
                                </div>
                                <div>
                                    <div className="w-full h-[20rem] bg-[#5F5F5F]">

                                    </div>
                                    <div className="mt-5">
                                        <h5 className="text-[#5F5F5F] text-base mb-1">Position</h5>
                                        <h3 className="text-white text-xl font-black">Full Name</h3>
                                    </div>
                                </div>
                                <div>
                                    <div className="w-full h-[20rem] bg-[#5F5F5F]">

                                    </div>
                                    <div className="mt-5">
                                        <h5 className="text-[#5F5F5F] text-base mb-1">Position</h5>
                                        <h3 className="text-white text-xl font-black">Full Name</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutDisplay>
        </div>
    )
}

export default AboutUsPage;