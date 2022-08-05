import { Link } from "react-router-dom";
const NextButton = (props) => {
  function handleNextButton(ev) {
    // El componente ConfiguratorSelector pasa a este componente la función updateMaterial por props
 // Este componente ejecuta la función updateMaterial cuando la usuaria pulsa el color o material seleccionado
 // Este componente pasa el valor del input a su madre
 console.log("has hecho click");
}
  return (
    <Link to={props.nextPath}>
      <button className="c-configurator__selector-next" onClick={handleNextButton}>
        Siguiente
        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.22436 9.57559L12.4299 19.7812L10.972 21.2391L0.766418 11.0335L2.22436 9.57559Z" fill="#3B3B3B" />
          <path d="M3.70756 9.84478H20.0447V11.9066H3.70756V9.84478Z" fill="#3B3B3B" />
          <path
            d="M0.766418 11.0335L10.9716 0.828369L12.4295 2.28631L2.22395 12.4919L0.766418 11.0335Z"
            fill="#3B3B3B"
          />
        </svg>
      </button>
    </Link>
  );
};
export default NextButton;
