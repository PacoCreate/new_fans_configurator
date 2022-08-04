import Steps from "./Steps";
import NextButton from "./NextButton/NextButton";
import ListOfMaterials from "./ListOfMaterials";

const ConfiguratorSelector = (props) => {

  return (
    <article className="c-configurator__selector">
      <Steps />
      <ListOfMaterials updateMaterial={props.updateMaterial}/>
      <NextButton />
    </article>
  );
};
export default ConfiguratorSelector;
