import React, { useState } from "react";

function Apidata() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onTitleChange = e => setTitle(e.target.value);
  const onBodyChange = e => setBody(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    const data = { "userId": 6,
    "id": 1,
    "title": "sin",
    "body": "sunt dolores aut doloribus\ndolore doloribus voluptates tempora et\ndoloremque et quo\ncum asperiores sit consectetur dolorem"
  }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then(response => response.json())
      .then(res => console.log(res));
  };

  return (
      <div className="App">
        <form>
          <input  placeholder="Title" value={title}
            onChange={onTitleChange} required /><br></br>
          <textarea placeholder="Body" value={body}
            onChange={onBodyChange} required /><br></br>
          <button type="submit" onClick={handleSubmit}>
           Create Post
          </button>
        </form>
      </div>
  );
}

export default Apidata;