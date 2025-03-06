import Programs from "~/components/programs";
import type { Route } from "./+types/home";
import Card from "~/components/card";
import Toolkit from "~/components/toolkit";
import About from "~/components/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
    <About></About>
      <div className="flex flex-row gap-8 place-content-center mt-8">
        <Card></Card>
        <Card></Card>
      </div>
        <Toolkit />
    </>
  );
}
