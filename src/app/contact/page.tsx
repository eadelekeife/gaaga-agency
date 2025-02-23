import Footer from "@/components/footer";
import Nav from "@/components/nav";
import React from "react";
import ArrowStyled from "@/assets/images/icons/arrow-styled-black.svg";
import CircleImg from "@/assets/images/circle.svg";

import ContactUsForm from "@/components/contact/form";
import Image from "next/image";

const ContactUs = () => {

    return (
        <div className="bg-white">
            <Nav />
            <div className="px-32 pt-28">
                <div className="flex flex-col items-center md:grid grid-cols-2 gap-20 mt-30">
                    <div>
                        <div className="flex items-center gap-6 mb-10">
                            <h2 className="text-5xl md:text-7xl text-black">LET&apos;S</h2>
                            <div>
                                <Image width={0} height={0} src={CircleImg} alt="circle" />
                            </div>
                        </div>
                        <div className="flex items-end pl-3 mb-10">
                            <div>
                                <Image width={0} height={0} src={ArrowStyled} alt="styled arrow" />
                            </div>
                            <div>
                                <h2 className="text-5xl md:text-7xl text-black">GET IN</h2>
                            </div>
                        </div>
                        <div className="flex">
                            <div>
                                <h2 className="text-5xl md:text-7xl text-black">TOUCH</h2>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <p className="text-black leading-loose">Let’s discuss how we can elevate your brand to new heights. Reach out to us and start your journey towards
                                transformative branding and marketing success.</p>
                        </div>
                    </div>
                    <div>
                        <ContactUsForm />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactUs;