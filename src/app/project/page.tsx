import LayoutDisplay from "@/components/layout";
// import Image from "next/image";

import ProjectImg from "@/assets/images/project-1.png";
import PageTitle from "@/components/page-title";

const ProjectPage = () => {
    return (
        <div>
            <LayoutDisplay>
                <div className="px-20">
                    <PageTitle title="Projects" />
                    <div className="grid grid-cols-2 gap-10 gap-y-24">
                        <div>
                            <img src={ProjectImg.src} alt="project" className="mb-5 w-full h-auto object-cover object-center" width={0} height={0} />
                            <div>
                                <h4 className="mb-2 text-2xl font-bold">How to Do Panning Photography</h4>
                                <p className="mb-5 text-sm leading-loose">Gallery blocks have two settings: the number of columns, and whether or not images should be cropped. The default
                                    number of columns is three, and the maximum number of columns is eight. Below is a three column gallery at full
                                    width, with cropped images.</p>
                                <div className="w-max border-2 border-solid border-accent text-white px-6 py-2">
                                    Read more
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={ProjectImg.src} alt="project" className="mb-5 w-full h-auto object-cover object-center" width={0} height={0} />
                            <div>
                                <h4 className="mb-2 text-2xl font-bold">How to Do Panning Photography</h4>
                                <p className="mb-5 text-sm leading-loose">Gallery blocks have two settings: the number of columns, and whether or not images should be cropped. The default
                                    number of columns is three, and the maximum number of columns is eight. Below is a three column gallery at full
                                    width, with cropped images.</p>
                                <div className="w-max border-2 border-solid border-accent text-white px-6 py-2">
                                    Read more
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={ProjectImg.src} alt="project" className="mb-5 w-full h-auto object-cover object-center" width={0} height={0} />
                            <div>
                                <h4 className="mb-2 text-2xl font-bold">How to Do Panning Photography</h4>
                                <p className="mb-5 text-sm leading-loose">Gallery blocks have two settings: the number of columns, and whether or not images should be cropped. The default
                                    number of columns is three, and the maximum number of columns is eight. Below is a three column gallery at full
                                    width, with cropped images.</p>
                                <div className="w-max border-2 border-solid border-accent text-white px-6 py-2">
                                    Read more
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={ProjectImg.src} alt="project" className="mb-5 w-full h-auto object-cover object-center" width={0} height={0} />
                            <div>
                                <h4 className="mb-2 text-2xl font-bold">How to Do Panning Photography</h4>
                                <p className="mb-5 text-sm leading-loose">Gallery blocks have two settings: the number of columns, and whether or not images should be cropped. The default
                                    number of columns is three, and the maximum number of columns is eight. Below is a three column gallery at full
                                    width, with cropped images.</p>
                                <div className="w-max border-2 border-solid border-accent text-white px-6 py-2">
                                    Read more
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