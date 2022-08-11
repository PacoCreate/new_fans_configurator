import ButtonSelectorType from "./ButtonSelector/ButtonSelectorType";

const ListOfMaterials = (props) => {
  const nameFolder = window.location.href.split("/serie/")[1].split("/")[0];
  const fanArr = require(`/src/data/series/${nameFolder}.json`).fans;

  //colores de motor
  const getInfoMotor = () => {
    let availableMotor = [];
    fanArr.map((eachColorMotor) => {
      if (eachColorMotor.active !== false && !availableMotor.includes(eachColorMotor.motor)) {
        availableMotor.push(eachColorMotor.motor);
      }
    });  

      return availableMotor;
  };

  // colores de aspas
  const getInfoBlades = () => {
    let availableBlades = [];
    //filtro el array por medio del estado, que me devuelve el color seleccionado por el usuario del motor
    const arrColorBlades = fanArr
      .filter((fan) => fan.motor === props.selectedMotor)
      .map((fanBlades) => fanBlades.blades);
    availableBlades.push(arrColorBlades);
    return availableBlades[0];
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
