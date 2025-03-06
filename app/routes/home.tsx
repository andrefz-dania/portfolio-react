import Profile from "~/components/about";
import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "André Zacharov | Portfolio" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
<Profile></Profile>
  );
}
