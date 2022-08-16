import Steps from "./Steps";
import NextButton from "./NextButton/NextButton";
import ListOfMaterials from "./ListOfMaterials";

const ConfiguratorSelector = (props) => {
  return (
    <article className="c-configurator__selector">
      <Steps textSelector={props.textSelector} />
      <ListOfMaterials
        fan={props.fan}
        updateMotor={props.updateMotor}
        selectedMotor={props.selectedMotor}
        getInfoBubbles={props.getInfoBubbles}
      />
      <NextButton motor={props.motor} nextPath={props.nextPath} />
    </article>
  );
};
export default ConfiguratorSelector;
