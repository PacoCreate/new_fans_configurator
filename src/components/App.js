import "../styles/App.scss";
// import getColorBubbles from "../services/getColorBubbles";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import { useState } from "react";

import Home from "./Landing/Main/Grid/Home";
import Configurator from "./Landing/Main/Configurator/Configurator";

const App = () => {
  const [fan, setFan] = useState("");
  // const [positionStep, setPositionStep] = useState("")
  const updateNameFan = (fan) => {
    setFan(fan);
  };
  // console.log({ getColorBubbles }.getColorBubbles);
  // Con el hook useLocation primero obtengo la ruta actual
  const { pathname } = useLocation();
  // Con el matchPath compruebo si la ruta actual coincide con /serie/:fanName
  const routeData = matchPath("/serie/:fanName", pathname);
  // Si no coincide, routeData es null
  // Si sí coincide, routeData es un objeto con mucha información útil
  // La información que me interesa está en routeData.params.productId
  const fanName = routeData !== null ? routeData.params.fanName : "";

  // const fanArr = require(`/src/data/series/${pathname}.json`).fans;
  //colores de motor
  // const getInfoMotor = () => {
  //   let availableMotors = [];
  //   const fanArr = require(`../data/series/${fan}.json`).fans;
  //   // console.log("app", fanArr);
  //   const getEachColor = fanArr.map((eachColorMotor) => {
  //     let allColors = eachColorMotor.motor;
  //     return allColors;
  //   });
  //   availableMotors.push(getEachColor);
  //   return availableMotors[0];
  // };

  //  colores de aspas
  // const getInfoBlades = () => {
  //   let availableBlades = [];
  //   const fanArr = require(`../data/series/windcalm-dc.json`).fans;
  //   //filtro el array por medio del estado, que me devuelve el color seleccionado por el usuario del motor
  //   const arrColorBlades = fanArr
  //     .filter((fan) => fan.motor === fan.selectedMotor)
  //     .map((fanBlades) => fanBlades.blades);
  //   availableBlades.push(arrColorBlades);

  //   return availableBlades[0];
  // };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home updateNameFan={updateNameFan} />}></Route>
        <Route
          path="/serie/:fanName"
          element={
            <Configurator
              fan={fan}
              nextPath="motor"
              numberStep="2"
              descriptionStep="Elige el color de motor"
              textSelector="Motores disponibles"
              //  getBubbles={getInfoMotor}
            />
          }
        ></Route>
        <Route
          path="/serie/:fanName/motor"
          element={
            <Configurator
              fan={fan}
              nextPath="blades"
              numberStep="3"
              descriptionStep="Elige el color de las aspas"
              textSelector="Colores de aspas"
              //  getBubbles={getInfoBlades}
            />
          }
        ></Route>
        <Route
          path="/serie/:fanName/motor/blades"
          element={
            <Configurator
              fan={fan}
              nextPath="light"
              numberStep="4"
              descriptionStep="Elige las opciones de luz"
              textSelector="Opciones de luz"
            />
          }
        ></Route>
        <Route
          path="/serie/:fanName/motor/blades/light"
          element={
            <Configurator
              fan={fan}
              nextPath="/serie/:fanName/motor/blades/light"
              numberStep="5"
              descriptionStep="Selecciona con o sin WiFi y app"
            />
          }
        ></Route>
        {/* Tenemos que crear a futuro algun componente para las rutas que no coincidan con nada, en el nuevo router dom se hace con el asterisco 
        <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </>
  );
};

export default App;
