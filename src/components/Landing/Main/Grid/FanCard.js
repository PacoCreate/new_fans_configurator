import Data from "../../../../data/fans-series.json";
import { Link } from "react-router-dom";
const dataFans = { Data }.Data.series;

const FanCard = (props) => {
  const handleFan = (ev) => {
    const nameFan = ev.currentTarget.firstChild.href.split("/").pop();
    props.updateNameFan(nameFan);
  };

  //get image

  const renderImg = () => {
    return dataFans.map((eachFolder) => {
      const getImgUrl = `https://www.create-store.com/img/core/ikh/configurator/fans/images/${eachFolder.folder}/style.jpg?v=0.18084083997869005`;
      if (eachFolder.active === true) {
        return (
          <li key={eachFolder.id} onClick={handleFan}>
            <Link to={`/serie/${eachFolder.folder}`}>
              <img src={getImgUrl} alt={eachFolder.name.charAt(0) + eachFolder.name.slice(1).toLowerCase()} />
            </Link>
          </li>
        );
      }
    });
  };

  return <ul className="c-styles u-list-unstyled">{renderImg()}</ul>;
};

export default FanCard;
