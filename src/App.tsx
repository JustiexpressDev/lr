import React, { useEffect } from "react";

//pages

import { Home } from "./pages/Home";

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
import "./components/BarraNav/BarraNav.scss";
import "./components/Contador/Contador.scss";
import "./components/Quote/Quote.scss";
import "./components/Servicios/ServiciosCard.scss";
import "./components/Form/Form.scss";
import "./components/Testimonios/Testimonios.scss";
import "./components/QuiénesSomos/QuiénesSomos.scss";
import "./components/Footer/Footer.scss";
import "./components/SocialBar/SocialBar.scss";
import "./components/GoogleReviews/GoogleReviews.scss";

//imágenes
import logo from "C:/Users/guall/OneDrive/JE/Desarrollo/Código/lr/src/assets/img/logo.png";

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
        phoneNumber={"573185725324"}
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
        <Route path="/tyc" element={<TyC />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
