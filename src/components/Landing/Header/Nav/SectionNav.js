import Action from "./ActionSteps";
import FanParts from "./FanParts";

const SectionNav = (props) => {

  return (
    <article className="c-fannavigation">
      <Action descriptionStep={props.descriptionStep} numberStep={props.numberStep} />
      <FanParts fan={props.fan} bold={props.bold} />
    </article>
  );
};

export default SectionNav;
