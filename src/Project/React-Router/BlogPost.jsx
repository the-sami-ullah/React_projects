// components/BlogPost.jsx
import { Link, useParams } from "react-router-dom";

// Fake database
const postContent = {
  "react-tips": "React tip #1: Keep components small!",
  "routing-guide": "React Router makes SPAs easy.",
  "useState-explained": "useState lets you add state to function components.",
};

export default function BlogPost() {
  const { slug } = useParams();

  const content = postContent[slug] || "Post not found.";

  return (
    <div>
      <h2>📝 Blog: {slug}</h2>
      <p>{content}</p>
      <Link 
  to="/blog" 
  style={{ 
    color: 'blue', 
    textDecoration: 'underline',
    cursor: 'pointer'
  }}
>
  ← Back to all posts
</Link>
    </div>
  );
}
