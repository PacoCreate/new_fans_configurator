import EachPartOfFan from "./EachPartOfFan/EachPartOfFan";


const FanParts = (props) => {

  return (
    <ul className="c-fannavigation u-list-unstyled">
      <EachPartOfFan bold="/" textStep="1. Modelo" stepSelected={props.stepSelected} />

      <span>|</span>

      <EachPartOfFan bold={`/serie/${props.fan}`} textStep="2. Motor" stepSelected={props.stepSelected} />

      <span>|</span>

      <EachPartOfFan bold={`/serie/${props.fan}/motor`} textStep="3. Aspas" stepSelected={props.stepSelected} />

      <span>|</span>

      <EachPartOfFan bold={`/serie/${props.fan}/motor/blades`} textStep="4. Luz" stepSelected={props.stepSelected} />

      <span>|</span>

      <EachPartOfFan bold="/" textStep="5. Wifi" stepSelected={props.stepSelected} />

    </ul>
  );
};
export default FanParts;
