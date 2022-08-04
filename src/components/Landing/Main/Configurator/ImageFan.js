import globalData from "../../../../data/fans-series.json";
import { useEffect, useState } from "react";

const allData = { globalData }.globalData.series;

const ImageFan = (props) => {
  const getImgUrl = () => {
    //get base url
    const baseURL = "https://www.create-store.com/img/core/ikh/configurator/fans/images";
    //get the name's folder between url
    const folder = window.location.href.split("/").pop();

    //get motor color
    const baseImg=  "https://www.create-store.com/img/core/ikh/configurator/fans/images/windcalm-dc/style.jpg/"
    const getImgUrl = `${baseURL}/${folder}/${props.selectedMaterial}/fan.jpg`;
    // const getImgUrl = `${baseURL}/${folder}/style.jpg`;

    return <img className="c-configurator__image-picture-img" src={getImgUrl} />;
  };


  return (
    <article className="c-configurator__image">
      <picture className="c-configurator__image-picture">{getImgUrl()}</picture>
    </article>
  );
};
export default ImageFan;
