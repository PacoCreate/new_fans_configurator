import SectionNav from "../../Header/Nav/SectionNav";
import BackButtons from "./BackButton/BackButtons";
import ConfiguratorSelector from "./ConfiguratorSelector";

import ImageFan from "./ImageFan";
import { useState } from "react";
// import { useParams } from "react-router-dom";

const Configurator = (props) => {
  // const { colomotor } = useParams();

  // const [stepSelected, setStepSelected] = useState("");

  //VARIABLES ¿¿
  const nameFolder = window.location.href.split("/serie/")[1].split("/")[0];
  const fanArr = require(`/src/data/series/${nameFolder}.json`).fans;
  let initImg = fanArr[0].motor;

  //ESTADOS
  const [selectedMotor, setSelectedMotor] = useState(initImg);



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
        <ImageFan fan={props.fan} selectedMotor={selectedMotor} />
        <ConfiguratorSelector
     
          fan={props.fan}
          motor={props.motor}
          selectedMotor={selectedMotor}
          nextPath={props.nextPath}
          updateMotor={props.updateMotor}
          textSelector={props.textSelector}
          getInfoBubbles={props.getInfoBubbles}
        />
      </section>
    </div>
  );
};

export default Configurator;
