"use client"
import { usePathname } from "next/navigation"

const TransferPage = () => {
  const path = usePathname()
  return (
    <div className="w-screen h-screen flex p-3">
      <div className="shadow-xl w-full h-full flex items-center justify-center bg-red-200">
        {path}
      </div>
    </div>
  )
}

export default TransferPage