import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function SingleBookmark({ bookmark, removeBookmarkHandler }) {
  return (
    <div className="bg-gray-900 p-4 rounded-md flex items-center justify-between gap-6">
      <h2 className="text-gray-100">{bookmark.title}</h2>
      <button onClick={() => removeBookmarkHandler(bookmark.id)}>
        <FontAwesomeIcon icon={faDeleteLeft} />
      </button>
    </div>
  );
}
