import { findAllByRole } from "@testing-library/react";

const fanArr = require(`../data/series/windcalm-dc.json`).fans;
const getInfoMotor = () => {
  let availableMotors = [];

  // console.log("app", fanArr);
  const getEachColor = fanArr.map((eachColorMotor) => {
    let allColors = eachColorMotor.motor;
    return allColors;
  });
  availableMotors.push(getEachColor);
  return availableMotors[0];
};
//  colores de aspas
const getInfoBlades = () => {
  let availableBlades = [];
  console.log("service", fanArr);
  //filtro el array por medio del estado, que me devuelve el color seleccionado por el usuario del motor
  const arrColorBlades = fanArr
    // aqui esta el fallo, no sabe que es fan.selectedMotor
    .filter((fan) => fan.motor === fan.selectedMotor)
    .map((fanBlades) => fanBlades.blades);
  availableBlades.push(arrColorBlades);

  return availableBlades[0];
};

const getColorBubbles = {
  infoMotor: getInfoMotor(),
  infoBlades: getInfoBlades(),
};

export default getColorBubbles;
