// import Image from "next/image";
// import Link from "next/link";

import IG from "@/assets/images/logos/ig.svg";
import Facebook from "@/assets/images/logos/fb.svg";
import X from "@/assets/images/logos/x.svg";
import LinkedIn from "@/assets/images/logos/linkedin.svg";
import ArrowStyled from "@/assets/images/icons/arrow-styled.svg";

import LogoImg from "@/assets/images/logo.svg";

export default function SecFooter(props: { noMargin?: boolean }) {
    return (
        <div className="container">
            <div className={`bg-[#FF540B] ${props.noMargin ? "" : "mt-30"} pt-10 pb-20 rounded-b-120`}>
                <div className="container">
                    <div className="grid grid-cols-2/1/2 gap-2 items-center w-full">
                        <div className="flex items-center w-full">
                            <div className="bg-light-white w-full h-0.5"></div>
                            <div className="solid-bar bg-light-white w-3 h-3 rounded-full"></div>
                        </div>
                        <div className="w-full">
                            <img src={ArrowStyled.src} alt="styled arrow" className="w-32 mx-auto" />
                        </div>
                        <div>
                            <div className="flex items-center w-full">
                                <div className="solid-bar bg-light-white w-3 h-3 rounded-full"></div>
                                <div className="bg-light-white w-full h-0.5"></div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20">
                        <h2 className="text-center text-5xl md:text-8xl uppercase text-white">Let’s <br /> discuss <br /> your brand</h2>
                        <div className="text-center flex justify-center gap-5 mt-10 md:mt-5">
                            <img src={IG.src} alt="connect with us on instagram" className="w-auto h-9 md:h-15" />
                            <img src={Facebook.src} alt="connect with us on facebook" className="w-auto h-9 md:h-15" />
                            <img src={X.src} alt="connect with us on x" className="w-auto h-9 md:h-15" />
                            <img src={LinkedIn.src} alt="connect with us on linkedin" className="w-auto h-9 md:h-15" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mb-30">
                <div className="flex justify-center mb-15 mt-20">
                    <img src={LogoImg.src} alt="logo" />
                </div>
                <ul className="flex flex-col gap-8 text-center md:text-left md:gap-0 md:flex-row md:justify-between">
                    <li>
                        <h5 className="text-lg">TERMS & AGREEMENTS</h5>
                    </li>
                    <li>
                        <h5 className="text-lg">@2023 BRANDNAME ALL RIGHT RESERVED</h5>
                    </li>
                    <li>
                        <h5 className="text-lg">PRIVACY & POLICY</h5>
                    </li>
                </ul>
            </div>
        </div>
    );
}
