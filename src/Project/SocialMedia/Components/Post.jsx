import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList as PostListData } from "./Store/Post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListData);

  const handleDelete = () => {
    deletePost(post.id);
  };

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body position-relative">
        {/* TITLE + DELETE BUTTON */}
        <h5 className="card-title d-flex justify-content-between align-items-center">
          {post.title}

          {/* DELETE BADGE */}
          <span
            className="badge bg-danger p-2"
            style={{ cursor: "pointer" }}
            onClick={handleDelete} // <-- WORKING delete on span click
          >
            <MdDelete size={20} />
          </span>
        </h5>

        <p className="card-text">{post.body}</p>

        {post.tags.map((tag, index) => (
          <span key={index} className="badge text-bg-primary hashtag me-1">
            {tag}
          </span>
        ))}

        <div className="alert alert-success reactions mt-2" role="alert">
          Your Post is reacted by {post.reaction} people
        </div>
      </div>
    </div>
  );
};

export default Post;
