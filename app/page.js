"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <h1>Home Page</h1>
      <button
        className="bg-green-600 px-4 py-2"
        onClick={() => router.push("/about")}
      >
        go to about
      </button>
    </>
  );
}
