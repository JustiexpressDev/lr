import React, { useEffect } from "react";
import { Helmet } from "react-helmet"; // Añadido para mejorar el SEO

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
      <Helmet>
        <html lang="es" />
        <title>Justiexpress - Innovación legal respaldada por abogados expertos</title>
        <meta name="description" content="Servicios legales profesionales: Tutelas, derechos de petición, reclamaciones, desacatos e impugnaciones. Asesoría jurídica para personas y empresas." />
        <meta name="keywords" content="asesoría legal, abogados, derechos de petición, acciones de tutela, servicios jurídicos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Justiexpress - Innovación legal respaldada por abogados expertos" />
        <meta property="og:description" content="Servicios legales profesionales: Acciones de tutela, derechos de petición, reclamaciones, desacatos e impugnaciones." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.justiexpress.com" />
        <link property="og:image" href="%PUBLIC_URL%/logo.png" />
        <link rel="canonical" href="https://www.justiexpress.com" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <div className="app-container" itemScope itemType="https://schema.org/LegalService">
        <meta itemProp="name" content="Justiexpress" />
        <meta itemProp="description" content="Servicios legales profesionales en Colombia" />
        <link itemProp="image" href="%PUBLIC_URL%/logo.png" />
        
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
          aria-label="Chat de WhatsApp para consultas"
        />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/tyc" element={<TyC />} />
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

export default App;