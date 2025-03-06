import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav className="w-full fixed top-4 ">
            <ul className="list-none flex flex-row gap-4 text-3xl font-display font-bold mx-auto max-w-6xl place-content-center ">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/skills">Skills</Link></li>
            </ul>
        </nav>
    )
}