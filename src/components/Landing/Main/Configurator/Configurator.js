import SectionNav from "../../Header/Nav/SectionNav";
import BackButtons from "./BackButton/BackButtons";
import ConfiguratorSelector from "./ConfiguratorSelector";

import ImageFan from "./ImageFan";
import { useState } from "react";
// import { useParams } from "react-router-dom";
//renombrar configurator layout
const Configurator = (props) => {
  // const { colomotor } = useParams();

  // const [stepSelected, setStepSelected] = useState("");

  //VARIABLES ¿¿
  const nameFolder = window.location.href.split("/serie/")[1].split("/")[0];
  const fanArr = require(`/src/data/series/${nameFolder}.json`).fans;
  let initImg = fanArr[0].motor;

  //ESTADOS
  const [materialSelected, setMaterialSelected] = useState(initImg);

//La función updateMaterial() recoge el material escogido por la usuaria cuando clicka en una bolita y hace que la foto cambie
  const updateMaterial = (material) => {
    // Cuando ButtonSelectorType ejecute esta función nos pasará el material por parámetros
    // En esta función guardamos el material en el estado
    setMaterialSelected(material);
  };
  return (
    <div>
      <BackButtons />
      <SectionNav
        fan={props.fan}
        bold={props.bold}
        numberStep={props.numberStep}
        descriptionStep={props.descriptionStep}
      />
      <section className="c-configurator">
        <ImageFan fan={props.fan} materialSelected={materialSelected} motor={props.motor} blades={props.blades} />
        <ConfiguratorSelector
          numberStep={props.numberStep}
          fan={props.fan}
          motor={props.motor}
          materialSelected={materialSelected}
          nextPath={props.nextPath}
          updateMaterial={updateMaterial}
          updateMotor={props.updateMotor}
          updateBlades={props.updateBlades}
          textSelector={props.textSelector}
          getInfoBubbles={props.getInfoBubbles}
        />
      </section>
    </div>
  );
};

export default Configurator;
