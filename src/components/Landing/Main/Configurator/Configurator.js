import SectionNav from "../../Header/Nav/SectionNav";
import BackButtons from "./BackButton/BackButtons";
import ConfiguratorSelector from "./ConfiguratorSelector";
import ImageFan from "./ImageFan";

const Configurator = (props) => {
  return (
    <div>
      <BackButtons />
      <SectionNav numberStep="2" descriptionStep="Elige el color de motor" stepSelected={props.stepSelected}/>
      <section className="c-configurator">
        <ImageFan />
        <ConfiguratorSelector />
      </section>
    </div>
  );
};

export default Configurator;
