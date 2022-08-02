import EachPartOfFan from "./EachPartOfFan/EachPartOfFan";

const FanParts = (props) => {
 
  return (
    <ul className="c-fannavigation u-list-unstyled">
      <EachPartOfFan textStep="1. Modelo" stepSelected={props.stepSelected} />
      <span>|</span>
      <EachPartOfFan textStep="2. Motor" stepSelected={props.stepSelected} />
      <span>|</span>
      <EachPartOfFan textStep="3. Aspas" stepSelected={props.stepSelected} />
      <span>|</span>
      <EachPartOfFan textStep="4. Luz" stepSelected={props.stepSelected} />
      <span>|</span>
      <EachPartOfFan textStep="5. Wifi" stepSelected={props.stepSelected} />

      {/* <li className="c-fannavigation__item c-fannavigation__item--active">1. Modelo</li>
      <span>|</span>
      <li className="c-fannavigation__item c-fannavigation__item--inactive">2. Motor</li>
      <span>|</span>
      <li className="c-fannavigation__item c-fannavigation__item--inactive">3. Aspas</li>
      <span>|</span>
      <li className="c-fannavigation__item c-fannavigation__item--inactive">4. Luz</li>
      <span>|</span>
      <li className="c-fannavigation__item c-fannavigation__item--inactive">5. Wifi</li> */}
    </ul>
  );
};
export default FanParts;
