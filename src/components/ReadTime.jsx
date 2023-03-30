import React from "react";

export default function ReadTime({ reading_time }) {
  return (
    <div className="border-2 rounded-md bg-gray-400/30 px-8 py-4">
      <h1 className="text-3xl text-center font-bold text-purple-500">
        Spent time on read: {reading_time} min
      </h1>
    </div>
  );
}
