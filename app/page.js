"use client";
import { useRouter } from "next/navigation";
import Loading from "./components/Loading";

export default function Home() {
  const router = useRouter();
  router.push("/home");
  return <Loading />;
}
