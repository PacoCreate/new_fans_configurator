const ButtonSelectorType = (props) => {
  // Cuando la usuaria cambia de material se ejecuta esta función manejadora del evento
  function handleButton(ev) {
    //aqui tendria que hacer un condicional, de si estoy en X paso me guarde una u otra cosas
    console.log( "gjknfred", props);
    props.updateMaterial(ev.target.getAttribute("data-color-id"))
    props.updateMotor(ev.target.getAttribute("data-color-id"));
  }

  return (
    <li
      data-color-id={`${props.eachColorButton}`}
      className={`c-configurator__selector-colors-color  c-configurator__selector-colors-color--${props.eachColorButton}`}
      title={`${props.eachColorButton}`}
      onClick={handleButton}
    >
      {" "}
    </li>
  );
};
export default ButtonSelectorType;
