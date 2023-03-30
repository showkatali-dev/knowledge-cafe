import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Bookmarks from "./Bookmarks";
import ReadTime from "./ReadTime";
import SingleBlog from "./SingleBlog";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [reading_time, setReadingTime] = useState(0);
  const [bookmarks, setBookmarks] = useState([]);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) setShowTopBtn(true);
      else setShowTopBtn(false);
    });
  }, []);

  const notify = (notification) =>
    toast.error(notification, {
      position: toast.POSITION.TOP_CENTER,
      theme: "dark",
      autoClose: 3000,
    });

  const markAsReadHandler = (time) => {
    setReadingTime((prev) => prev + time);
  };

  const bookmarkHandler = (id, title) => {
    if (bookmarks.map((item) => item.id).includes(id) === false) {
      setBookmarks((prev) => [...prev, { id, title }]);
    } else {
      notify("You have already bookmarked this blog!");
    }
  };

  const removeBookmarkHandler = (id) => {
    const newBookmarks = bookmarks.filter((item) => item.id !== id);
    setBookmarks(newBookmarks);
  };

  return (
    <section className="container grid grid-cols-1 md:grid-cols-5 gap-12 my-14">
      <div className="grid grid-cols-1 gap-y-16 md:col-span-3">
        {blogs.map((blog) => (
          <SingleBlog
            key={blog.id}
            data={blog}
            handler={{ markAsReadHandler, bookmarkHandler }}
          />
        ))}
      </div>
      <div className="md:col-span-2">
        <div className="md:sticky md:top-24 flex flex-col gap-y-6">
          <ReadTime reading_time={reading_time} />
          <Bookmarks
            bookmarks={bookmarks}
            removeBookmarkHandler={removeBookmarkHandler}
          />
        </div>
      </div>
      {showTopBtn && (
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="fixed z-40 bottom-6 right-6 text-xl w-12 h-12 rounded-full bg-gradient-to-tr from-red-400/30 to-purple-400/30 hover:from-red-400 hover:to-purple-400"
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      )}
    </section>
  );
}
