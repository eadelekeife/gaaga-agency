"use client";

import ManCamera from "@/assets/images/consulting/what_we_do.png";

import GaagaLogo from "@/assets/images/gaaga-white.png";

import Talent from "@/assets/images/home/talent.svg";
import Consulting from "@/assets/images/home/consulting.svg";
import Arrow from "@/assets/images/home/arrow-slide.svg";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Image from "next/image";
import Link from "next/link";

// import LayoutDisplay from "@/components/layout";
import Footer from "@/components/footer";
import Nav from "@/components/nav";

const AboutUsPage = () => {
    const breakpoints = {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 1
        },
        1000: {
            slidesPerView: 3
        }
    }
    return (
        <div>
            <Nav displayType="absolute" />
            <div className="about-us-hero relative">
                <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                    <img src={GaagaLogo.src} alt="hero" width={0} height={0} className="w-auto max-w-[345.3px] mx-auto h-auto" />
                </div>
            </div>
            <div className="px-20 mt-28">
                <h4 className="text-white mb-5 text-5xl">WHAT WE DO</h4>
                <p className="text-white text-opacity-70 text-sm md:text-lg leading-loose md:leading-loose max-w-[1041px]">Gaaga Agency collaborates with organizations that are pioneers in their industries both domestically
                    and abroad. We are driven by a sincere desire to use entertainment and pop culture to assist our clients in
                    succeeding in the new market.</p>
                <div className="mt-6">
                    <img src={ManCamera.src} alt="man with camera" className="w-full" />
                </div>
            </div>
            <div className="px-20 mt-32">
                <div className="">
                    <h4 className="text-white mb-5 font-bold text-6xl">OUR EXPERTISE</h4>
                    <p className="text-white leading-loose">Larry Gaaga has collaborated with numerous celebrities in
                        Nigeria. Over time, Larry has developed partnerships that
                        are profitable to both parties.</p>
                </div>
                <div className="pt-20 md:pt-32">
                    <div className="service-bar">
                        <Swiper
                            spaceBetween={20} breakpoints={breakpoints}
                        >
                            <SwiperSlide key={1}>
                                <div className="">
                                    <div>
                                        <Image width={0} height={0} src={Talent} alt="musician posing for a picture" style={{ width: "100%", height: "100%" }} />
                                    </div>
                                    <div>
                                        <Link href="/contact/brand">
                                            <div className="flex gap-4 items-start mt-6">
                                                <div>
                                                    <Image src={Arrow} alt="link" width={300} height={300} />
                                                </div>
                                                <div>
                                                    <h4 className="text-2xl text-light-header">MUSIC PLACEMENT</h4>
                                                    <p className="text-light-text leading-8 mt-3 w-11/12">This service focuses on scouting, nurturing, and managing talents (artists, actors, performers, etc.) for
                                                        collaborations with brands. Gaaga Agency works on enhancing the talent&apos;s visibility, aligning them with
                                                        suitable brand endorsements, and managing contracts and collaborations.</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={2}>
                                <div>
                                    <div>
                                        <div className="services-link px-10 py-8 md:p-10 flex items-center justify-center rounded-3xl mb-3">
                                            <div>
                                                <h2 className="text-3xl md:text-6xl">GAAGA</h2>
                                            </div>
                                            {/* <div>
                                                <Image width={0} height={0} src={Arrow} alt="link" />
                                            </div> */}
                                        </div>
                                    </div>
                                    <div>
                                        <Image width={0} height={0} src={Consulting} alt="celebrity posing for a picture" style={{ width: "100%", height: "100%" }} />
                                    </div>
                                    <div>
                                        <Link href="/contact/brand">
                                            <div className="flex gap-4 items-start mt-6">
                                                <div>
                                                    <Image src={Arrow} alt="link" width={300} height={300} />
                                                </div>
                                                <div className="">
                                                    <h4 className="text-2xl text-light-header">CREATIVE STRATEGY</h4>
                                                    <p className="text-light-text leading-8 mt-3 w-11/12">At Gaaga Agency, we offer personalized consulting services to
                                                        help talents navigate the complexities of the entertainment industry. Our consulting covers career
                                                        planning, image branding, negotiation tactics, and market positioning. We provide insights and strategies
                                                        to help you maximize your potential and reach your career goals.</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={3}>
                                <div>
                                    <div>
                                        <Image width={0} height={0} src={Talent} alt="man holding a speaker" style={{ width: "100%", height: "100%" }} />
                                    </div>
                                    <div>
                                        <Link href="/talent">
                                            <div className="flex gap-4 items-start mt-6">
                                                <div>
                                                    <Image src={Arrow} alt="link" width={300} height={300} />
                                                </div>
                                                <div className="">
                                                    <h4 className="text-2xl text-light-header">COMMERCIAL PRODUCTION</h4>
                                                    <p className="text-light-text mt-3 leading-8">Understanding the challenges of content creation, Gaaga Agency
                                                        provides comprehensive content production services for our talents. This includes
                                                        ideation, scripting, filming, editing, and publishing support. Whether it&apos;s for social media, YouTube, or
                                                        other platforms, our team ensures that your content is not only high-quality but also aligns with your
                                                        personal brand and appeals to your audience.</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUsPage;