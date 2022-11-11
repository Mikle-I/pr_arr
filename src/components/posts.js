import { useState } from "react";
import { useEffect } from "react";
import Post from "./post";

function Posts() {
  const [post, setPost] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPost(json))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  if (error) {
    return <h1>Error:{error}</h1>;
  }

  return (
    <div>
      <h1>POSTS</h1>
      <hr />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        post.map((item) => (
          <Post
            userId={item.userId}
            id={item.id}
            title={item.title}
            text={item.body}
            key={item.id}
          />
        ))
      )}
    </div>
  );
}
export default Posts;
