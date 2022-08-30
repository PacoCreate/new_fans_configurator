const getInfoMotor = (fanArr) => {
  let availableMotor = [];
  fanArr.map((eachColorMotor) => {
    if (eachColorMotor.active !== false && !availableMotor.includes(eachColorMotor.motor)) {
      availableMotor.push(eachColorMotor.motor);
    }
  });

  return availableMotor;
};
//  colores de aspas
const getInfoBlades = (fanArr, chosenMotor) => {
  let availableBlades = [];
    fanArr
    .filter((fan) => fan.motor === chosenMotor)
    .map((fanBlades) => {
      if (fanBlades.active !== false) {
        return  availableBlades.push(fanBlades.blades);
      } 
    });



  return availableBlades;
};

export { getInfoBlades, getInfoMotor };
