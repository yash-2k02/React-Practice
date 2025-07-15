import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { postId } = useParams();

  return (
    <div>
      <h3>Reading Blog Post #{postId}</h3>
      <p>Content for blog post {postId}.</p>
    </div>
  );
}

