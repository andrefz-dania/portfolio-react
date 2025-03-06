import Card from "~/components/card";
import { H1, H2, H3 } from "~/components/headings";
import { timeline } from "~/data/timeline";

export default function Education() {
    const data = timeline
    return (
        <section className="mt-36 mx-8 appear">
            <H2>Education & Work Experience</H2>
            <div className="mx-auto max-w-xl mt-8">

            
            <ul className="flex flex-col gap-8 border-l-3 border-highlight">
            {timeline.map((item) => {
                return (
                    <li key={item.id} className="ml-7.5 relative before:absolute before:-translate-x-12 before:content-[''] before:h-8 before:w-8 before:rounded-full before:border-highlight before:border-3 before:bg-foreground1">
                        <H3 className="text-left mb-0 text-highlight">{item.title}</H3>
                        <p className="font-bold">{item.year} - {item.place}</p>
                        <p>{item.desc}</p>
                    </li>
                );
            })}
            </ul>
            </div>
        </section>
    );
}