import type { Route } from "./+types/_index";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Alfabit Demo" }, { name: "description", content: "" }];
}

export default function Home() {
  return <Welcome />;
}
