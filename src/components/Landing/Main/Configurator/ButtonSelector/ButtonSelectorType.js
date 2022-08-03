const ButtonSelectorType = (props) => {
  return (
    <li
      data-color-id="3"
      className={`c-configurator__selector-colors-color  c-configurator__selector-colors-color--${props.eachColorButton}`}
      title={`${props.eachColorButton}`}
    ></li>
  );
};
export default ButtonSelectorType;
