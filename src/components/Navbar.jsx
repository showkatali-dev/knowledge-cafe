import React from "react";

export default function Navbar() {
  return (
    <nav className="shadow-lg bg-gray-800">
      <div className="container flex justify-between gap-x-6 items-center py-4">
        <h2 className="text-4xl max-[425px]:text-3xl sm:text-4xl py-1 font-bold text-gradient cursor-pointer">
          Knowledge Cafe
        </h2>
        <div className="w-12 h-12 flex-shrink-0 rounded-full gradient-border hover:cursor-pointer">
          <img
            src="https://avatars.githubusercontent.com/u/119802653?v=4"
            alt="avatar"
            className="w-full rounded-full"
          />
        </div>
      </div>
    </nav>
  );
}
