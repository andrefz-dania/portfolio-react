import Profile from "~/components/about";
import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "André Zacharov | Home" },
    { name: "description", content: "Web Developer portfolio page for André" },
  ];
}

export default function Home() {
  return (
<Profile></Profile>
  );
}
