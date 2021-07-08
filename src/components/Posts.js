import React from "react";
import NextPosts from "./NextPosts";
import PostsPagination from "./PostsPagination";
import PreviousPost from "./PreviousPost";

export default function Posts({
  posts,
  loading,
  handleSetCurrentPageUp,
  handleSetCurrentPageDown,
  handleSetCurrentPage,
}) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <PreviousPost handleSetCurrentPageDown={handleSetCurrentPageDown} />
      {posts.map((_, index) => (
        <PostsPagination
          handleSetCurrentPage={handleSetCurrentPage}
          key={index}
          postIndex={index}
        />
      ))}
      <NextPosts handleSetCurrentPageUp={handleSetCurrentPageUp} />
    </>
  );
}
