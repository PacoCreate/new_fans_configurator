const ButtonSelectorType = (props) => {
  // Cuando la usuaria cambia de material se ejecuta esta función manejadora del evento
  function handleButton(ev) {
    //este condicional guarda el estado del motor elegido y aspas elegidas dependiendo del numero de paso en el que esté.
    if (props.numberStep === "2") {
      //updateMaterial guarda en un estado el motor escogido para más tarde hacer el filtro con las apas. Estoy segura de que esto es prescindible con el estado donde guardo el motor, pero los parámetros no son mi fuerte. Creo que sería en:
      // <ul className="c-configurator__selector-colors u-list-unstyled">
      // {renderButtons(props.getInfoBubbles(fanArr, props.materialSelected, props.updateMotor, props.updateBlades))}<-----AQUI
      // </ul>  
      //Solo lo renderizo en este paso porque en el tercer paso me petaría
      props.updateMaterial(ev.target.getAttribute("data-color-id"));
      props.updateMotor(ev.target.getAttribute("data-color-id"));
    } else if (props.numberStep === "3") {
      props.updateBlades(ev.target.getAttribute("data-color-id"));
    }
  }

  return (
    <li
      data-color-id={`${props.eachColorButton}`}
      className={`c-configurator__selector-colors-color  c-configurator__selector-colors-color--${props.eachColorButton}`}
      title={`${props.eachColorButton}`}
      onClick={handleButton}
    >
    </li>
  );
};
export default ButtonSelectorType;
