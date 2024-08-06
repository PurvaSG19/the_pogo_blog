import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);
    axios.post('http://localhost:8000/blogs', blog)
      .then(() => {
        console.log('New blog added');
        setIsPending(false);
        history.push('/'); // Redirect to the homepage after adding the blog
      })
      .catch(err => {
        console.error("Error adding blog:", err);
        setIsPending(false);
      });
  };

  return (
    <div className="create">
      <h2>Add new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title: </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog Body: </label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <label>Blog Author: </label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="SpongeBob">SpongeBob</option>
          <option value="Patrick">Patrick</option>
        </select>
        {!isPending && <button>Add blog</button>}
        {isPending && <button disabled>Adding blog...</button>}
      </form>
    </div>
  );
};

export default Create;
