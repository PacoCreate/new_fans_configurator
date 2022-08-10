import EachPartOfFan from "./EachPartOfFan/EachPartOfFan";


const FanParts = (props) => {

  return (
    <ul className="c-fannavigation u-list-unstyled">
      <EachPartOfFan bold="/" textStep="1. modelo" />

      <span>|</span>

      <EachPartOfFan bold={`/serie/${props.fan}`} textStep="2. motor" />

      <span>|</span>

      <EachPartOfFan bold={`/serie/${props.fan}/motor`} textStep="3. aspas" />

      <span>|</span>

      <EachPartOfFan bold={`/serie/${props.fan}/motor/blades`} textStep="4. luz" />

      <span>|</span>

      <EachPartOfFan bold={`/serie/${props.fan}/motor/blades/light`} textStep="5. wifi" />

    </ul>
  );
};
export default FanParts;
