const Create = () => {
  return (
    <div className="create">
      <h3>Add a New Article</h3>
      <form>
        <label>Title</label>
        <input type="text" />
        <label>Content</label>
        <textarea cols="30" rows="10"></textarea>
        <label>Author</label>
        <select>
          <option value="Mario">Mario</option>
          <option value="Yoshi">Yoshi</option>
          <option value="Princess">Princess</option>
        </select>
      </form>
    </div>
  );
};

export default Create;
