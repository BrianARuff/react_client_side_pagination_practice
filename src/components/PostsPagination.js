import React from "react";

export default function PostsPagination({ postIndex, handleSetCurrentPage }) {
  return (
    <button onClick={() => handleSetCurrentPage(postIndex + 1)} className>
      {postIndex + 1}
    </button>
  );
}
