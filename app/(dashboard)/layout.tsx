import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen w-full">
      <Navbar />
      <div className="w-full">{children}</div>
    </div>
  );
}
