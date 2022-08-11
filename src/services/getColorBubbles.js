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
const getInfoBlades = (chosenMotor) => {
  let availableBlades = [];
  // console.log("service", props);
  //filtro el array por medio del estado, que me devuelve el color seleccionado por el usuario del motor
  const arrColorBlades = fanArr

    .filter((fan) => fan.motor === chosenMotor)
    .map((fanBlades) => fanBlades.blades);
  availableBlades.push(arrColorBlades);

  return availableBlades[0];
};

const getColorBubbles = {

  infoMotor: getInfoMotor(),
   infoBlades: getInfoBlades(),
};

export default getColorBubbles;
