import React, { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="container grid grid-cols-1 md:grid-cols-5 gap-12 my-14">
      <div className="grid grid-cols-1 gap-y-14 col-span-3">
        {blogs.map((blog) => (
          <SingleBlog key={blog.id} data={blog} />
        ))}
      </div>
    </section>
  );
}
