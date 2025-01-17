import LayoutDisplay from "@/components/layout"
// import Image from "next/image";

import ProductionHero from "@/assets/images/productions/hero.png";
import ArrowImage from "@/assets/images/arrow.png";

import { PricingPlans } from "@/components/talent/pricing";
import PageTitle from "@/components/page-title";

const TalentPage = () => {
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
                        <h2 className="text-8xl tracking-widest text-white text-center font-black leading-tight">CREATE <br /><span className="text-accent">GROW</span> <br /> THRIVE</h2>
                        <div className="mt-5">
                            <button className="flex items-center gap-5 flex-nowrap border-solid border border-[#FD532F] py-5 text-2xl mx-auto block px-20">
                                <div>
                                    CTA here
                                </div>
                                <div>
                                    <img src={ArrowImage.src} alt="arrow" width={0} height={0} className="w-full h-full object-cover object-center" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-20">
                    <PricingPlans />
                </div>
            </div >
        </LayoutDisplay >
    )
}

export default TalentPage;