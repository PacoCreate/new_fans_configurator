import Steps from "./Steps";
import NextButton from "./NextButton/NextButton";
import ListOfMaterials from "./ListOfMaterials";

const ConfiguratorSelector = (props) => {

  return (
    <article className="c-configurator__selector">
      <Steps textSelector={props.textSelector} />
      <ListOfMaterials
        fan={props.fan}
        selectedMotor={props.selectedMotor}
        updateMaterial={props.updateMaterial}
        getBubbles={props.getBubbles}
      />
      <NextButton nextPath={props.nextPath} />
    </article>
  );
};
export default ConfiguratorSelector;
