import globalData from "../../../../data/fans-series.json";
import { useEffect, useState } from "react";

const allData = { globalData }.globalData.series;

const getImgUrl = () => {
  //
  const baseURL = "https://www.create-store.com/img/core/ikh/configurator/fans/images";
  //get the name's folder between url
  const folder = window.location.href.split("/").pop();

  //get motor color
  const baseFanURL = `https://www.create-store.com/img/core/ikh/configurator/fans/data/series/${folder}.json`;

  const getImgUrl = `${baseURL}/${folder}/style.jpg`;
  return <img className="c-configurator__image-picture-img" src={getImgUrl} />;
};
const ImageFan = () => {
  //get the name's folder between url
  const folder = window.location.href.split("/").pop();
  const [pruebaData, setPruebaData] = useState({});
  useEffect(() => {
    // Dentro de useEffect llamamos a la API

    // fetch(`https://www.create-store.com/img/core/ikh/configurator/fans/data/series/${folder}.json`, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    // })

    //   .then((response) => {
    //     console.log(response);
    //     response.json();
    //   })
    //   .then((responseData) => {
    //     const data = responseData
    //     console.log(data);
    //     setPruebaData(data)
    //   });
    const data = require(`/src/data/series/${folder}.json`);

    setPruebaData(data);
  }, []);
  return (
    <article className="c-configurator__image">
      <picture className="c-configurator__image-picture">{getImgUrl()}</picture>
    </article>
  );
};
export default ImageFan;
