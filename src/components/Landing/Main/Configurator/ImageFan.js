const ImageFan = (props) => {
  const getImgUrl = () => {
    //get base url
    const baseURL = "https://www.create-store.com/img/core/ikh/configurator/fans/images";
    //get the name's folder between url
    const folder = "/" + window.location.href.split("/serie/")[1].split("/")[0];
    // console.log("folder", folder);
    //url personalizada
    const imgUrl = `${baseURL}${folder}/${props.selectedMotor}/fan.jpg`;
    return <img className="c-configurator__image-picture-img" alt="fan" src={imgUrl} />;
  };
  //Voy a guardar cada paso en un estado y cada eleccion del usuario en otro estado
  //Empezaré seteando todo a nada
  // let serie = "",
  // motorColor = "",
  // bladesColor = "",
  // light = "";
  // el resultado final de la url tiene que ser algo como:
  // return `${baseURL}${serie}${motorColor}${bladesColor}${light}/fan.jpg`;
  return (
    <article className="c-configurator__image">
      <picture className="c-configurator__image-picture">{getImgUrl()}</picture>
    </article>
  );
};
export default ImageFan;
