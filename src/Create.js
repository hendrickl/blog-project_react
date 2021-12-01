import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Yoshi");

  return (
    <div className="create">
      <h3>Add a New Article</h3>
      <form>
        <label>Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Content</label>
        <textarea
          cols="30"
          rows="10"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Author</label>
        <select value={author} onChange={(e) => e.target.value}>
          <option value="Mario">Mario</option>
          <option value="Yoshi">Yoshi</option>
          <option value="Princess">Princess</option>
        </select>
      </form>
      <p>{title}</p>
      <p>{body}</p>
    </div>
  );
};

export default Create;
