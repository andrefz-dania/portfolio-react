import type { Route } from "./+types/home";
import ContactDetails from "~/components/contactdetails";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "André Zacharov | Contact" },
    { name: "description", content: "Web Developer portfolio page for André" },
  ];
}

export default function Home() {
  return (
    <ContactDetails />
  );
}
