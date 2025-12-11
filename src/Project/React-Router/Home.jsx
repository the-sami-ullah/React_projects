// components/Home.jsx
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h2>🏡 Home</h2>
      <p>Welcome to our Fake Blog!</p>
      <Link to="/blog">Read our blog posts →</Link>
    </div>
  );
}