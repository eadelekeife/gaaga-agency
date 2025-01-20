'use client';

// import "./contact.css";

import React, { useState } from "react";

import ArrowRight from "@/assets/images/icons/arrow-right-white.svg";
import Image from "next/image";

// import axios from "axios";

// import { LoadingOutlined, CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
// import { notification, Spin } from "antd";

interface contactFormInterface {
    brandName: string,
    email: string,
    portfolio: string,
    ig: string, facebook: string, twitter: string, snapchat: string
}

const ContactUsForm = () => {

    // const [sendingMail, setSendingMail] = useState(false);
    const [contactFormData, setContactFormData] = useState<contactFormInterface>({
        brandName: "",
        email: "",
        portfolio: "",
        ig: "",
        facebook: "",
        twitter: "",
        snapchat: ""
    });


    // const openNotification = (title: string, message: string) => {
    //     notification.open({
    //         message: title,
    //         description: message,
    //         icon: title === "error" ? <CloseCircleOutlined style={{ color: "red" }} /> : <CheckCircleOutlined style={{ color: "green" }} />
    //     });
    // };
    // const sendMail = async (e: any) => {
    //     e.preventDefault();
    //     let { email, brandName, portfolio } = contactFormData;
    //     if (email.length && brandName.length && portfolio.length) {
    //         setSendingMail(true);
    //         let mailReq = {
    //             email: contactFormData.email,
    //             brandName: contactFormData.brandName,
    //             portfolio: contactFormData.portfolio,
    //             ig: contactFormData.ig,
    //             facebook: contactFormData.facebook,
    //             twitter: contactFormData.twitter,
    //             snapchat: contactFormData.snapchat,
    //         }
    //         try {
    //             let handleMail = await axios.post("/api/brand", JSON.stringify(mailReq), {
    //                 headers: {
    //                     "Content-Type": "application/json"
    //                 }
    //             });
    //             console.log(handleMail);
    //             if (handleMail) {
    //                 setContactFormData({
    //                     brandName: "",
    //                     email: "",
    //                     portfolio: "",
    //                     ig: "",
    //                     facebook: "",
    //                     twitter: "",
    //                     snapchat: ""
    //                 })
    //                 openNotification("success", "Mail sent successfully");
    //             } else {
    //                 openNotification("error", "An error occurred while sending data. Please try again.");
    //             }
    //             setSendingMail(false);
    //         } catch (err) {
    //             setSendingMail(false);
    //             openNotification("error", "An error occurred while sending data. Please try again.");
    //         }
    //     } else {
    //         console.log("still here")
    //         openNotification("error", "Please fill all fields.");
    //     }
    // }
    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContactFormData({
            ...contactFormData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="">
            <div>
                <div className="small">
                    <form action="">
                        <div className="form-group mb-5">
                            <label className="block text-black" htmlFor="brandName">Name</label>
                            <input type="text" className="bg-transparent py-5 tdxt-black border-0 border-b-s w-[100%] border-b border-[#CFCFCF]" id="name" value={contactFormData.brandName} name="brandName" onChange={handleFormChange} />
                        </div>
                        <div className="form-group mb-5">
                            <label className="block text-black" htmlFor="email">Brand</label>
                            <input type="text" className="bg-transparent py-5 tdxt-black border-0 border-b-s w-[100%] border-b border-[#CFCFCF]" id="brand" value={contactFormData.email} name="email" onChange={handleFormChange} />
                        </div>
                        <div className="form-group">
                            <label className="block text-black" htmlFor="portfolio">Email</label>
                            <input type="text" className="bg-transparent py-5 tdxt-black border-0 border-b-s w-[100%] border-b border-[#CFCFCF]" id="portfolio" value={contactFormData.portfolio} name="portfolio" onChange={handleFormChange} />
                        </div>
                        <div className="flex justify-between">
                            <div></div>
                            <button className="flex border-2 border-black text-black items-center gap-3 py-3 px-8 block w-max mt-7">Send
                                <div className="bg-black w-8 h-8 flex items-center justify-center rounded-full"><Image width={0} height={0} src={ArrowRight} alt="arrow right" /></div></button>
                            {/* {
                                sendingMail ?
                                    <button disabled className="flex border border-black items-center gap-3 py-4 px-7 block w-max rounded-full mt-7">Sending
                                        <div className="bg-black w-10 h-10 flex items-center justify-center rounded-full"><Spin indicator={<LoadingOutlined spin style={{ color: "#fff" }} />} /></div></button>
                                    :
                                    <button className="flex border border-black items-center gap-3 py-4 px-7 block w-max rounded-full mt-7">Send
                                        <div className="bg-black w-10 h-10 flex items-center justify-center rounded-full"><Image width={0} height={0} src={ArrowRight} alt="arrow right" /></div></button>
                            } */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUsForm;