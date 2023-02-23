import React, { useEffect } from "react";

//pages
import { Consultoría } from "./pages/Consultoría";
import { Contratos } from "./pages/Contratos";
import { Desacatos } from "./pages/Desacatos";
import { DP } from "./pages/DP";
import { Empresas } from "./pages/Empresas";
import { Home } from "./pages/Home";
import { Impugnaciones } from "./pages/Impugnaciones";
import { Plantillas } from "./pages/Plantillas";
import { Reclamaciones } from "./pages/Reclamaciones";
import { Tutelas } from "./pages/Tutelas";

//componentes descargados
import { Routes, Route, Navigate } from "react-router-dom";
import { SocialBar } from "./components/SocialBar/SocialBar";
import { FloatingWhatsApp } from "react-floating-whatsapp";

//componentes propios
import { Footer } from "./components/Footer/Footer";
import { TyC } from "./pages/TyC";
import { Privacidad } from "./pages/Privacidad";

//estilos
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fontsource/open-sans";
import "./components/Modal/VentanaModal.scss";
import "./components/BarraNav/BarraNav.scss";
import "./components/Contador/Contador.scss";
import "./components/Quote/Quote.scss";
import "./components/Servicios/ServiciosCard.scss";
import "./components/Form/Form.scss";
import "./components/Testimonios/Testimonios.scss";
import "./components/QuiénesSomos/QuiénesSomos.scss";
import "./components/Footer/Footer.scss";
import "./components/SocialBar/SocialBar.scss";

//imágenes
import logo from "C:/Users/guall/OneDrive/Escritorio/lr/src/assets/img/logo.png";

//efectos
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <SocialBar />
      <FloatingWhatsApp
        phoneNumber={"573223034024"}
        accountName={"Justiexpress"}
        avatar={logo}
        statusMessage={"en línea"}
        chatMessage={"Hola, ¿en qué te podemos ayudar?"}
        placeholder={"Escribe un mensaje"}
        darkMode={true}
        allowClickAway={true}
      />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/consultoria" element={<Consultoría />} />
        <Route path="/contratos" element={<Contratos />} />
        <Route path="/desacatos" element={<Desacatos />} />
        <Route path="/derechos-de-peticion" element={<DP />} />
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/impugnaciones" element={<Impugnaciones />} />
        <Route path="/proformas-respuestas" element={<Plantillas />} />
        <Route path="/reclamaciones" element={<Reclamaciones />} />
        <Route path="/tutelas" element={<Tutelas />} />
        <Route path="/tyc" element={<TyC />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
