import Loader from "./Components/Loader";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [todo, setToda] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    let currentTodo =
      currentId != 0 ? todo.find((todo) => todo._id === currentId) : null;
    setToda(currentTodo);
  }, [currentId]);

  console.log(todo);

  useEffect(() => {
    axios
      .get("http://localhost:8000/read")
      .then((res) => {
        setToda(res.data.msg);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submitTod = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      content: content,
    };
    axios
      .post("http://localhost:8000/create", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <form className="col s12" onSubmit={submitTod}>
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">account_circle</i>
              <input
                id="icon_prefix"
                type="text"
                className="validate"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label htmlFor="icon_prefix">Title</label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">description</i>
              <input
                id="description"
                type="tel"
                className="validate"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <label htmlFor="description">content</label>
            </div>
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
      <Loader />
      <div className="collection">
        {todo &&
          todo.map((data, i) => (
            <a
              href="#!"
              className="collection-item"
              key={i}
              onClick={() => setCurrentId(data._id)}
            >
              {data.title} {data.content}
            </a>
          ))}
      </div>
    </div>
  );
}

export default App;
