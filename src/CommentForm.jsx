import { useState } from "react";

function CommentForm({ postId, onAddComment }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === "" || comment.trim() === "") {
      setError("Please fill in both fields.");
      return;
    }

    setError("");

    const newComment = {
      name: name,
      body: comment,
      postId: postId,
    };

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((response) => response.json())
      .then((data) => {
        onAddComment(data);
        setName("");
        setComment("");
      })
      .catch((error) => {
        console.error("Error posting comment:", error);
        setError("Could not post comment.");
      });
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Add a Comment</h3>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <textarea
            placeholder="Your comment"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            style={{ width: "100%", padding: "8px", height: "100px" }}
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Post Comment</button>
      </form>
    </div>
  );
}

export default CommentForm;
