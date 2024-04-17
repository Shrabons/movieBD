"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  return (
    <div className="flex justify-center items-center h-screen">
      <h2 className="text-3xl text-yellow-500">
        {" "}
        This movie with {pathname} id was not found!{" "}
      </h2>
    </div>
  );
}
