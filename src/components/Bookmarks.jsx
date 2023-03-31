import React from "react";
import SingleBookmark from "./SingleBookmark";

export default function Bookmarks({ bookmarks, removeBookmarkHandler }) {
  return (
    <div className="bookmarks border-2 rounded-md md:h-[60vh] max-h-[450px] overflow-y-auto bg-gray-400/30 py-6 px-4">
      <h2 className="font-bold text-2xl mb-6">
        Bookmarked Blogs: {bookmarks.length}
      </h2>
      <div className="flex flex-col gap-y-4">
        {bookmarks.length > 0 ? (
          bookmarks.map((bookmark) => (
            <SingleBookmark
              key={bookmark.id}
              bookmark={bookmark}
              removeBookmarkHandler={removeBookmarkHandler}
            />
          ))
        ) : (
          <p className="text-center text-blue-200">
            Blogs that you bookmark appear here
          </p>
        )}
      </div>
    </div>
  );
}
