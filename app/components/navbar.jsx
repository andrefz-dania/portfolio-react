import { useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="w-full fixed top-4 z-90 flex flex-row place-content-between ">
      <div className="fixed md:relative list-none flex flex-row w-full place-content-between gap-8 text-2xl font-display font-bold mx-auto py-2 max-w-6xl md:shadow-lg md:shadow-black/30 md:bg-linear-to-b from-foreground1 to-foreground2 p-8 rounded-2xl md:border-t-3 md:border-white/5 ">
        <Link to="/" onClick={() => setNavOpen(false)}>
          <img src="logo-filled.svg" className="h-16 md:h-12" alt="" />
        </Link>
        <ul
          className={`visible h-64 md:h-auto w-full items-center rounded-xl bg-black/50 backdrop-blur-md md:backdrop-blur-none md:bg-transparent fixed right-0 top-28 md:top-0 md:right-auto text-right md:text-left md:relative list-none flex flex-col md:flex-row gap-8 text-2xl font-display font-bold mx-auto py-2 max-w-6xl place-content-center transition-all origin-top ${navOpen ? `scale-y-100 opacity-100` : `scale-y-0 opacity-0 md:opacity-100 md:scale-y-100 `}`}
        >

          <li>
            <Link to="/portfolio" onClick={() => setNavOpen(false)}>Portfolio</Link>
          </li>
          <li>
            <Link to="/skills" onClick={() => setNavOpen(false)}>Skills</Link>
          </li>
          <li>
            <Link to="/education" onClick={() => setNavOpen(false)}>Education</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setNavOpen(false)}>Contact</Link>
          </li>
        </ul>
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setNavOpen(!navOpen)}
        >
          <img className="h-16" src="/icons/burger.svg" alt="menu icon" />
        </button>
      </div>
    </nav>
  );
}
