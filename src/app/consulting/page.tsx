import ManCamera from "@/assets/images/consulting/what_we_do.png";

import GaagaLogo from "@/assets/images/gaaga-white.png";
import MusicImg from "@/assets/images/consulting/music.svg";
import CreativeImg from "@/assets/images/consulting/creative.svg";
import CommercialImg from "@/assets/images/consulting/commercial.svg";
import ContentImg from "@/assets/images/consulting/content.svg";
import InfluencerImg from "@/assets/images/consulting/influencer.svg";
import EventImg from "@/assets/images/consulting/event.svg";

// import LayoutDisplay from "@/components/layout";
import Footer from "@/components/footer";
import Nav from "@/components/nav";

const AboutUsPage = () => {
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
                    <img src={ManCamera.src} alt="man with camera w-full" />
                </div>
            </div>
            <div className="px-20 mt-32">
                <div className="">
                    <h4 className="text-white mb-5 font-bold text-6xl">OUR EXPERTISE</h4>
                    <p className="text-white leading-loose">Larry Gaaga has collaborated with numerous celebrities in
                        Nigeria. Over time, Larry has developed partnerships that
                        are profitable to both parties.</p>
                </div>
                <div className="grid grid-cols-3 gap-10 mt-24">
                    <div className="border-solid border-4 px-8 py-10 border-[#FD532F]">
                        <img src={MusicImg.src} alt="music logo" className="mx-auto block mb-10" />
                        <h4 className="text-3xl text-white font-bold text-center mb-5">Music Placement</h4>
                        <p className="text-white leading-relaxed">This involves strategically integrating music into marketing campaigns and brand narratives. Gaaga Agency identifies and aligns
                            artists and their music that resonate with the brand&apos;s target audience and campaign objectives.</p>
                    </div>
                    <div className="border-solid border-4 px-8 py-10 border-[#FD532F] bg-[#FD532F]">
                        <img src={CreativeImg.src} alt="music logo" className="mx-auto block mb-10" />
                        <h4 className="text-3xl text-white font-bold text-center mb-5">Creative Strategy</h4>
                        <p className="text-white leading-relaxed">Crafting Your Brand&apos;s Story - Our creative strategies are designed to weave your brand&apos;s narrative into the vibrant
                            fabric of pop culture, ensuring a lasting impression.</p>
                    </div>
                    <div className="border-solid border-4 px-8 py-10 border-[#FD532F]">
                        <img src={CommercialImg.src} alt="music logo" className="mx-auto block mb-10" />
                        <h4 className="text-3xl text-white font-bold text-center mb-2">Commercial Production</h4>
                        <p className="text-white leading-relaxed">From concept to final cut, our commercial production team crafts visually stunning content that elevates
                            your brand&apos;s message.
                            From scripting to post-production, our commercial production service handles every aspect of creating
                            compelling visual content. We focus on storytelling that aligns with your brand&apos;s identity and goals, using high-quality
                            production techniques.
                        </p>
                    </div>
                    <div className="border-solid border-4 px-8 py-10 border-[#FD532F]">
                        <img src={ContentImg.src} alt="music logo" className="mx-auto block mb-10" />
                        <h4 className="text-3xl text-white font-bold text-center mb-5">Content Marketing</h4>
                        <p className="text-white leading-relaxed">We develop and distribute valuable content that attracts, engages, and retains your target
                            audience, driving brand loyalty.
                            We create and distribute valuable and relevant content to attract and retain a clearly defined audience. Our content
                            marketing strategy is aligned with your brand goals and is designed to drive profitable customer action.</p>
                    </div>
                    <div className="border-solid border-4 px-8 py-10 border-[#FD532F]">
                        <img src={InfluencerImg.src} alt="music logo" className="mx-auto block mb-10" />
                        <h4 className="text-3xl text-white font-bold text-center mb-5">Influencer Marketing</h4>
                        <p className="text-white leading-relaxed">Gaaga Agency collaborates with influencers across various platforms to promote
                            brands. The process involves identifying influencers whose audience demographics and interests align with the brand, and
                            creating campaigns that leverage the influencer&apos;s credibility and reach.</p>
                    </div>
                    <div className="border-solid border-4 px-8 py-10 border-[#FD532F]">
                        <img src={EventImg.src} alt="music logo" className="mx-auto block mb-10" />
                        <h4 className="text-3xl text-white font-bold text-center mb-2">Event Production and Management</h4>
                        <p className="text-white leading-relaxed">Gaaga Agency specializes in conceptualizing and executing events that showcase
                            talents and align with brand messages. This includes managing logistics, production, and post-event activities to
                            create memorable experiences for both the audience and participating talents.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUsPage;