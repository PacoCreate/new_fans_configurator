import SectionNav from "../../Header/Nav/SectionNav";
import BackButtons from "./BackButton/BackButtons";
import ConfiguratorSelector from "./ConfiguratorSelector";
import ImageFan from "./ImageFan";
import { useState } from "react";

const Configurator = (props) => {
  //VARIABLES ¿¿
  const nameFolder = window.location.href.split("/serie/")[1].split("/")[0];
  const fanArr = require(`/src/data/series/${nameFolder}.json`).fans;
  let initImg = fanArr[0].motor;
  //ESTADOS
  const [selectedMotor, setSelectedMotor] = useState(initImg);

  // Creamos la función updateMaterial que le vamos a pasar a la hija ListOfMaterials y ButtonSelectorType
  // El componente ButtonSelectorType ejecutará esta función cuando la usuaria pulse el material escogido
  const updateMaterial = (material) => {
    // Cuando ButtonSelectorType ejecute esta función nos pasará el material por parámetros
    // En esta función guardamos el material en el estado
    setSelectedMotor(material);
  };

  return (
    <div>
      <BackButtons />
      <SectionNav numberStep={props.numberStep} descriptionStep={props.descriptionStep} stepSelected={props.stepSelected} />
      <section className="c-configurator">
        <ImageFan selectedMotor={selectedMotor} />
        <ConfiguratorSelector nextPath={props.nextPath} updateMaterial={updateMaterial} />
      </section>
    </div>
  );
};

export default Configurator;
