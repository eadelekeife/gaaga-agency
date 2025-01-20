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
                    <div className="grid grid-cols-2 gap-10">
                        <div>
                            <PageTitle title="Blog" />
                            <div className="gap-10 gap-y-24">
                                <div>
                                    <img src={BlogImg2.src} alt="project" className="mb-5 w-full h-full" width={0} height={0} />
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
                                    <img src={BlogImg.src} alt="project" className="mb-5 w-full h-full" width={0} height={0} />
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
                        </div>
                    </div>
                </div>
            </LayoutDisplay>
        </div>
    )
}

export default ProjectPage;