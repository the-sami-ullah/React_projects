// components/BlogList.jsx
import { useNavigate } from "react-router-dom";

const posts = [
  { slug: "react-tips", title: "10 React Tips" },
  { slug: "routing-guide", title: "React Router Guide" },
  { slug: "useState-explained", title: "useState Explained" },
];

export default function BlogList() {
  const navigate = useNavigate();

  const handleReadPost = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <div>
      <h2>📰 Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <button onClick={() => handleReadPost(post.slug)}>
              {post.title}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate("/")}>← Back to Home</button>
    </div>
  );
}
