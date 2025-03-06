import Button from "./button";
import { H1 } from "./headings";

export default function About() {
    return (
        <section className="flex flex-col gap-4">
            <H1>About Me</H1>
            <img className="grayscale-100 opacity-50 hover:grayscale-50 rounded-full w-md border-3 border-primary mx-auto" src="/img/Self-small.jpg" alt="" />
            <p></p>
            <Button className="text-2xl mx-auto">See My Portfolio</Button>
        </section>
    )
}