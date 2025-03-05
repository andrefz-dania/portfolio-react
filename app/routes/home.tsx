import type { Route } from "./+types/home";
import Card from "~/components/card";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-row gap-8 place-content-center mt-8">
    <Card></Card>
  
    <Card></Card>
    </div>
  );
}
