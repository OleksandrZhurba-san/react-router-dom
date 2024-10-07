import { Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";

export default function Post({ posts }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((post) => post.id === Number(id));

  function handleClick() {
    navigate("/posts");
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Button type="primary" onClick={handleClick}>
        Back
      </Button>
    </div>
  );
}
