import { Link } from "react-router";
import Button from "./button";
import { H3 } from "./headings";

export default function ProjectCard({
  name,
  desc,
  link,
  code,
  img,
}: {
  name: string;
  desc: string;
  link?: string;
  code?: string;
  img?: string;
}) {
  return (
    <div className="flex flex-col shadow-lg shadow-black/30 gap-4 max-w-sm text-white bg-linear-to-b from-foreground1 to-foreground2 p-8 rounded-2xl border-t-3 border-white/5 hover:scale-[1.01] transition-all">
      <H3 className="m-0 p-0">{name}</H3>
      <img className="rounded-2xl" src={img ? img : "placeholder.jpg"} alt="" />
      <p>{desc}</p>
      <div className="flex flex-row gap-4 place-items-around mx-auto mt-4">
        {link && (
          <Link to={link} target="_blank">
            <Button>Website</Button>
          </Link>
        )}

        {code && (
          <Link to={code} target="_blank">
            <Button style="outline">GitHub</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
