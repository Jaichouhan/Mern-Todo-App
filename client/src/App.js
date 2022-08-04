import Loader from "./Components/Loader";

function App() {
  return (
    <div className="container">
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">account_circle</i>
              <input id="icon_prefix" type="text" className="validate" />
              <label htmlFor="icon_prefix">Title</label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">description</i>
              <input id="description" type="tel" className="validate" />
              <label htmlFor="description">content</label>
            </div>
          </div>
        </form>
      </div>
      <Loader />
      <div className="collection">
        <a href="#!" className="collection-item">
          Alvin
        </a>
        <a href="#!" className="collection-item active">
          Alvin
        </a>
        <a href="#!" className="collection-item">
          Alvin
        </a>
        <a href="#!" className="collection-item">
          Alvin
        </a>
      </div>
    </div>
  );
}

export default App;
