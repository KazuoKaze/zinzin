import {
  Book,
  ChevronDown,
  Footprints,
  Headset,
  MapPin,
  Mic,
  Plus,
  RockingChair,
  Search,
  Shapes,
  Shirt,
  TabletSmartphone,
  TvMinimal,
} from "lucide-react";
import React from "react";

const category = [
  {
    icon: <TabletSmartphone />,
    color: "#fbeedb",
    title: "Mobiles",
  },
  {
    icon: <Shirt />,
    color: "#e0f0fa",
    title: "Fashion",
  },
  {
    icon: <Headset />,
    color: "#fceae7",
    title: "Electronics",
  },
  {
    icon: <TvMinimal />,
    color: "#eaf6dd",
    title: "TV's Appliances",
  },
  {
    icon: <Shapes />,
    color: "#dceaff",
    title: "Beauty, Toys & More",
  },
  {
    icon: <Footprints />,
    color: "#fceae7",
    title: "Foot Wear",
  },
  {
    icon: <RockingChair />,
    color: "#fbf1d9",
    title: "Home & Furniture",
  },
  {
    icon: <Book />,
    color: "#fae8e6",
    title: "Books",
  },
];

const page = () => {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-between">
      {/* NAVBAR */}
      <div className="px-10 lg:px-16 py-8 lg:py-10">
        <nav className="flex items-center justify-between">
          <div className="font-bold">LOGO</div>
          <div className="flex items-center justify-center gap-3">
            {/* LOCATION */}
            <div className="flex items-center justify-center gap-2 bg-gray-100 p-2 rounded-lg">
              <MapPin className="text-sm" />
              <div className="leading-tight text-xs">
                <p className="text-gray-500">Deliver to Mathew</p>
                <p className="font-bold">Gurugram 122001</p>
              </div>
              <ChevronDown />
            </div>
            {/* ADD A STORE */}
            <div className="h-full bg-[#ea8a10] p-3 text-white rounded-lg cursor-pointer">
              <Plus className="md:hidden" />
              <p className="hidden md:block">Add a Store</p>
            </div>
          </div>
        </nav>
      </div>

      {/* CONTENT */}
      <div className=" flex flex-col items-center justify-center gap-12 md:14 lg:16 xl:18 px-10 lg:px-16">
        {/* TITLE */}
        <div className="text-center text-6xl md:text-7xl lg:text-8xl">
          <h1>Zinzira</h1>
          <h1 className="text-[#ea8a10]">search</h1>
        </div>
        {/* SEARCH */}
        <div className="ring ring-gray-300 flex gap-2 p-4 rounded-2xl w-full md:w-xl">
          <Search />
          <input
            className="outline-none w-full"
            type="search"
            name=""
            id=""
            placeholder="Search Products"
          />
          <Mic />
        </div>
        {/* CARD TITLES */}
        <div className="flex w-full justify-center">
          <div className="grid grid-cols-4 gap-8 xl:gap-4 md:px-16">
            {category.map((items) => (
              <div
                key={items.title}
                className="flex flex-col items-center space-y-2"
              >
                <div
                  style={{ backgroundColor: items.color }}
                  className="w-[70px] h-[70px] rounded-2xl flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
                >
                  {items.icon}
                </div>
                <h2 className="text-sm text-center leading-tight">
                  {items.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="px-10 lg:px-16 py-8 lg:py-10">
        <nav className="flex items-center justify-center lg:justify-between text-center">
          <div className="text-xs md:text-base">&copy; 2025 Zinzira. All rights reserved.</div>
          <div className="hidden lg:flex gap-4">
            <a className="underline" href="http://" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            <a className="underline" href="http://" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default page;
