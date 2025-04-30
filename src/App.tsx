import React, { useEffect, Suspense } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
import logo from "./assets/img/logo.png";

//efectos
import AOS from "aos";
import "aos/dist/aos.css";

// Función para trackear eventos de conversión
const trackConversion = (eventName: string, eventData = {}) => {
  // Google Analytics / Google Ads
  const gtagFunction = (window as any).gtag;
  if (gtagFunction) {
    gtagFunction('event', eventName, {
      'send_to': 'AW-697508779/tF-ACKqxyb4aEKvHzMwC',
      ...eventData
    });
  }

  // Facebook Pixel tracking
  const fbqFunction = (window as any).fbq;
  if (fbqFunction) {
    fbqFunction('track', eventName, eventData);
  }
};

// Define prop types for components that need trackConversion
interface TrackingProps {
  trackConversion: (eventName: string, eventData?: {}) => void;
}

function App() {
  useEffect(() => {
    // Inicializar AOS con opciones optimizadas
    AOS.init({
      once: true, // Animaciones solo una vez
      disable: 'mobile', // Deshabilitar en móviles para mejor rendimiento
      duration: 1500, // Reducir duración para mejor rendimiento
    });
    
    // Precargar imágenes críticas
    const preloadImages = ['logo.png', 'hero-background.jpg'];
    preloadImages.forEach(image => {
      const img = new Image();
      img.src = `/assets/img/${image}`;
    });
  }, []);

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <html lang="es" />
          <title>Justiexpress | Asesoría Legal Online en Colombia - Tutelas y Derechos de Petición</title>
          <meta name="description" content="Servicios legales profesionales para personas y empresas: Tutelas, derechos de petición, reclamaciones y más. Abogados expertos listos para ayudarte. ¡Contáctanos ya!" />
          <meta name="keywords" content="tutela colombia, derecho de petición, abogados online, asesoría legal digital, reclamaciones legales, desacatos, impugnaciones, contratos, justiexpress" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="Justiexpress | Asesoría Legal Online en Colombia" />
          <meta property="og:description" content="Servicios legales profesionales: Acciones de tutela, derechos de petición, reclamaciones, desacatos e impugnaciones. ¡Contáctanos ahora!" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.justiexpress.com" />
          <meta property="og:image" content="https://www.justiexpress.com/logo-social.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <link rel="canonical" href="https://www.justiexpress.com" />
          <meta name="robots" content="index, follow, max-image-preview:large" />
          <link rel="alternate" hrefLang="es-co" href="https://www.justiexpress.com" />
        </Helmet>
        
        <div className="app-container" itemScope itemType="https://schema.org/LegalService">
          <meta itemProp="name" content="Justiexpress - Servicios Legales Online" />
          <meta itemProp="description" content="Servicios legales profesionales en Colombia: tutelas, derechos de petición y asesoría jurídica" />
          <link itemProp="image" href="https://www.justiexpress.com/logo.png" />
          <meta itemProp="telephone" content="+573185725324" />
          <meta itemProp="email" content="contacto@justiexpress.com" />
          
          <SocialBar />
          
          <FloatingWhatsApp
            phoneNumber={"573185725324"}
            accountName={"Justiexpress"}
            avatar={logo}
            statusMessage={"En línea | Respuesta inmediata"}
            chatMessage={"Hola, ¿en qué podemos ayudarte con tu caso legal?"}
            placeholder={"Escribe tu consulta..."}
            darkMode={true}
            allowClickAway={true}
            aria-label="Chat de WhatsApp para consultas legales"
            onClick={() => trackConversion('whatsapp_click', {position: 'floating_button'})}
          />
          
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home trackConversion={trackConversion} />} />
              <Route path="/tyc" element={
                <Suspense fallback={<div className="loading">Cargando...</div>}>
                  <TyC />
                </Suspense>
              } />
              <Route path="/privacidad" element={
                <Suspense fallback={<div className="loading">Cargando...</div>}>
                  <Privacidad />
                </Suspense>
              } />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </>
    </HelmetProvider>
  );
}

export default App;