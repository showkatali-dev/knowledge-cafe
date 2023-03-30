import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function SingleBlog({ data, handler }) {
  //destructuring blog data
  const { id, author_name, blog_title, cover, avatar, reading_time, date } =
    data;
  const { markAsReadHandler, bookmarkHandler } = handler;

  return (
    <div className="blog w-full flex flex-col gap-y-4 pb-12 border-b-2 overflow-hidden">
      <img src={cover} alt="" className="w-full rounded-md" />
      <div className="mt-8 flex justify-between gap-x-4 items-center">
        <div className="flex justify-start items-center gap-4 sm:gap-6">
          <div className="w-12 h-12 flex-shrink-0 gradient-border rounded-full">
            <img
              src={avatar}
              alt={author_name}
              className="w-full rounded-full"
            />
          </div>
          <div>
            <h2 className="text-xl max-[425px]:text-lg font-bold">
              {author_name}
            </h2>
            <h4 className="text-gray-100/60 font-medium">{date}</h4>
          </div>
        </div>
        <div className="flex max-[425px]:flex-col items-center gap-4">
          <h4 className="text-lg text-gray-100/80">
            {reading_time.toString().length > 1
              ? reading_time
              : `0${reading_time}`}{" "}
            min read
          </h4>
          <button
            onClick={() => bookmarkHandler(id, blog_title)}
            className="text-gray-100/80 hover:text-gray-100 hover:cursor-pointer"
          >
            <FontAwesomeIcon icon={faBookmark} />
          </button>
        </div>
      </div>
      <h1 className="text-3xl max-[425px]:text-2xl font-bold max-w-[80%]">
        {blog_title}
      </h1>

      <button
        onClick={() => markAsReadHandler(reading_time)}
        className="text-xl text-gradient self-start"
      >
        Mark as read{" "}
        <FontAwesomeIcon
          className="text-purple-400 align-middle"
          icon={faArrowRight}
        />
      </button>
    </div>
  );
}
