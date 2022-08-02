import Data from "../../../../data/fans-series.json";
import { Link, useParams } from "react-router-dom";
const dataFans = { Data }.Data.series;

const FanCard = () => {
  //get image

  const renderImg = () => {
    return dataFans.map((eachFolder) => {
      const getImgUrl = `https://www.create-store.com/img/core/ikh/configurator/fans/images/${eachFolder.folder}/style.jpg?v=0.18084083997869005`;
      // console.log(eachFolder.active);
      if (eachFolder.active === true) {
        return (
          <li key={eachFolder.id}>
            <Link to={`/${eachFolder.folder}`}>
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
