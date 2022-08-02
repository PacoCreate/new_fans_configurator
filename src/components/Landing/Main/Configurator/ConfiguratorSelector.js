import Steps from "./Steps";
import ComponentButtonColor from "./ButtonSelector/Prueba";

const ConfiguratorSelector = () => {
  return (
    <article className="c-configurator__selector">
      <Steps />

      <ul className="c-configurator__selector-colors u-list-unstyled">
        {" "}
        <ComponentButtonColor />
      </ul>
    </article>
  );
};
export default ConfiguratorSelector;
