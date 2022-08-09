import { NavLink } from "react-router-dom";
import { useLocation, matchPath } from "react-router-dom";
const EachPartOfFan = (props) => {
  // console.log("aver", props);
  const { pathname } = useLocation();
  const routeData = matchPath("/serie/:fanName", pathname);
  const fanName = routeData !== null ? routeData.params.fanName : "";
  return (
    <>
      <li className={`c-fannavigation__item c-fannavigation__item--${props.stepSelected}`}>
        {" "}
        <NavLink
          className={({ isActive }) => {
            // console.log("bgfd", isActive);
            return isActive ? "is-active" : undefined;
          }}
          to={props.bold}
          end
        >
          {props.textStep}{" "}
        </NavLink>
      </li>
    </>
  );
};
export default EachPartOfFan;
