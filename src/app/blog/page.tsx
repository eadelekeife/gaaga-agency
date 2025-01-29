import LayoutDisplay from "@/components/layout";
// import Image from "next/image";

import BlogImg from "@/assets/images/blog/blog_1.png";
import BlogImg2 from "@/assets/images/blog/blog_2.png";
import PageTitle from "@/components/page-title";

const ProjectPage = () => {
    return (
        <div>
            <LayoutDisplay>
                <div className="px-20">
                    <PageTitle title="Blog" />
                    <div className="grid grid-cols-1.5/1 gap-32">
                        <div>
                            <div className="gap-10 gap-y-24">
                                <div>
                                    <img src={BlogImg2.src} alt="project" className="mb-5 w-full object-cover max-h-[438px]" width={0} height={0} />
                                    <div>
                                        <h6 className="font-singolare font-black mb-5"><span className="text-[#FD532F]">Guides / </span><span className="text-[#878787]">November 3, 2024</span></h6>
                                        <h4 className="font-singolare mb-5 text-3xl font-bold">How to Do Panning Photography</h4>
                                        <p className="mb-5 text-sm leading-loose w-[90%]">Gallery blocks have two settings: the number of columns, and whether or not images should be cropped. The default
                                            number of columns is three, and the maximum number of columns is eight. Below is a three column gallery at full
                                            width, with cropped images.</p>
                                        <div className="w-max border-2 border-solid border-accent text-white px-8 py-3 text-sm">
                                            Read more
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-15">
                                    <img src={BlogImg.src} alt="project" className="mb-5 w-full object-cover max-h-[438px]" width={0} height={0} />
                                    <div>
                                        <h6 className="font-singolare font-black mb-5"><span className="text-[#FD532F]">Guides / </span><span className="text-[#878787]">November 3, 2024</span></h6>
                                        <h4 className="font-singolare mb-5 text-3xl font-bold">How to Do Panning Photography</h4>
                                        <p className="mb-5 text-sm leading-loose w-[90%]">Gallery blocks have two settings: the number of columns, and whether or not images should be cropped. The default
                                            number of columns is three, and the maximum number of columns is eight. Below is a three column gallery at full
                                            width, with cropped images.</p>
                                        <div className="w-max border-2 border-solid border-accent text-white px-8 py-3 text-sm">
                                            Read more
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="pt-20">
                                <div className="mb-8">
                                    <div className="mb-6">
                                        <h4 className="pb-2 text-white font-singolare text-xl">Search</h4>
                                        <div className="h-[6px] rounded-full bg-accent w-[10%]"></div>
                                    </div>
                                    <div className="border-2 border-solid border-white opacity-20 py-8 rounded-lg"></div>
                                </div>
                                <div className="mb-8">
                                    <div className="mb-6">
                                        <h4 className="pb-2 text-white font-singolare text-xl">Categories</h4>
                                        <div className="h-[6px] rounded-full bg-accent w-[10%]"></div>
                                    </div>
                                    <ul className="flex flex-col gap-3">
                                        <li className="text-white opacity-50">Category 1</li>
                                        <li className="text-white opacity-50">Category 2</li>
                                        <li className="text-white opacity-50">Category 3</li>
                                        <li className="text-white opacity-50">Category 4</li>
                                    </ul>
                                </div>
                                <div className="mb-8">
                                    <div className="mb-6">
                                        <h4 className="pb-2 text-white font-singolare text-xl">Recent Posts</h4>
                                        <div className="h-[6px] rounded-full bg-accent w-[10%]"></div>
                                    </div>
                                    <ul className="flex flex-col gap-3">
                                        <li className="text-white">3 Ways To Level Up Your Photography Skills of Wildlife</li>
                                        <li className="text-white">3 Ways To Level Up Your Photography Skills of Wildlife</li>
                                        <li className="text-white">3 Ways To Level Up Your Photography Skills of Wildlife</li>
                                        <li className="text-white">3 Ways To Level Up Your Photography Skills of Wildlife</li>
                                    </ul>
                                </div>
                                <div className="mb-8">
                                    <div className="mb-6">
                                        <h4 className="pb-2 text-white font-singolare text-xl">Tag Cloud</h4>
                                        <div className="h-[6px] rounded-full bg-accent w-[10%]"></div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex gap-3">
                                            <div className="border border-solid border-accent w-max py-2 px-3">
                                                <p className="text-white text-sm">Music</p>
                                            </div>
                                            <div className="border border-solid border-accent w-max py-2 px-3">
                                                <p className="text-white text-sm">Art</p>
                                            </div>
                                            <div className="border border-solid border-accent w-max py-2 px-3">
                                                <p className="text-white text-sm">Fashion</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="border border-solid border-accent w-max py-2 px-3">
                                                <p className="text-white text-sm">Music</p>
                                            </div>
                                            <div className="border border-solid border-accent w-max py-2 px-3">
                                                <p className="text-white text-sm">Art</p>
                                            </div>
                                            <div className="border border-solid border-accent w-max py-2 px-3">
                                                <p className="text-white text-sm">Fashion</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="border border-solid border-accent w-max py-2 px-3">
                                                <p className="text-white text-sm">Music</p>
                                            </div>
                                            <div className="border border-solid border-accent w-max py-2 px-3">
                                                <p className="text-white text-sm">Art</p>
                                            </div>
                                            <div className="border border-solid border-accent w-max py-2 px-3">
                                                <p className="text-white text-sm">Fashion</p>
                                            </div>
                                        </div>
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

export default ProjectPage;