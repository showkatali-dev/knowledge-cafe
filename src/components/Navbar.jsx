import React from "react";

export default function Navbar() {
  return (
    <nav className="shadow-md">
      <div className="container flex justify-between items-center py-2">
        <h2 className="text-3xl font-bold">Knowledge Cafe</h2>
        <div className="w-12 h-12 rounded-full gradient-border hover:cursor-pointer">
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
