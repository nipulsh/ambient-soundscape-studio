import HomeAudioList from "@/components/HomeAudioList";
import MusicPlayBar from "@/components/MusicPlayBar";
import { ChevronDown } from "lucide-react";

const Page = () => {
  return (
    <div className="relative h-full w-full">
      <MusicPlayBar />
      <div className="py-8 px-12 h-screen">
        {/* Navbar */}
        <nav className="flex items-center justify-between">
          <div>
            <div className="text-white text-[16px]">Sonic Landscape</div>
            <div className="text-[#B9CACB] text-[12px]">
              mixing 4 active layers for "Midnight Rain"
            </div>
          </div>
          <div>
            <div>
              <ul>
                <li>hii</li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="h-[60vh] overflow-auto no-scrollbar mt-8">
          <HomeAudioList />
        </div>
      </div>
    </div>
  );
};
export default Page;
