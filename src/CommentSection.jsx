function CommentSection({ comments }) {
  return (
    <div style={{ marginTop: "30px" }}>
      <h3>Comments</h3>

      {comments.length === 0 ? (
        <p>No comments yet. Be the first to comment!</p>
      ) : (
        comments.map((comment) => (
          <div
            key={comment.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            <h4>{comment.name}</h4>
            <p>{comment.body}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CommentSection;
