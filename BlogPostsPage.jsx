import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BlogPostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setError("Could not load blog posts.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ padding: "20px" }}>Loading posts...</h2>;
  }

  if (error) {
    return <h2 style={{ padding: "20px" }}>{error}</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Blog Posts</h1>

      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "8px",
          }}
        >
          <h2>{post.title}</h2>
          <p>{post.body.substring(0, 100)}...</p>
          <Link to={`/posts/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}

export default BlogPostsPage;