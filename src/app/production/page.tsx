"use client";

import LayoutDisplay from "@/components/layout"
import Image from "next/image";

import ProductionHero from "@/assets/images/productions/hero.png";
import PageTitle from "@/components/page-title";

import ArrowRightDesign from "@/assets/images/talent/arrow-design.svg";
import { useRef, useState } from "react";

import Img1 from "@/assets/images/home/brands/_1.svg";
import Img2 from "@/assets/images/home/brands/_2.svg";
import Img3 from "@/assets/images/home/brands/_3.svg";
import Img4 from "@/assets/images/home/brands/_4.svg";
import Img5 from "@/assets/images/home/brands/_5.svg";

import RightImg from "@/assets/images/icons/right.svg";
import LeftImg from "@/assets/images/icons/left.svg";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import SwiperCore from 'swiper';

const TalentPage = () => {
    const [currView, setCurrView] = useState("content_creation");

    const changeCurrentServiceTab = (e: string) => {
        setCurrView(e);
    }
    const swiperRef = useRef<SwiperCore | null>(null);

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    const breakpoints = {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 1
        },
        1000: {
            slidesPerView: 5
        }
    }
    return (
        <LayoutDisplay>
            <div className="px-20">
                <PageTitle title="Production" />
                <img src={ProductionHero.src} alt="man holding speaker" width={0} height={0} className="mt-10 w-full h-full object-cover object-center" />
                <div className="mt-20">
                    <p className="text-white leading-loose md:leading-loose max-w-[1173px] text-base md:text-3xl mx-auto">Understanding the challenges of content creation, Gaaga Agency provides comprehensive content
                        production services for our talents. This includes ideation, scripting, filming, editing, and publishing support. Whether
                        it&apos;s for social media, YouTube, or other platforms, our team ensures that your content is not only high-quality but also
                        aligns with your personal brand and appeals to your audience.</p>
                </div>
                <div className="mt-32">
                    <div>
                        <h2 className="text-9xl text-white text-center font-black leading-none">CREATE <br /><span className="text-accent">GROW</span> <br /> THRIVE</h2>
                    </div>
                </div>
                <div className="mt-24">
                    <div id="services" className="py-30">
                        <div className="container">
                            <div className="flex flex-col md:grid grid-cols-2 gap-20 md:gap-20">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <div className="bg-white py-1 px-4 rounded-full">
                                            <p className="text-xl text-black">Our Services</p>
                                        </div>
                                        <div>
                                            <Image width={0} height={0} src={ArrowRightDesign} alt="arrow right design" />
                                        </div>
                                    </div>
                                    <h2 className="text-6xl md:text-8xl mt-8">WHAT WE OFFER</h2>
                                    <div className="md:pl-10">
                                        {
                                            currView === "content_creation" ?
                                                <div>
                                                    <div className="w-[80%] ml-10">
                                                        <p className="text-[#ECE9E9] text-lg leading-10">We produce high quality content tailored to the creative needs, goals and target audience. This could involve
                                                            filming, designing, and recording contents.</p>
                                                        <p className="text-[#ECE9E9] text-lg leading-10 mt-2">We have high level production equipment at our disposal to match any content needed.</p>
                                                    </div>
                                                </div>
                                                :
                                                currView === "content_strategy" ?
                                                    <div>
                                                        <div className="w-[80%] ml-10">
                                                            <p className="text-[#ECE9E9] text-lg leading-10">We offer expert guidance in developing content ideas that resonate with your audience. Our tool
                                                                includes trend analysis, audience insights, and creative brainstorming sessions to craft impactful content strategies.
                                                            </p>
                                                            <p className="text-[#ECE9E9] text-lg leading-10 mt-2">Benefit: Stay ahead of trends and create content that engages and grows your audience.</p>
                                                        </div>
                                                    </div>
                                                    :
                                                    currView === "production_support" ?
                                                        <div>
                                                            <div className="w-[80%] ml-10">
                                                                <p className="text-[#ECE9E9] text-lg leading-10">Access to state-of-the-art production resources, including high-quality filming
                                                                    equipment, editing software, and technical support. We assist in producing content that meets professional standards.</p>
                                                                <p className="text-[#ECE9E9] text-lg leading-10 mt-2">Benefit: Elevate the quality of your content with professional production values.</p>
                                                            </div>
                                                        </div>
                                                        :
                                                        currView === "analytics" ?
                                                            <div>
                                                                <div className="w-[80%] ml-10">
                                                                    <p className="text-[#ECE9E9] text-lg leading-10">Utilize analytics tools to gain insights into content performance, audience
                                                                        demographics, and engagement metrics. This data helps in refining content strategy and improving overall impact.
                                                                    </p>
                                                                    <p className="text-[#ECE9E9] text-lg leading-10 mt-2">Benefit: Make informed decisions based on concrete data to maximize your
                                                                        content&apos;s reach and effectiveness.</p>
                                                                </div>
                                                            </div>
                                                            :
                                                            currView === "collaboration" ?
                                                                <div>
                                                                    <div className="w-[80%] ml-10">
                                                                        <p className="text-[#ECE9E9] text-lg leading-10">Our tool connects you with potential brand collaborations and
                                                                            sponsorships, aligning with your content and audience. We facilitate negotiations and agreements to ensure mutually beneficial partnerships.
                                                                        </p>
                                                                        <p className="text-[#ECE9E9] text-lg leading-10 mt-2">Benefit: Access to lucrative collaborations that complement and enhance your brand.</p>
                                                                    </div>
                                                                </div>
                                                                :
                                                                <div>
                                                                    <div className="w-[80%] ml-10">
                                                                        <p className="text-[#ECE9E9] text-lg leading-10">Access to a community of fellow creators for collaboration, support, and
                                                                            networking. Share experiences, seek advice, and build relationships within the creative community.
                                                                        </p>
                                                                        <p className="text-[#ECE9E9] text-lg leading-10 mt-2">Benefit: Foster connections and collaborations within a supportive creator community.</p>
                                                                    </div>
                                                                </div>
                                        }
                                    </div>
                                </div >
                                <div>
                                    <div>
                                        <ul>
                                            <li className={`py-8 px-10 cursor-pointer ${currView === "content_creation" ? "bg-[#FD532F] text-[#1B1A1A] text-black" : "border-b border-[#CFCFCF] text-[#fff]"}`}
                                                onClick={() => changeCurrentServiceTab("content_creation")}>
                                                <h4 className="tracking-wide text-2xl font-singolare">CONTENT CREATION</h4>
                                            </li>
                                            <li className={`py-8 px-10 cursor-pointer ${currView !== "content_strategy" ? "border-b border-[#CFCFCF] text-[#fff]" : "bg-[#FD532F] text-[#1B1A1A] text-black"}`}
                                                onClick={() => changeCurrentServiceTab("content_strategy")}>
                                                <h4 className="tracking-wide text-2xl font-singolare">CONTENT STRATEGY</h4>
                                            </li>
                                            <li className={`py-8 px-10 cursor-pointer ${currView !== "production_support" ? "border-b border-[#CFCFCF] text-[#fff]" : "bg-[#FD532F] text-[#1B1A1A] text-black"}`}
                                                onClick={() => changeCurrentServiceTab("production_support")}>
                                                <h4 className="tracking-wide text-2xl font-singolare">PRODUCTION SUPPORT</h4>
                                            </li>
                                            <li className={`py-8 px-10 cursor-pointer ${currView !== "analytics" ? "border-b border-[#CFCFCF] text-[#fff]" : "bg-[#FD532F] text-[#1B1A1A] text-black"}`}
                                                onClick={() => changeCurrentServiceTab("analytics")}>
                                                <h4 className="tracking-wide text-2xl font-singolare">ANALYTICS AND REPORTING</h4>
                                            </li>
                                            <li className={`py-8 px-10 cursor-pointer ${currView !== "collaboration" ? "border-b border-[#CFCFCF] text-[#fff]" : "bg-[#FD532F] text-[#1B1A1A] text-black"}`}
                                                onClick={() => changeCurrentServiceTab("collaboration")}>
                                                <h4 className="tracking-wide text-2xl font-singolare">COLLABORATION AND SPONSORSHIP</h4>
                                            </li>
                                            <li className={`py-8 px-10 cursor-pointer ${currView !== "community" ? "text-[#fff]" : "bg-[#FD532F] text-[#1B1A1A] text-black"}`}
                                                onClick={() => changeCurrentServiceTab("community")}>
                                                <h4 className="tracking-wide text-2xl font-singolare">COMMUNITY AND NETWORKING</h4>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div >
                        </div >
                    </div >
                </div>
                <div className="visibility-company-slider mt-32">
                    <div className="company-box">
                        <Swiper
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            initialSlide={4} centeredSlides={true} loop
                            spaceBetween={80} breakpoints={breakpoints}>
                            <SwiperSlide key={1}>
                                <div>
                                    <div className="visibility-company-tab bigger">
                                        <Image width={0} height={0} src={Img1} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={2}>
                                <div>
                                    <div className="visibility-company-tab smaller">
                                        <Image width={0} height={0} src={Img2} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={3}>
                                <div>
                                    <div className="visibility-company-tab small">
                                        <Image width={0} height={0} src={Img3} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={4}>
                                <div>
                                    <div className="visibility-company-tab">
                                        <Image width={0} height={0} src={Img4} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={5}>
                                <div>
                                    <div>
                                        <div className="visibility-company-tab">
                                            <Image width={0} height={0} src={Img5} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={6}>
                                <div>
                                    <div className="visibility-company-tab bigger">
                                        <Image width={0} height={0} src={Img1} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={7}>
                                <div>
                                    <div className="visibility-company-tab smaller">
                                        <Image width={0} height={0} src={Img2} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={8}>
                                <div>
                                    <div className="visibility-company-tab">
                                        <Image width={0} height={0} src={Img3} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="slider-controller left">
                        <button onClick={handlePrev}>
                            <Image width={0} height={0} src={LeftImg} alt="" />
                        </button>
                    </div>
                    <div className="slider-controller right">
                        <button onClick={handleNext}>
                            <Image width={0} height={0} src={RightImg} alt="" />
                        </button>
                    </div>
                </div>
            </div >
        </LayoutDisplay >
    )
}

export default TalentPage;