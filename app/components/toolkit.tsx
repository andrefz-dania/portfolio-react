import { codePrograms, designPrograms } from "~/data/programs";
import Programs from "./programs";
import { H2, H3 } from "./headings";

export default function Toolkit() {
    const codeList = codePrograms;
    const designList = designPrograms;

    return (
        <section className="p-2 flex-col flex gap-4 mt-36 appear">
            <H2 className="mb-8">My Toolkit</H2>
            <H3>Coding & Web Development</H3>
            <Programs itemList={codeList}></Programs>
            <H3>Design & Animation</H3>
            <Programs itemList={designList}></Programs>
        </section>
    )
}