import { Image } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { RocketDetalles } from "./components/RocketDetalles";
import { LaunchListado } from "./components/LaunchLista";
import { LaunchDetalles } from "./components/LaunchDetalles";
import logo from "./assets/logoejm.jpg";

export function App() {
  return (
    <>
      <Image m={4} src={logo} width={300} />
      <Routes>
        <Route path="/" element={<LaunchListado />} />
        <Route path="launch/:launchId" element={<LaunchDetalles />} />
        { <Route path="rockets/:rocketId" element={<RocketDetalles />} /> }
      </Routes>
    </>
  );
}