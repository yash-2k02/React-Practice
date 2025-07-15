import { Link } from "react-router-dom";

const blogPosts = [
  { id: 1, title: "React Basics" },
  { id: 2, title: "Understanding Props" },
  { id: 3, title: "Conditional Rendering" },
  { id: 4, title: "Redux" },
  { id: 5, title: "React Router" },
];

function Blogs() {


  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/blogs/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blogs;
