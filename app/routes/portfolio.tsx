import ProjectCard from "~/components/card";
import { H2 } from "~/components/headings";
import { webProjects } from "~/data/projects";

export default function Portfolio() {
    const data = webProjects; 
    return (
        <section className="mt-36 appear">
            <H2>Web Development Projects</H2>
        <div className="flex flex-row gap-8 mt-8 p-2 overflow-x-auto  max-w-screen no-scrollbar snap-x">
            {webProjects.map((item) => {
                return (
                    <ProjectCard key={item.id} name={item.name} desc={item.desc} link={item.link} code={item.code} img={item.img} tags={item.tags}>
                    </ProjectCard>
                );
            })}
        </div>
        </section>
    );
}