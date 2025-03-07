import { Link } from "react-router";
import Button from "./button";
import { H1, H2 } from "./headings";

export default function ContactDetails() {
  return (
    <section className="flex flex-col gap-4 p-2">
      <div className="overflow-hidden max-w-screen pb-16 flex md:flex-row flex-col-reverse place-content-around items-center">
        <div>
          <H1 className="md:text-left md:ml-2 text-highlight mb-8 appear">
            André Zacharov
          </H1>

          <ul className="flex flex-col gap-8 place-content-center mt-8 z-30 relative md:ml-16 appear">
            <li>
              <Link to="https://github.com/andrefz-dania" className="flex flex-row items-center gap-2">
                <img
                  className="h-8 rounded-full"
                  src="/icons/github-bw.png"
                  alt="GitHub"
                />
                <p className="text-lg font-bold">GitHub</p>
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/in/andr%C3%A9-zacharov-0549b5290/" className="flex flex-row items-center gap-2">
                <img
                  className="h-8"
                  src="/icons/ln-bw.svg"
                  alt="LinkedIn"
                />
                <p  className="text-lg font-bold">LinkedIn</p>
              </Link>
            </li>
            <li>
              <Link to="mailto:andre.f.z@protonmail.com" className="flex flex-row items-center gap-2">
                <img
                  className="h-8"
                  src="/icons/mail-round-bw.svg"
                  alt="Email"
                />
                <p className="text-lg font-bold">E-mail: andre.f.z@protonmail.com</p>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex flex-row items-center gap-2">
                <img
                  className="h-8"
                  src="/icons/phone.svg"
                  alt="Email"
                />
                <p className="text-lg font-bold">Phone: +45 29 40 16 77</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="profile w-full aspect-square max-w-md mix-blend-screen brightness-60 scale-150"></div>
      </div>
      
    </section>
  );
}
