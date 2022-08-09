import SectionNav from "../../Header/Nav/SectionNav";
import Title from "../../Header/Title"
import Main from "./Main";
const Home = (props) => {
return(   <>
    <Title />
    <SectionNav numberStep="1" descriptionStep="Elige la forma" />
    <Main  updateNameFan={props.updateNameFan} />
  </>)

}
export default Home;