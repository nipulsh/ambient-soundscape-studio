import VoiceLayersContainer from "@/components/VoiceLayersContainer";
import Sidebar from "@/components/Sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid h-screen w-screen grid-cols-[15%_1fr_20%] bg-black">
      <div className="border-r border-white/10">
        <Sidebar />
      </div>

      <main className="relative h-screen">{children}</main>

      <div className="border-l border-white/10">
        <VoiceLayersContainer />
      </div>
    </div>
  );
};

export default Layout;
