import images from "../backgroundImg";

function BackgroundChange(props) {
  return (
    <ul id="images-ul">
      {images.map((img, index) => (
        <li id={img.id} key={index}>
          <img
            alt={index}
            className="img"
            src={img.src}
            name={img.id}
            onClick={(e) => props.changeBackground(e)}
          ></img>
        </li>
      ))}
    </ul>
  );
}

export default BackgroundChange;