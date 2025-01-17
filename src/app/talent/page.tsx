import LayoutDisplay from "@/components/layout";
// import Image from "next/image";

import TalentImg from "@/assets/images/talent/hero.png";
import ManImg from "@/assets/images/talent/why_1.png";
import Link from "next/link";
// import Talent1Img from "@/assets/images/talent1.png";
// import Talent2Img from "@/assets/images/talent2.png";
// import Talent3Img from "@/assets/images/talent3.png";

const TalentPage = () => {
    return (
        <div>
            <LayoutDisplay noMargin={true}>
                <div className="mt-20">
                    <div className="px-20">
                        <div className="flex justify-between items-center">
                            <h3 className="text-white font-black text-white text-3xl">Talent</h3>
                            <div className="flex gap-10">
                                <Link className="text-[#AAAAAA]" href="">Signed Talent</Link>
                                <Link className="text-[#AAAAAA]" href="">What we offer</Link>
                                <Link className="text-[#AAAAAA]" href="">Projects</Link>
                            </div>
                        </div>
                        <img src={TalentImg.src} alt="talent" width={0} height={0} className="mt-10 w-full h-full object-cover object-center" />
                        <div className="mt-20 pb-32">
                            <h5 className="text-accent font-bold text-xl mb-2">Talent Name</h5>
                            <h3 className="text-3xl font-bold">Project Name</h3>
                            <div className="mt-15">
                                <h2 className="text-5xl text-white font-bold">Why Work with Gaaga Agency</h2>
                            </div>
                            <div className="w-[85%] mx-auto mt-30">
                                <div className="grid grid-cols-1/1.5 bg-[#F5F7FA] items-center">
                                    <div>
                                        <div>
                                            <div className="pb-10">
                                                <img src={ManImg.src} alt="talent" width={0} height={0} className="-ml-10 -mt-20 w-full h-full object-cover object-center" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-[90%] mx-auto">
                                            <h3 className="text-4xl mb-5 text-black font-black">Representation</h3>
                                            <p className="text-black leading-normal text-xl">As a creator-centered talent agency, Gaaga Agency offers 
                                                personalized representation, ensuring that your unique talents are showcased to the right audiences and industries.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="talent bg-[#F5F7FA] pb-20">
                        <div className="px-32 pt-20">
                            <h3 className="font-black text-black text-3xl mb-10">What We Offer</h3>
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
                            <div className="grid grid-cols-5/1">
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
                        </div>
                    </div>
                </div>
            </LayoutDisplay>
        </div>
    )
}

export default TalentPage;