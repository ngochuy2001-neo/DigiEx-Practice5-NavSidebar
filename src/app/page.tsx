"use client"
import { usePathname } from "next/navigation";

export default function Home() {
  const path = usePathname()
  return (
    <div className="w-screen h-screen flex p-3">
      <div className="shadow-xl w-full h-full flex items-center justify-center bg-blue-200">
        {path}
      </div>
    </div>
  )
}
