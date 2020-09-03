import React, {useState} from "react";

const CreateBlog = ({createBlog}) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createBlog({title, author, url});
    setTitle("");
    setAuthor("");
    setUrl("");
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleUrl = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div>
      <h1>create new</h1>

      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor='title'>title: </label>
          <input type='text' id='title' value={title} onChange={handleTitle} />
        </p>
        <p>
          <label htmlFor='author'>author: </label>
          <input
            type='text'
            id='author'
            value={author}
            onChange={handleAuthor}
          />
        </p>
        <p>
          <label htmlFor='url'>url: </label>
          <input type='text' id='url' value={url} onChange={handleUrl} />
        </p>
        <button>create</button>
      </form>
    </div>
  );
};

export default CreateBlog;
