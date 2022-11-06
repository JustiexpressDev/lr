import { Form } from "../components/Form/Form";
import { QuiénesSomos } from "../components/QuiénesSomos/QuiénesSomos";
import { Testimonios } from "../components/Testimonios/Testimonios";
import { TestimoniosCarusel } from "../components/Testimonios/TestimoniosCarusel";
import Iframe from "react-iframe";

export const Plantillas = () => {
  return (
    <>
      <div
        className="container"
        id="Pages"
        data-aos="fade-up"
        data-aos-duration="2500"
      >
        <h1>Proformas de respuestas</h1>
        <div className="section-title-divider"></div>
        <h2>
          En el siguiente video te explicamos cómo registrarte y empezar a
          utlizar nuestra plataforma. Tenemos varias proformas de respuestas
          listas para que puedas estandarizar tus respuestas según el tipo de
          solicitud que te formulen.
          {/* En el siguiente video te explicamos cómo responder un derecho de petición 
          o comunicación en la que se solicite el reconocimiento de perjuicios.
        </h2>
        <h2 className="text-center">
          ¡Ingresa a nuestra plataforma y hazlo ahora! */}
        </h2>

        <Iframe
          url="https://www.youtube.com/embed/dyREnJBzMoM"
          width="60%"
          height="350"
          id=""
          className=""
          display="block"
          position="relative"
          styles={{
            margin: "auto",
            marginTop: "50px",
            marginBottom: "40px",
            border: "7px double #171717",
            borderRadius: "25px",
          }}
        />
        <br />
        <p
          className="text-center"
          data-aos="flip-left"
          data-aos-duration="2500"
        >
          <a
            className="aPages"
            href="https://justiexpress.web.app/register"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ingresa a nuestra Plataforma
          </a>
        </p>
      </div>
      <Form />
      <Testimonios />
      <TestimoniosCarusel />
      <QuiénesSomos />
    </>
  );
};
