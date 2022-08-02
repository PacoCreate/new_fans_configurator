const ActionSteps = (props) => {

  return (
    <div className="c-step-counter">
      <p className="c-step-counter__text u-underline">
        <span className="c-step-counter__circle">{props.numberStep}</span>
       {props.descriptionStep}
      </p>
    </div>
  );
};

export default ActionSteps;
