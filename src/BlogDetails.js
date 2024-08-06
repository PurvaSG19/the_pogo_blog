import { useParams } from "react-router-dom";
import useFetch from "./usefetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  const handleDelete = () => {
    axios.delete('http://localhost:8000/blogs/' + blog.id)
      .then(() => {
        history.push("/");
      })
      .catch(err => {
        console.error("Error deleting blog:", err);
      });
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
