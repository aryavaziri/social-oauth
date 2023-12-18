import Image from "next/image";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <main className={`text-6xl text-white`}>UPWORK TEST PROJECT FOR AHMAD</main>
  );
}
