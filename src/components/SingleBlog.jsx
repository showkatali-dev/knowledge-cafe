import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function SingleBlog({ data }) {
  //destructuring blog data
  const { id, author_name, blog_title, cover, avatar, reading_time, date } =
    data;

  return (
    <div className="w-full flex flex-col gap-y-4 border-b-2 pb-8 overflow-hidden">
      <img src={cover} alt="" className="w-full rounded-md" />
      <div className="mt-8 flex justify-between items-center">
        <div className="flex justify-start items-center gap-6">
          <div className="w-12 h-12 gradient-border rounded-full">
            <img
              src={avatar}
              alt={author_name}
              className="w-full rounded-full"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold">{author_name}</h2>
            <h4 className="text-gray-700/60 font-medium">{date}</h4>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <h4 className="text-lg text-gray-700/80">
            {reading_time.toString().length > 1
              ? reading_time
              : `0${reading_time}`}{" "}
            min read
          </h4>
          <button className="text-gray-700/80 hover:text-gray-700 hover:cursor-pointer">
            <FontAwesomeIcon icon={faBookmark} />
          </button>
        </div>
      </div>
      <h1 className="text-3xl font-bold max-w-[80%]">{blog_title}</h1>

      <button className="text-xl text-[#6047EC] hover:underline self-start">
        Mark as read <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}
