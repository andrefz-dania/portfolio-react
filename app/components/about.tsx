import { Link } from "react-router";
import Button from "./button";
import { H1, H2 } from "./headings";

export default function About() {
  return (
    <section className="flex flex-col gap-4 p-2">
      <div className="overflow-hidden max-w-screen pb-16 flex md:flex-row flex-col-reverse place-content-around items-center">
        <div>
            <H1 className="md:text-left md:ml-2 text-highlight">André Zacharov</H1>
            <ul className="text-highlight opacity-60 md:text-left text-center text-2xl">
                <li className="md:translate-x-8">Full-stack Web Developer</li>
                <li className="md:translate-x-16">UI & UX Designer</li>
                <li className="md:translate-x-24">2D & 3D Digital Artist</li>
            </ul>

            <ul className="flex flex-row gap-4 place-content-center md:translate-y-16 mt-8 z-30 relative">
                <li><Link to="/"><img className="h-12 opacity-40 hover:opacity-90 transition-all hover:scale-110" src="/icons/github-bw.png" alt="GitHub" /></Link></li>
                <li><Link to="/"><img className="h-12 opacity-40 hover:opacity-90 transition-all hover:scale-110" src="/icons/ln-bw.svg" alt="LinkedIn" /></Link></li>
                <li><Link to="/"><img className="h-12 opacity-40 hover:opacity-90 transition-all hover:scale-110" src="/icons/mail-round-bw.svg" alt="Email" /></Link></li>

            </ul>
        </div>
        <div className="profile w-full aspect-square max-w-xl mix-blend-screen brightness-60 hover:brightness-80 transition-all duration-1000 scale-150"></div>
      </div>
      {/* <img className="mix-blend-screen brightness-60 hover:brightness-100" src="/img/self-filtered-crop.png" alt="" /> */}
      <p className="max-w-2xl mx-auto text-center">
        I'm André - Currently a student of Multimedia Design, and a long-time
        enthusiast in all things digital. I like to tinker with a variety of
        electronics and creative tools, and like to build or customize
        everything I use. I designed and built this website, my desktop PC, and
        even an LED light fixture, and have worked on a variety of digital art
        and level design projects.
      </p>
      <Button className="text-2xl mx-auto">See My Portfolio</Button>
    </section>
  );
}
