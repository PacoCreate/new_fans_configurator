import Action from "./ActionSteps";
import Steps from "./FanParts";

const SectionNav = (props) => {
  return (
    <article className="c-fannavigation">
      <Action descriptionStep={props.descriptionStep} numberStep={props.numberStep}/>
      <Steps stepSelected={props.stepSelected}/>
    </article>
  );
};

export default SectionNav;
