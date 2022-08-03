import Steps from "./Steps";

import ButtonSelectorType from "./ButtonSelector/ButtonSelectorType";

const ConfiguratorSelector = () => {
  //ESTADOS
  // const [motorColor, setMotorColor] = useState("");

  //get the name's folder between url
  const nameFolder = window.location.href.split("/").pop();
  const fanArr = require(`/src/data/series/${nameFolder}.json`).fans;

  const getInfoMotor = () => {
    let availableMotors = [];
    const getEachColor = fanArr.map((eachColorMotor) => {
      let allColors = eachColorMotor.motor;
      let idc = eachColorMotor.idc;
      console.log(eachColorMotor, idc);
      return allColors;
    });
    availableMotors.push(getEachColor);
    return availableMotors[0];
  };
  getInfoMotor();
  const uniqueSelectors = (infoAboutButtons) => {
    let result = [...new Set(infoAboutButtons)];
    return result;
  };

  const renderButtons = () => {
    return uniqueSelectors(getInfoMotor()).map((eachButton) => {
      return <ButtonSelectorType eachColorButton={eachButton} />;
    });
  };

  return (
    <article className="c-configurator__selector">
      <Steps />

      <ul className="c-configurator__selector-colors u-list-unstyled">{renderButtons()}</ul>
    </article>
  );
};
export default ConfiguratorSelector;
