import Toolkit from "~/components/toolkit";
import type { Route } from "./+types/skills";

export function meta({}: Route.MetaArgs) {
    return [
      { title: "André Zacharov | Portfolio" },
      { name: "description", content: "Web Developer portfolio page for André" },
    ];
  }

export default function Skills() {
    return (
        <Toolkit />
    );
}