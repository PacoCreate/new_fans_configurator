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

  //filtro el array por medio del estado, que me devuelve el color seleccionado por el usuario del motor
  let newArr = [];
  console.log("fanArr", fanArr);
  fanArr.map((cadaFan) => {
    if (cadaFan.active !== false) {
      newArr.push(cadaFan.active);
    }
  });
  console.log("newArr", newArr);
  const arrColorBlades = fanArr
    .filter((fan) => fan.motor === chosenMotor)
    .map((fanBlades) => {
      if (fanBlades.active !== false) {
        return fanBlades.blades;
      }
    });
  availableBlades.push(arrColorBlades);

  console.log("availableBlades", availableBlades);
  return availableBlades[0];
};

export { getInfoBlades, getInfoMotor };
