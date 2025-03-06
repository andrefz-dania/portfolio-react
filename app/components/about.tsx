import { Link } from "react-router";
import Button from "./button";
import { H1, H2 } from "./headings";

export default function Profile() {
  return (
    <section className="flex flex-col gap-4 p-2">
      <div className="overflow-hidden max-w-screen pb-16 flex md:flex-row flex-col-reverse place-content-around items-center">
        <div>
          <H1 className="md:text-left md:ml-2 text-highlight mb-8 appear">
            André Zacharov
          </H1>
          <ul className="text-highlight opacity-60 md:text-left text-center text-2xl appear">
            <li className="md:translate-x-8">Full-stack Web Developer</li>
            <li className="md:translate-x-16">UI & UX Designer</li>
            <li className="md:translate-x-24">2D & 3D Digital Artist</li>
          </ul>

          <ul className="flex flex-row gap-4 place-content-center md:translate-y-16 mt-8 z-30 relative appear">
            <li>
              <Link to="https://github.com/andrefz-dania">
                <img
                  className="h-12 opacity-40 hover:opacity-90 transition-all hover:scale-110 rounded-full"
                  src="/icons/github-bw.png"
                  alt="GitHub"
                />
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/in/andr%C3%A9-zacharov-0549b5290/">
                <img
                  className="h-12 opacity-40 hover:opacity-90 transition-all hover:scale-110"
                  src="/icons/ln-bw.svg"
                  alt="LinkedIn"
                />
              </Link>
            </li>
            <li>
              <Link to="mailto:andre.f.z@protonmai.com">
                <img
                  className="h-12 opacity-40 hover:opacity-90 transition-all hover:scale-110"
                  src="/icons/mail-round-bw.svg"
                  alt="Email"
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="profile w-full aspect-square max-w-xl mix-blend-screen brightness-60 hover:brightness-80 transition-all duration-1000 scale-150"></div>
      </div>
      <div className="flex flex-col 9shadow-black/30 gap-4 bg-linear-to-b mx-auto w-fit from-foreground1 to-foreground2 p-8 rounded-2xl border-t-3 border-white/5 appear">
      <p className="max-w-2xl mx-auto text-center">
        I'm André - Currently a student of Web Development in Aarhus, Denmark.
      </p>
      <p className="max-w-2xl mx-auto text-center">
        I enjoy bringing together my experience as an artist and designer, as well as the technical knowledge to build functional web applications.
      </p>
      <Link to="/portfolio" className="mx-auto">
        <Button className="text-2xl mt-8">See My Portfolio</Button>
      </Link>
      </div>
      
    </section>
  );
}
