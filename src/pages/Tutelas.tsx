import { Form } from "../components/Form/Form";
import { QuiénesSomos } from "../components/QuiénesSomos/QuiénesSomos";
import { Testimonios } from "../components/Testimonios/Testimonios";
import { TestimoniosCarusel } from "../components/Testimonios/TestimoniosCarusel";
import Iframe from "react-iframe";
import { BarraNavTutelas } from "../components/BarraNav/BarraNavTutelas";

export const Tutelas = () => {
  return (
    <>
      <BarraNavTutelas />
      <div
        className="container"
        id="Pages"
        data-aos="fade-up"
        data-aos-duration="2500"
      >
        <h1>Acciones de Tutela</h1>
        <div className="section-title-divider"></div>
        <h2>
          Te invitamos a consultar los diferentes tipos de tutelas que tenemos
          disponibles para ti. En el siguiente video te explicamos cómo
          diligenciar una Acción de Tutela en contra de tu E.P.S., por ejemplo,
          cuando tienes pendiente o se te han negado tratamientos,
          procedimientos, exámenes, consultas, controles médicos o el suministro
          de medicamentos.
        </h2>
        <h2 className="text-center">
          ¡Ingresa a nuestra plataforma y hazlo ahora!
        </h2>

        <Iframe
          url="https://www.youtube.com/embed/UTwbwb3Z4zo"
          width="60%"
          height="350"
          id=""
          className="Iframe"
          display="block"
          position="relative"
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
