import "../styles/App.scss";

import { Routes, Route, useLocation, matchPath } from "react-router-dom";

import { useState } from "react";
// import callToFans from "../services/callToFans";

import SectionNav from "./Landing/Header/Nav/SectionNav";
import Title from "./Landing/Header/Title";
import Main from "./Landing/Main/Grid/Main";
import Configurator from "./Landing/Main/Configurator/Configurator";
// creo que tengo que crearme un estado que vaya cambiando según la ruta y hacer alguna correlacion con algún ternario quizá o seguro que siendo react habrá algo más sencillo con el texto de ese componente. Por ejemplo, que si la ruta está en la home y el texto es === Modelo, se le aplique active, sino inactuve
{
  /* <SectionNav numberStep="1" descriptionStep="Elige la forma" {textStep = "1.Modelo" ? stepSelected="active"  : "inactive"}/> */
}

// Quizá hacer lifting para coge el texto de textStep y guardarlo en un estado???

// const [textStep, setTextStep] = useState("");

const Home = () => {
  return (
    <>
      <Title />
      <SectionNav numberStep="1" descriptionStep="Elige la forma" stepSelected="active" />
      <Main />
    </>
  );
};

const App = () => {
  // Con el hook useLocation primero obtengo la ruta actual
  const { pathname } = useLocation();
  // Con el matchPath compruebo si la ruta actual coincide con /serie/:fanName
  const routeData = matchPath("/serie/:fanName", pathname);
  // Si no coincide, routeData es null
  // Si sí coincide, routeData es un objeto con mucha información útil
  // La información que me interesa está en routeData.params.productId
  const productId = routeData !== null ? routeData.params.fanName : "";
  console.log("productId", productId);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/serie/:fanName"
          element={<Configurator nextPath="blades" numberStep="2" descriptionStep="Elige el color de motor" textSelector="Motores disponibles"/>}
        ></Route>
        <Route
          path="/serie/:fanName/blades"
          element={<Configurator nextPath="light" numberStep="3" descriptionStep="Elige el color de las aspas" textSelector="Colores de aspas"/>}
        ></Route>
        <Route
          path="/serie/:fanName/blades/light"
          element={<Configurator nextPath="wifi" numberStep="4" descriptionStep="Elige las opciones de luz" textSelector="Opciones de luz"/>}
        ></Route>
        <Route
          path="/serie/:fanName/blades/light/wifi"
          element={<Configurator nextPath="" numberStep="5" descriptionStep="Selecciona con o sin WiFi y app" />}
        ></Route>
        {/* Tenemos que crear a futuro algun componente para las rutas que no coincidan con nada, que en el nuevo router dom se hace con el asterisco 
        <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </>
  );
};

export default App;
