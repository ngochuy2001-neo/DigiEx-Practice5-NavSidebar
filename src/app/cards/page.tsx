"use client"

import { usePathname } from "next/navigation";

const Cards = () => {
  const path = usePathname()
  return (
    <div className="w-screen h-screen flex p-3">
      <div className="shadow-xl w-full h-full flex items-center justify-center bg-green-200">
        {path}
      </div>
    </div>
  )
}

export default Cards;