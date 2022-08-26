import Steps from "./Steps";
import NextButton from "./NextButton/NextButton";
import ListOfMaterials from "./ListOfMaterials";

const ConfiguratorSelector = (props) => {
  return (
    <article className="c-configurator__selector">
      <Steps textSelector={props.textSelector} />
      <ListOfMaterials
        numberStep={props.numberStep}
        fan={props.fan}
        updateMaterial={props.updateMaterial}
        updateMotor={props.updateMotor}
        updateBlades={props.updateBlades}
        materialSelected={props.materialSelected}
        getInfoBubbles={props.getInfoBubbles}
      />
      <NextButton motor={props.motor} nextPath={props.nextPath} />
    </article>
  );
};
export default ConfiguratorSelector;
