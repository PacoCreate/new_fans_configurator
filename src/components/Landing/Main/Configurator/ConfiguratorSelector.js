import Steps from "./Steps";
import NextButton from "./NextButton/NextButton";
import ListOfMaterials from "./ListOfMaterials";

const ConfiguratorSelector = (props) => {


  return (
    <article className="c-configurator__selector">
      <Steps textSelector={props.textSelector}/>
      <ListOfMaterials selectedMotor={props.selectedMotor} updateMaterial={props.updateMaterial}/>
      <NextButton nextPath={props.nextPath}/>
    </article>
  );
};
export default ConfiguratorSelector;
