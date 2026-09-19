import { createFileRoute } from "@tanstack/react-router";
import { AbejitaApp } from "@/components/abejita-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <AbejitaApp />;
}
