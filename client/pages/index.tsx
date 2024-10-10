import { BsBell, BsBookmark, BsEnvelope, BsTwitterX } from "react-icons/bs";
import React from "react";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import FeedCard from "@/components/FeedCard";
import { SlOptions } from "react-icons/sl";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: 'Home',
    icon: <BiHomeCircle />,
  },
  {
    title: 'Explore',
    icon: <BiHash />,
  },
  {
    title: 'Notifications',
    icon: <BsBell />,
  },
  {
    title: 'Messages',
    icon: <BsEnvelope />,
  },
  {
    title: 'Bookmarks',
    icon: <BsBookmark />,
  },
  {
    title: 'Twitter Blue',
    icon: <BiMoney />,
  },
  {
    title: 'Profile',
    icon: <BiUser />,
  },
  {
    title: 'More Options',
    icon: <SlOptions />,
  }
]

export default function Home() {
  return (
    <div>
      {/* Main Section */}
      <div className="grid grid-cols-12 h-screen px-32">
        {/* Sidebar */}
        <div className="col-span-3">
          <div className="text-2xl h-fit w-fit hover:bg-[#181919] rounded-full p-4 cursor-pointer transition-all ">
            <BsTwitterX />
          </div>
          <div className="mt-1 text-xl pr-4">
            <ul>
              {sidebarMenuItems.map(item => (
                <li key={item.title} className="flex justify-start items-center gap-4 hover:bg-[#181919] rounded-full px-3 py-3 w-fit cursor-pointer">
                  <span className="text-3xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3">
              <button className="bg-[#1a8cd8] rounded-full font-semibold w-full py-2 px-2 text-lg">Post</button>
            </div>
          </div>
        </div>
        {/* FeedCard */}
        <div className="col-span-5 border-r-[1px] border-l-[1px] border-[#2f3336] h-screen overflow-y-scroll no-scrollbar">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
