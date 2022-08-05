import ButtonSelectorType from "./ButtonSelector/ButtonSelectorType";

const ListOfMaterials = (props) => {
  const nameFolder = window.location.href.split("/serie/")[1].split("/")[0];
  const fanArr = require(`/src/data/series/${nameFolder}.json`).fans;

  const getInfoMotor = () => {
    let availableMotors = [];
    const getEachColor = fanArr.map((eachColorMotor) => {
      let allColors = eachColorMotor.motor;
      return allColors;
    });
    availableMotors.push(getEachColor);
    return availableMotors[0];
  };

  const uniqueSelectors = (infoAboutButtons) => {
    let result = [...new Set(infoAboutButtons)];
    return result;
  };

  const renderButtons = (infoAboutButtons) => {
    return uniqueSelectors(infoAboutButtons).map((eachButton) => {
      return <ButtonSelectorType updateMaterial={props.updateMaterial} eachColorButton={eachButton} />;
    });
  };
  return <ul className="c-configurator__selector-colors u-list-unstyled">{renderButtons(getInfoMotor())}</ul>;
};

export default ListOfMaterials;
