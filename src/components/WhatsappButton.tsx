import React, { useEffect } from "react";

declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => boolean;
  }
}

const WhatsappButton = () => {
  useEffect(() => {
    window.gtag_report_conversion();
  }, []);

  return (
    <a
      target="_blank"
      rel="noreferrer"
      type="button"
      className="modal-button"
      href="https://wa.me/573185725324"
    >
      Solicita aquí tu servicio por WhatsApp{" "}
      <i id="whatsapp" className="bi bi-whatsapp"></i>
    </a>
  );
};

export default WhatsappButton;
