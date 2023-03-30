import React from "react";
import Blogs from "./components/Blogs";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Blogs />
      </main>
    </>
  );
}
