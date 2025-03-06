import ProjectCard from "~/components/card";
import { H2 } from "~/components/headings";
import { webProjects } from "~/data/projects";

export default function Portfolio() {
    const data = webProjects; 
    return (
        <section className="mt-36 mx-8">
            <H2>Web Development Projects</H2>
        <div className="flex flex-row gap-8 place-content-center mt-8 p-2 overflow-hidden max-w-screen">
            {webProjects.map((item) => {
                return (
                    <ProjectCard key={item.id} name={item.name} desc={item.desc} link={item.link} code={item.code} img={item.img}>
                    </ProjectCard>
                );
            })}
        </div>
        </section>
    );
}