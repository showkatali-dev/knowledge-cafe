import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blogs from "./components/Blogs";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <main>
        <Blogs />
      </main>
      <ToastContainer />
    </>
  );
}
