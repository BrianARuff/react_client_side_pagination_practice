import axios from "axios";
import React, { useState, useEffect } from "react";
import Posts from "./components/Posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const fetchPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const { data = [] } = response;

    setLoading(true);
    setPosts(() => data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage; // 1 * 10 = 10, 2 * 10 = 20 (posts)
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // 10 - 10 = 0, 20 - 10 = 10 (10th post)
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] => [1,2,3,4,5,6,7,8,9,10]

  const handleSetCurrentPageDown = () =>
    currentPage > 1 && currentPage <= 10
      ? setCurrentPage(() => currentPage - 1)
      : null;
  const handleSetCurrentPageUp = () =>
    currentPage < 10 ? setCurrentPage(() => currentPage + 1) : null;
  const handleSetCurrentPage = (index) => {
    setCurrentPage(() => index);
  };
  return (
    <div>
      <h1>Pagination</h1>
      <Posts
        handleSetCurrentPageDown={handleSetCurrentPageDown}
        handleSetCurrentPageUp={handleSetCurrentPageUp}
        handleSetCurrentPage={handleSetCurrentPage}
        loading={loading}
        posts={currentPosts}
      />
    </div>
  );
}

export default App;
