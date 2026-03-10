import { useState } from "react";

function AddPostForm({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const maxTitleLength = 100;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !body) return;

    onAddPost({
      id: Date.now(),
      title,
      body,
    });

    setTitle("");
    setBody("");
  };

  const remaining = maxTitleLength - title.length;

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <h2>เพิ่มโพสต์ใหม่</h2>

      {/* หัวข้อโพสต์ + ตัวนับ */}
      <div style={{ marginBottom: "0.5rem" }}>
        <label>หัวข้อโพสต์</label>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span></span>

          <span
            style={{
              fontSize: "0.8rem",
              color: remaining < 10 ? "red" : "#666",
            }}
          >
            {title.length}/{maxTitleLength}
          </span>
        </div>
      </div>

      <input
        type="text"
        placeholder="หัวข้อโพสต์"
        value={title}
        maxLength={maxTitleLength}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          display: "block",
          marginBottom: "1rem",
          width: "100%",
          padding: "0.5rem",
        }}
      />

      <textarea
        placeholder="เนื้อหาโพสต์"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        style={{
          display: "block",
          marginBottom: "1rem",
          width: "100%",
          padding: "0.5rem",
        }}
      />

      <button type="submit">เพิ่มโพสต์</button>
    </form>
  );
}

export default AddPostForm;