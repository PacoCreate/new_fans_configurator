const getInfoMotor = (fanArr) => {
  let availableMotor = [];
  fanArr.map((eachColorMotor) => {
    if (eachColorMotor.active !== false && !availableMotor.includes(eachColorMotor.motor)) {
      availableMotor.push(eachColorMotor.motor);
    }
  });
  // console.log(availableMotor);
  return availableMotor;
};
//  colores de aspas
const getInfoBlades = (fanArr, chosenMotor) => {
  console.log(chosenMotor);
  let availableBlades = [];
  fanArr
    .filter((fan) => fan.motor === chosenMotor)
    .map((fanBlades) => {
      if (fanBlades.active !== false) {
        return availableBlades.push(fanBlades.blades);
      }
    });

  // console.log(availableBlades);
  return availableBlades;
};

export { getInfoBlades, getInfoMotor };
