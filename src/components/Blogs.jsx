import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Bookmarks from "./Bookmarks";
import ReadTime from "./ReadTime";
import SingleBlog from "./SingleBlog";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [reading_time, setReadingTime] = useState(0);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error(err));
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
      notify("Sorry! You have already bookmarked this blog");
    }
  };

  const removeBookmarkHandler = (id) => {
    const newBookmarks = bookmarks.filter((item) => item.id !== id);
    setBookmarks(newBookmarks);
  };

  return (
    <section className="container grid grid-cols-1 md:grid-cols-5 gap-12 my-14">
      <div className="grid grid-cols-1 gap-y-12 md:col-span-3">
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
    </section>
  );
}
