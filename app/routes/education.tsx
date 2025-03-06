import Card from "~/components/card";
import { H1, H2, H3 } from "~/components/headings";
import { timeline } from "~/data/timeline";

export default function Education() {
    const data = timeline
    return (
        <section className="mt-36 mx-8">
            <H2>Education & Work Experience</H2>
            {timeline.map((item) => {
                return (
                    <div key={item.id}>
                        <H3 className="text-left mb-0">{item.title}</H3>
                        <p>{item.place}</p>
                        <p>{item.year}</p>
                        <p>{item.desc}</p>
                    </div>
                );
            })}
        </section>
    );
}