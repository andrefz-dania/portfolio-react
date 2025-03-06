import Profile from "~/components/about";
import type { Route } from "./+types/home";
import ContactDetails from "~/components/contactdetails";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <ContactDetails />
  );
}
