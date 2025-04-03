import logo from "./logo.svg";
import "./App.css";
import images from "./images.json";
import Image from "./image";

function App() {
  function compareFn(a, b) {
    if (a.name > b.name) {
      return -1;
    } else if (a.name < b.name) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  const sortedImages = images.sort(compareFn);
  return (
    <div className="container">
      <header>
        <h2>Matt Russo</h2>
        <h1>Portfolio</h1>
      </header>
      <div className="body">
        {sortedImages.map((image) => {
          return <Image {...image} />;
        })}
      </div>
    </div>
  );
}

export default App;
