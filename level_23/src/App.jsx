
import { useState, useOptimistic, startTransition } from "react";

function App() {
  const [likes, setLikes] = useState(10);
  const [dislikes, setDislikes] = useState(2);

  const [comments, setComments] = useState([
    { id: 1, text: "Very helpful post!" },
    { id: 2, text: "React is awesome!" },
  ]);

  const [commentText, setCommentText] = useState("");
  const [editId, setEditId] = useState(null);

  // Optimistic Like
  const [showLikes, addLike] = useOptimistic(
    likes,
    (current, value) => current + value
  );

  // Optimistic Dislike
  const [showDislikes, addDislike] = useOptimistic(
    dislikes,
    (current, value) => current + value
  );

  // Optimistic Comments
  const [showComments, updateComments] = useOptimistic(
    comments,
    (current, action) => {
      if (action.type === "add") {
        return [...current, action.comment];
      }

      if (action.type === "edit") {
        return current.map((c) =>
          c.id === action.id ? { ...c, text: action.text } : c
        );
      }

      if (action.type === "delete") {
        return current.filter((c) => c.id !== action.id);
      }

      return current;
    }
  );

  // Like button
  const handleLike = async () => {
    startTransition(async () => {
      addLike(1);

      await new Promise((resolve) => setTimeout(resolve, 700));

      setLikes((prev) => prev + 1);
    });
  };

  // Dislike button
  const handleDislike = async () => {
    startTransition(async () => {
      addDislike(1);

      await new Promise((resolve) => setTimeout(resolve, 700));

      setDislikes((prev) => prev + 1);
    });
  };

  // Add ya Edit comment
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!commentText.trim()) return;

    const text = commentText.trim();

    if (editId !== null) {
      const id = editId;

      startTransition(async () => {
        updateComments({ type: "edit", id, text });

        await new Promise((resolve) => setTimeout(resolve, 700));

        setComments((prev) =>
          prev.map((c) => (c.id === id ? { ...c, text } : c))
        );
      });

      setEditId(null);
    } else {
      const comment = { id: Date.now(), text };

      startTransition(async () => {
        updateComments({ type: "add", comment });

        await new Promise((resolve) => setTimeout(resolve, 700));

        setComments((prev) => [...prev, comment]);
      });
    }

    setCommentText("");
  };

  // Edit button
  const handleEdit = (comment) => {
    setEditId(comment.id);
    setCommentText(comment.text);
  };

  // Delete button
  const handleDelete = (id) => {
    startTransition(async () => {
      updateComments({ type: "delete", id });

      await new Promise((resolve) => setTimeout(resolve, 700));

      setComments((prev) => prev.filter((c) => c.id !== id));
    });
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>React useOptimistic Demo 🚀</h1>
      <p style={styles.subtitle}>
        Like, Dislike, Add, Edit aur Delete Comments
      </p>

      <div style={styles.card}>
        <h2>React is Awesome! ❤️</h2>
        <p style={styles.description}>
          useOptimistic se UI server response se pehle update dikhati hai.
        </p>

        <div style={styles.actions}>
          <button style={styles.like} onClick={handleLike}>
            👍 Like ({showLikes})
          </button>

          <button style={styles.dislike} onClick={handleDislike}>
            👎 Dislike ({showDislikes})
          </button>
        </div>

        <hr style={styles.divider} />

        <h3>Comments ({showComments.length})</h3>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            style={styles.input}
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Write a comment..."
          />

          <button style={styles.submit} type="submit">
            {editId !== null ? "Update" : "Add Comment"}
          </button>

          {editId !== null && (
            <button
              style={styles.cancel}
              type="button"
              onClick={() => {
                setEditId(null);
                setCommentText("");
              }}
            >
              Cancel
            </button>
          )}
        </form>

        {showComments.map((comment) => (
          <div key={comment.id} style={styles.comment}>
            <p style={styles.commentText}>💬 {comment.text}</p>

            <div style={styles.commentActions}>
              <button
                style={styles.edit}
                onClick={() => handleEdit(comment)}
              >
                Edit
              </button>

              <button
                style={styles.delete}
                onClick={() => handleDelete(comment.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    maxWidth: "700px",
    margin: "30px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    color: "#1e293b",
    backgroundColor: "#f1f5f9",
    minHeight: "90vh",
  },
  heading: {
    textAlign: "center",
    color: "#1d4ed8",
  },
  subtitle: {
    textAlign: "center",
    color: "#64748b",
    marginBottom: "25px",
  },
  card: {
    backgroundColor: "white",
    padding: "24px",
    borderRadius: "14px",
    boxShadow: "0 4px 14px #00000010",
  },
  description: {
    color: "#64748b",
    lineHeight: 1.6,
  },
  actions: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    margin: "20px 0",
  },
  like: {
    backgroundColor: "#dcfce7",
    color: "#166534",
    border: "1px solid #86efac",
    padding: "10px 16px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  dislike: {
    backgroundColor: "#fee2e2",
    color: "#991b1b",
    border: "1px solid #fca5a5",
    padding: "10px 16px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  divider: {
    border: "none",
    borderTop: "1px solid #e2e8f0",
    margin: "24px 0",
  },
  form: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
    marginBottom: "20px",
  },
  input: {
    flex: "1",
    minWidth: "150px",
    padding: "11px",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
  },
  submit: {
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    padding: "10px 14px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  cancel: {
    backgroundColor: "#e2e8f0",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  comment: {
    padding: "12px",
    marginTop: "12px",
    backgroundColor: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
  },
  commentText: {
    overflowWrap: "anywhere",
  },
  commentActions: {
    display: "flex",
    gap: "8px",
  },
  edit: {
    backgroundColor: "#fef3c7",
    color: "#92400e",
    border: "none",
    padding: "7px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  delete: {
    backgroundColor: "#fee2e2",
    color: "#b91c1c",
    border: "none",
    padding: "7px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default App;
