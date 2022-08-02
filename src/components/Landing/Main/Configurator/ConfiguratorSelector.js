import Steps from "./Steps";

import ButtonSelectorType from "./ButtonSelector/ButtonSelectorType";

const ConfiguratorSelector = () => {
  //get the name's folder between url
  const folder = window.location.href.split("/").pop();
  const fanArr = require(`/src/data/series/${folder}.json`).fans;
  // console.log(fanArr);
  let prueba = [];
  fanArr.map((eachColorMotor) => {
    const uniqColor = eachColorMotor.motor;
    prueba.push(uniqColor);

    // console.log(uniqColor);
  });

  const uniqColors = new Set(prueba);
  let result = [...uniqColors];
  console.log(result);
  return (
    <article className="c-configurator__selector">
      <Steps />

      <ul className="c-configurator__selector-colors u-list-unstyled">
        <ButtonSelectorType />
      </ul>
    </article>
  );
};
export default ConfiguratorSelector;
