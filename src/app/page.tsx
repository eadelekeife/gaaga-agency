import Nav from "@/components/nav";

export default function Home() {
  return (
    <div className="home-hero relative">
      <Nav />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
        {/* <img src={HeroImg.src} alt="hero" width={0} height={0} className="w-full h-auto" /> */}
      </div>
    </div>
  );
}
