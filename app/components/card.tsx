import { Link } from "react-router";
import Button from "./button";
import { H3 } from "./headings";

export default function ProjectCard({
  name,
  desc,
  link,
  code,
  img,
  tags,
}: {
  name: string;
  desc: string;
  link?: string;
  code?: string;
  img?: string;
  tags: string[];
}) {
  return (
    <div className="flex flex-col snap-center grow basis-0 min-w-68 place-content-between shadow-lg shadow-black/30 gap-4 max-w-sm text-white bg-linear-to-b from-foreground1 to-foreground2 p-8 rounded-2xl border-t-3 border-white/5 hover:scale-[1.01] transition-all">
      <div className="flex flex-col gap-4">
        <H3 className="m-0 p-0">{name}</H3>
      <img className="rounded-xl" src={img ? img : "placeholder.jpg"} alt="" />
      { tags &&
            <ul className="flex flex-row gap-2 flex-wrap">
            {tags.map((tag) => {
              return (
                <li key={tag} className="bg-primary/25 rounded-full py-1 px-2">
                  <p className="text-sm">{tag}</p>
                </li>
              );
            })}
          </ul>
      }

      <p>{desc}</p>
      </div>
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
