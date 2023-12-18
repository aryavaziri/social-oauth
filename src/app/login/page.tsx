import Image from "next/image";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function page() {
  const { userId } = auth();
  if (userId) {
    redirect(`/dashboard`);
  }
}
