import Path from "./Path";
import { Link } from "react-router-dom";
const ButtonPaths = (props) => {
  return (
    <Link className="c-links__backlink" to={props.linkTo}>
      {" "}
      <div className="c-links__backlink-btn">
        <svg width="35" height="33" viewBox={props.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
          <Path d={props.d} e={props.e} f={props.f} />
        </svg>
      </div>
      <span className="c-links__backlink-text">{props.text}</span>
    </Link>
  );
};
export default ButtonPaths;
