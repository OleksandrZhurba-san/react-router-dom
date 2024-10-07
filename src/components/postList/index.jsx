import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function PostList({ posts }) {
  return (
    <div className={styles.link_container}>
      <p>This is my Post List</p>
      {posts.map((post, idx) => {
        return (
          <Link key={idx} to={`/post/${idx}`}>
            {post.title}
          </Link>
        );
      })}
    </div>
  );
}
