const ButtonSelectorType = (props) => { 
  // Cuando la usuaria cambia de material se ejecuta esta función manejadora del evento
  function handleButton(ev) {
       // El componente ConfiguratorSelector pasa a este componente la función updateMaterial por props
    // Este componente ejecuta la función updateMaterial cuando la usuaria pulsa el color o material seleccionado
    // Este componente pasa el valor del input a su madre
    props.updateMaterial(ev.target.getAttribute("data-color-id"));
  }

  return (
    <li
      data-color-id={`${props.eachColorButton}`}
      className={`c-configurator__selector-colors-color  c-configurator__selector-colors-color--${props.eachColorButton}`}
      title={`${props.eachColorButton}`}
      onClick={handleButton}
    ></li>
  );
};
export default ButtonSelectorType;
