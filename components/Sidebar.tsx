import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const sidebarItems = {
    home: {
      name: "Home",
      link: "/",
    },
    mood: {
      name: "Mood",
      link: "/mood",
    },
  };

  return (
    <div className="text-white rounded-2 py-3 px-3 h-full">
      <div className="shadow-[0px_0px_15px_0px_#00DBE91A] backdrop-blur-xl h-full py-10">
        <div className="flex items-center justify-start ml-4">
          <Image src={"/logo_text.svg"} alt="Logo" width={140} height={50} />
        </div>
        <div className="mt-10 ml-3 ">
          <ul>
            {Object.values(sidebarItems).map((item) => (
              <Link href={item.link} key={item.link}>
                <li className="py-2 px-4 w-full text-[#B9CACB] hover:bg-[#333] cursor-pointer">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
