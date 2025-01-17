import "./talent.css";

import React from "react";
import Link from "next/link";
// import Image from "next/image";
import Talent from "@/assets/images/talent/talent.svg";
import ArrowRight from "@/assets/images/icons/arrow-right.svg";

export const TalentHero = () => {
    return (
        <div className="talent-hero py-20 bg-[#FF540B]">
            <div className="container">
                <div className="flex flex-col-reverse md:grid grid-cols-1/1.5 gap-10 md:gap-20">
                    <div>
                        <div className="talent-hero-img">
                            <img width={0} height={0} src={Talent.src} alt="our artists at an event"
                                style={{ width: "100%", height: "100%" }} />
                            <div className="talent-hero-link">
                                <Link className="flex items-center gap-3 py-4 px-7 bg-[#FF540B] block w-max text-white rounded-full mx-auto mt-7" href="">Schedule Meeting
                                    <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full"><img width={0} height={0} src={ArrowRight.src} alt="arrow right" /></div></Link>
                            </div>
                        </div>
                    </div>
                    <div className="text-center md:pt-30">
                        <h2 className="text-white text-6xl md:text-8xl">Create. Grow. Thrive.</h2>
                        <div className="mt-8">
                            <p className="text-white text-xl md:text-2xl">The ultimate content creation toolkit for creators: A Subscription-Based Revolution.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


// Just small money. E come dey make me pity her gan