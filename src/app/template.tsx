"use client"
import NavSideBar from "@/components/NavSidebar";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen flex">
      <NavSideBar />
      {children}
    </div>
  )
}