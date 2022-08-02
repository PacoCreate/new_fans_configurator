const EachPartOfFan = (props) => {
  console.log(props.textStep);
  return (
    <>
      {" "}
      <li className={`c-fannavigation__item c-fannavigation__item--${props.stepSelected}`}>{props.textStep}</li>
    </>
  );
};
export default EachPartOfFan;
