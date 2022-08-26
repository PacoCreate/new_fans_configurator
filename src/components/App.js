import "../styles/App.scss";
import { getInfoBlades, getInfoMotor } from "../services/getColorBubbles";
import { Routes, Route, useLocation, matchPath, useParams } from "react-router-dom";
import { useState } from "react";

import Home from "./Landing/Main/Grid/Home";
import Configurator from "./Landing/Main/Configurator/Configurator";

const App = () => {
  const [fan, setFan] = useState("");
  const [motor, setMotor] = useState("");
  const [blades, setBlades] = useState("")
  const updateNameFan = (fan) => {
    setFan(fan);
  };
const updateMotor = (color) =>  {
  setMotor (color)
}
const updateBlades = (material) =>  {
  setBlades (material)
}
  // Con el hook useLocation primero obtengo la ruta actual
  const { pathname } = useLocation();
  // Con el matchPath compruebo si la ruta actual coincide con /serie/:fanName
  const routeData = matchPath("/serie/:fanName", pathname);

  // Si no coincide, routeData es null
  // Si sí coincide, routeData es un objeto con mucha información útil
  // La información que me interesa está en routeData.params.productId
  const fanName = routeData !== null ? routeData.params.fanName : "";

  return (
    <>
      <Routes>
        <Route path="/" element={<Home updateNameFan={updateNameFan} />}></Route>
        <Route
          exact
          path="/serie/:fanName"
          element={
            <Configurator
              fan={fan}
              motor={motor}
              nextPath={`motor/${motor}`}
              numberStep="2"
              descriptionStep="Elige el color de motor"
              textSelector="Motores disponibles"
              getInfoBubbles={getInfoMotor}
              updateMotor={updateMotor}
            />
          }
        ></Route>
        <Route
          exact
          path="/serie/:fanName/motor/:colormotor"
          element={
            <Configurator
              fan={fan}
              motor={motor}
              blades={blades}
              nextPath={`blades/${blades}`}
              numberStep="3"
              descriptionStep="Elige el color de las aspas"
              textSelector="Colores de aspas"
              getInfoBubbles={getInfoBlades}
              updateBlades={updateBlades}
            />
          }
        ></Route>
        <Route
          path={`/serie/:fanName/motor/:colormotor/blades/${blades}`}
          element={
            <Configurator
            updateMotor={updateMotor}
            updateBlades={updateBlades}
              fan={fan}
              motor={motor}
              nextPath="light"
              numberStep="4"
              descriptionStep="Elige las opciones de luz"
              textSelector="Opciones de luz"
            />
          }
        ></Route>
        <Route
         updateMotor={updateMotor}
          path="/serie/:fanName/motor/blades/light"
          element={
            <Configurator
              fan={fan}
              motor={motor}
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
