import React, { useContext, useState } from "react";
import { PostList } from "./Store/Post-list-store"; // import context

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !body) {
      alert("Title and Body are required!");
      return;
    }

    const newPost = {
      id: crypto.randomUUID(), // unique ID
      title,
      body,
      reaction: 0,
      userId: "user-56", // you can customize
      tags: tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0),
    };

    addPost(newPost); // add post to context

    // Clear form
    setTitle("");
    setBody("");
    setTags("");
  };

  return (
    <div className="container mt-3">
      <h4>Create a New Post</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Post Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Post Body</label>
          <textarea
            className="form-control"
            rows="4"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Write your post content"
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Tags (comma separated)</label>
          <input
            type="text"
            className="form-control"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="e.g., React, JavaScript, UET"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
