
const ImageFan = (props) => {
  const getImgUrl = () => {
    //get base url
    const baseURL = "https://www.create-store.com/img/core/ikh/configurator/fans/images";
    //get the name's folder between url
    const folder = window.location.href.split("/").pop();

    //get motor color


    //url personalizada
    const imgUrl = `${baseURL}/${folder}/${props.selectedMaterial}/fan.jpg`;

    
    return <img className="c-configurator__image-picture-img" alt="fan" src={imgUrl} />;
  };

  return (
    <article className="c-configurator__image">
      <picture className="c-configurator__image-picture">{getImgUrl()}</picture>
    </article>
  );
};
export default ImageFan;
