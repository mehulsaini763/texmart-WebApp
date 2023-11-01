"use client";
import { useRouter } from "next/navigation";
import Loading from "./components/Loading";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  });
  return <Loading />;
}
