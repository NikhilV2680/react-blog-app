import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentForm from "./CommentForm";
import CommentSection from "./CommentSection";

function IndividualPostPage() {
  const { postId } = useParams();

  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }
        return response.json();
      })
      .then((postData) => {
        setPost(postData);

        fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`)
          .then((response) => response.json())
          .then((userData) => {
            setUser(userData);
          });

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
          .then((response) => response.json())
          .then((commentsData) => {
            setComments(commentsData);
            setLoading(false);
          });
      })
      .catch((error) => {
        console.error("Error fetching post details:", error);
        setError("Could not load post details.");
        setLoading(false);
      });
  }, [postId]);

  const addComment = (newComment) => {
    setComments([newComment, ...comments]);
  };

  if (loading) {
    return <h2 style={{ padding: "20px" }}>Loading post...</h2>;
  }

  if (error) {
    return <h2 style={{ padding: "20px" }}>{error}</h2>;
  }

  if (!post) {
    return <h2 style={{ padding: "20px" }}>Post not found.</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      {user && (
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <h3>Author Details</h3>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}

      <CommentForm postId={postId} onAddComment={addComment} />
      <CommentSection comments={comments} />
    </div>
  );
}

export default IndividualPostPage;
