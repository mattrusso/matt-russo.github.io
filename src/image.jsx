import "./App.css";

export default function Image({ name, dimensions, year }) {
  return (
    <div class="imageWrapper">
      <img class="image" src={require(`./assets/${name}.png`)} />
      <div class="imageCopy">
        <p class="year">{year}</p>
        <p class="dimensions">{dimensions}</p>
      </div>
    </div>
  );
}
