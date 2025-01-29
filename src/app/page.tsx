import Nav from "@/components/nav";


export default function Home() {
  return (
    <div className="home-hero relative">
      <Nav bgColor={false} />
      <video src="/hero.mp4" autoPlay muted loop />
      {/* <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      </div> */}
    </div>
  );
}
